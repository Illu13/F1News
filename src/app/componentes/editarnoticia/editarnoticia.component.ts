import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConnectService } from '../../services/connect.service';
import { Router } from '@angular/router';
import { noticiaInsertar } from '../../interfaces/noticiaInsertar';
import { Noticia } from '../../interfaces/noticia';

@Component({
  selector: 'app-editarnoticia',
  templateUrl: './editarnoticia.component.html',
  styleUrl: './editarnoticia.component.css'
})
export class EditarnoticiaComponent {

    isSent = false;
    form: FormGroup;
    @Input() titular: string = "";
    @Input() subtitular: string = "";
    @Input() foto: string = "";
    @Input() contenidoNoticia: string = "";
    @Input() id: number = 0;

    constructor(private snackbar: MatSnackBar, private connectService: ConnectService, private route:Router) {

        this.form = new FormGroup({
          titular: new FormControl(''),
          subtitular: new FormControl(''),
          foto: new FormControl(''),
          textoNoticia: new FormControl('')
        });
    }

    ngOnInit(){
        this.form.controls['titular'].setValue(this.titular);
        this.form.controls['subtitular'].setValue(this.subtitular);
        this.form.controls['foto'].setValue(this.foto);
        this.form.controls['textoNoticia'].setValue(this.contenidoNoticia);
    }
    editarNoticia() {
        if (this.titular == "" || this.subtitular == "" || this.foto == "" || this.contenidoNoticia == "") {
            this.snackbar.open(
                "Tienes que rellenar todos los campos",
                "Cerrar",
                {
                    duration: 3000,
                }
            );
        } else {
            var noticia:Noticia;
            noticia = {
                id: this.id,
                title: this.titular,
                subtitle: this.subtitular,
                photo: this.foto,
                noticetext: this.contenidoNoticia,

            }
            
            this.connectService.editar(noticia).subscribe((noticia: Noticia) => {
                console.log(noticia);
    
            });
            this.snackbar.open(
                "Noticia editada correctamente.",
                "Cerrar",
                {
                    duration: 3000,
                }
            );

            try {
            window.location.reload();
            } catch (error) {
                
            }
            
        }
    }

    eliminarNoticia() {
        var noticia:Noticia;
        noticia = {
            id: this.id,
            title: this.titular,
            subtitle: this.subtitular,
            photo: this.foto,
            noticetext: this.contenidoNoticia,

        }
        this.connectService.eliminarNoticia(noticia).subscribe((noticia: Noticia[]) => {
            
        });
    }

}
