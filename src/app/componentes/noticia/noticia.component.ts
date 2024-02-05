import { Component, Input } from "@angular/core";
import { Noticia } from "../../interfaces/noticia";
import { ConnectService } from "../../services/connect.service";
import { CookieService } from "ngx-cookie-service";
import { CookieServiceService } from "../../services/cookie-service.service";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
    selector: "app-noticia",
    templateUrl: "./noticia.component.html",
    styleUrl: "./noticia.component.css",
})
export class NoticiaComponent {
    @Input() noticia: Noticia = {
        id: 0,
        title: "",
        subtitle: "",
        photo: "",
        noticetext: "",
    };
    token: string = this.cookies.getCookie("token");

    constructor(
        private cs: ConnectService,
        private cookies: CookieServiceService,
        private aviso: MatSnackBar
    ) {}

    favorita() {
        this.cs
            .marcarNoticiaFav(this.noticia)
            .subscribe((noticias: boolean) => {
                if (noticias == true) {
                    this.aviso.open("Noticia marcada como favorita", "Cerrar", {
                        duration: 3000,
                    });
                } else {
                    this.aviso.open("Ya has marcado esta noticia como favorita", "Cerrar", {
                        duration: 3000,
                    });
                }
            });
    }
}
