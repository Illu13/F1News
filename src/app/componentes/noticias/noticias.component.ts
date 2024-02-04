import { ConnectService } from './../../services/connect.service';
import { Component } from '@angular/core';
import { Noticia } from '../../interfaces/noticia';
import {ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.css'
})
export class NoticiasComponent {
    
    titulo: string;
    noticias: Noticia[];
    constructor(private connectService: ConnectService) {
        this.titulo = "";
        this.noticias = [];
    }
    ngOnInit() {
        this.connectService.getNoticias().subscribe((noticias: Noticia[]) => {
            this.noticias = noticias;
        });
    }

    favorita() {
        var noticia:Noticia;
        noticia = {
            id: this.noticias[0].id,
            title: this.noticias[0].title,
            subtitle: this.noticias[0].subtitle,
            photo: this.noticias[0].photo,
            noticetext: this.noticias[0].noticetext,
        }
        
        this.connectService.marcarNoticiaFav(noticia).subscribe((noticia: Noticia[]) => {
            console.log(noticia);
        });
    }
       
}
