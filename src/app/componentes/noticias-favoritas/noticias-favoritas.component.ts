import { Component } from '@angular/core';
import { Noticia } from '../../interfaces/noticia';
import { ConnectService } from '../../services/connect.service';

@Component({
  selector: 'app-noticias-favoritas',
  templateUrl: './noticias-favoritas.component.html',
  styleUrl: './noticias-favoritas.component.css'
})
export class NoticiasFavoritasComponent {

    titulo: string;
    noticias: Noticia[];
    constructor(private connectService: ConnectService) {
        this.titulo = "";
        this.noticias = [];
    }
    ngOnInit() {
        this.connectService.misNoticiasFavoritas().subscribe((noticias: Noticia[]) => {
            this.noticias = noticias;
        });
    }

}
