import { MatDialog } from '@angular/material/dialog';
import { Component } from '@angular/core';
import { RegisterModalComponent } from '../register-modal/register-modal.component';
import { LoginModalComponent } from '../login-modal/login-modal.component';
import { CookieServiceService } from '../../services/cookie-service.service';
import { CerrarSesionModalComponent } from '../cerrar-sesion-modal/cerrar-sesion-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

    token: string = this.cookies.getCookie('token');
    

    constructor(public dialog:MatDialog, private cookies:CookieServiceService){}
    abrirModalRegister(): void {
        const dialogRef = this.dialog.open(RegisterModalComponent, {
          width: '400px', // Ajusta el ancho según tus necesidades
        });
    }
    abrirModalLogin(): void {
        const dialogRef = this.dialog.open(LoginModalComponent, {
          width: '400px', // Ajusta el ancho según tus necesidades
        });
    }

    abrirModalCerrarSesion(enterAnimationDuration:any, exitAnimationDuration:any): void {
        const dialogRef = this.dialog.open(CerrarSesionModalComponent, {
            width: '250px',
            enterAnimationDuration,
            exitAnimationDuration,
        });
    }
}
