import { noticiaInsertar } from './../../interfaces/noticiaInsertar';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ConnectService } from '../../services/connect.service';
import { Noticia } from '../../interfaces/noticia';

@Component({
  selector: 'app-insertar-noticias',
  templateUrl: './insertar-noticias.component.html',
  styleUrl: './insertar-noticias.component.css'
})
export class InsertarNoticiasComponent {
    form: FormGroup;
    titular: string = "";
    subtitular: string = "";
    foto: string = "";
    contenidoNoticia: string = "";

    constructor(private snackbar: MatSnackBar, private connectService: ConnectService) {

        this.form = new FormGroup({
          titular: new FormControl(''),
          subtitular: new FormControl(''),
          foto: new FormControl(''),
          textoNoticia: new FormControl('')
        });
    }

    subirNoticia() {
        if (this.titular == "" || this.subtitular == "" || this.foto == "" || this.contenidoNoticia == "") {
            this.snackbar.open(
                "Tienes que rellenar todos los campos",
                "Cerrar",
                {
                    duration: 3000,
                }
            );
        } else {
            var noticia:noticiaInsertar;
            noticia = {
                title: this.titular,
                subtitles: this.subtitular,
                photo: this.foto,
                noticetext: this.contenidoNoticia,

            }
            console.log(this.connectService.insertarNoticia(noticia).subscribe((noticia: Noticia) => {
                console.log(noticia);
    
            }));
        }
    }
}
