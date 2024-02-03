import { inject } from "@angular/core"
import { CookieService } from "ngx-cookie-service"
import { CookieServiceService } from "../services/cookie-service.service";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";

export const loginGuard = () => {

    const cs = inject(CookieServiceService);
    const router = inject(Router);
    const aviso = inject(MatSnackBar);

    
    if (cs.getCookie("token") == "") {
        router.navigate([""]);
        aviso.open("Debes iniciar sesión para poder acceder a esta página", "Cerrar", {
            duration: 3000,
        });
        return false;
    } else {
        return true;
    }
    
}