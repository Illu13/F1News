import { noticiaInsertar } from "./../../interfaces/noticiaInsertar";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Component } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { ConnectService } from "../../services/connect.service";
import { Noticia } from "../../interfaces/noticia";
import { Router } from "@angular/router";

@Component({
    selector: "app-insertar-noticias",
    templateUrl: "./insertar-noticias.component.html",
    styleUrl: "./insertar-noticias.component.css",
})
export class InsertarNoticiasComponent {
    isSent = false;
    form: FormGroup;
    titular: string = "";
    subtitular: string = "";
    foto: string = "";
    contenidoNoticia: string = "";

    constructor(
        private snackbar: MatSnackBar,
        private connectService: ConnectService,
        private route: Router
    ) {
        this.form = new FormGroup({
            titular: new FormControl(""),
            subtitular: new FormControl(""),
            foto: new FormControl(""),
            textoNoticia: new FormControl(""),
        });
    }

    subirNoticia() {
        if (
            this.titular == "" ||
            this.subtitular == "" ||
            this.foto == "" ||
            this.contenidoNoticia == ""
        ) {
            this.snackbar.open(
                "Tienes que rellenar todos los campos",
                "Cerrar",
                {
                    duration: 3000,
                }
            );
        } else if (this.titular.length > 45) {
            this.snackbar.open(
                "El titular no puede tener mas de 45 caracteres",
                "Cerrar",
                {
                    duration: 3000,
                }
            );

        } else if (this.subtitular.length > 80) {
            this.snackbar.open(
                "El subtitular no puede tener mas de 80 caracteres",
                "Cerrar",
                {
                    duration: 3000,
                }
            );

        } else if (this.contenidoNoticia.length > 250) {
            this.snackbar.open(
                "El contenido de la noticia no puede tener mas de 250 caracteres",
                "Cerrar",
                {
                    duration: 3000,
                }
            );

        } else {
            var noticia: noticiaInsertar;
            noticia = {
                title: this.titular,
                subtitles: this.subtitular,
                photo: this.foto,
                noticetext: this.contenidoNoticia,
            };

            this.connectService
                .insertarNoticia(noticia)
                .subscribe((noticia: Noticia) => {
                    if (noticia.title == "Titular existente") {
                        this.isSent = true;
                        this.snackbar.open("El titular ya existe", "Cerrar", {
                            duration: 3000,
                        });
                    } else {
                        this.titular = "";
                        this.subtitular = "";
                        this.foto = "";
                        this.contenidoNoticia = "";
                        this.snackbar.open(
                            "Noticia insertada correctamente.",
                            "Cerrar",
                            {
                                duration: 3000,
                            }
                        );
                    }
                });
        }
    }
}
