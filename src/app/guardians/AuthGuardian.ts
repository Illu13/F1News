import { inject } from "@angular/core"
import { CookieService } from "ngx-cookie-service"
import { CookieServiceService } from "../services/cookie-service.service";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatDialog } from '@angular/material/dialog';
import { RegisterModalComponent } from "../componentes/register-modal/register-modal.component";


export const loginGuard = () => {

    const cs = inject(CookieServiceService);
    const router = inject(Router);
    const aviso = inject(MatSnackBar);
    const dialog = inject(MatDialog);

    var token = cs.getCookie('token');

    console.log(token);
    if (token == "") {
        router.navigate([""]);
        aviso.open("Debes iniciar sesión para poder acceder a esta página", "Cerrar", {
            duration: 3000,
        });
        const dialogRef = dialog.open(RegisterModalComponent, {
            width: '400px', // Ajusta el ancho según tus necesidades
          });
        return false;
    } else {
        return true;
    }
    
}