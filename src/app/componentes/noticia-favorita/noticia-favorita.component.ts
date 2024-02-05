import { Component, Input } from '@angular/core';
import { Noticia } from '../../interfaces/noticia';
import { ConnectService } from '../../services/connect.service';

@Component({
  selector: 'app-noticia-favorita',
  templateUrl: './noticia-favorita.component.html',
  styleUrl: './noticia-favorita.component.css'
})
export class NoticiaFavoritaComponent {

    
    @Input() noticia: Noticia = {
        id: 0,
        title: '',
        subtitle: '',
        photo: '',
        noticetext: ''
    };

    constructor(private cs:ConnectService) {

    }

    quitarFavorito() {
        
        this.cs.eliminarNoticiaFavorito(this.noticia).subscribe((noticias: Noticia[]) => {
            window.location.reload();
        });

    }

}
