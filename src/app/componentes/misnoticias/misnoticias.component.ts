import { ConnectService } from './../../services/connect.service';
import { Component } from '@angular/core';
import { Noticia } from '../../interfaces/noticia';

@Component({
  selector: 'app-misnoticias',
  templateUrl: './misnoticias.component.html',
  styleUrl: './misnoticias.component.css'
})
export class MisnoticiasComponent {
    titulo: string;
    noticias: Noticia[];
    constructor(private connectService: ConnectService) {
        this.titulo = "";
        this.noticias = [];
    }
    ngOnInit() {
        this.connectService.getMisNoticias().subscribe((noticias: Noticia[]) => {
            console.log(noticias);
            this.noticias = noticias;
        });
    }
       
}
