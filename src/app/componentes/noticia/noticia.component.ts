import { Component, Input } from '@angular/core';
import { Noticia } from '../../interfaces/noticia';
import { ConnectService } from '../../services/connect.service';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrl: './noticia.component.css'
})
export class NoticiaComponent {

    @Input() noticia: Noticia = {
        id: 0,
        title: '',
        subtitle: '',
        photo: '',
        noticetext: ''
    };

    constructor(private cs:ConnectService) {}

    favorita() {
        this.cs.marcarNoticiaFav(this.noticia).subscribe((noticias: Noticia[]) => {
            console.log(noticias);
        });
    }
}
