import { CookieServiceService } from './../../services/cookie-service.service';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import {MatDialogActions} from '@angular/material/dialog';

@Component({
  selector: 'app-cerrar-sesion-modal',
  templateUrl: './cerrar-sesion-modal.component.html',
  styleUrl: './cerrar-sesion-modal.component.css'
})
export class CerrarSesionModalComponent {

    constructor(
        public dialog: MatDialog,
        private snackBar: MatSnackBar,
        private router: Router,
        private cs:CookieServiceService

    ){}

    cerrarSesion() {
        this.cs.deleteCookie('token');
        this.dialog.closeAll();
        window.location.reload();
    }

    noCerrarSesion() {
        this.dialog.closeAll();
    }

}
