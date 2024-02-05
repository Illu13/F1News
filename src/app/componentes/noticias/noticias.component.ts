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

       
}
