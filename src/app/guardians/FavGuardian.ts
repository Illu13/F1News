import { ConnectService } from "../services/connect.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { inject } from "@angular/core"
import { Router } from "@angular/router";

export const favGuardian = () =>{

    const cs = inject(ConnectService);
    const router = inject(Router);
    const aviso = inject(MatSnackBar);

    cs.misNoticiasFavoritas().subscribe((noticias) => {
        if (noticias.length == 0) {
            router.navigate([""]);
            aviso.open("No tienes ninguna noticia en favorito", "Cerrar", {
                duration: 3000,
            });
            return false;
        } else {
            return true;
        }
    })

}

