import { loggedUser } from "./../../interfaces/loggedUser";
import { Component } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ConnectService } from "./../../services/connect.service";
import { User } from "../../interfaces/user";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { FormBuilder, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { loggin } from "../../interfaces/loggin";

@Component({
    selector: "app-login-modal",
    templateUrl: "./login-modal.component.html",
    styleUrl: "./login-modal.component.css",
})
export class LoginModalComponent {
    username: string = "";
    password: string = "";
    hide = true;

    constructor(
        private connectService: ConnectService,
        private router: Router,
        private snackBar: MatSnackBar,
        public dialog: MatDialog
    ) {}

    login() {
        if (this.username == "" || this.password == "") {
            this.snackBar.open(
                "No has introducido la contraseña o el correo electrónico.",
                "Cerrar",
                {
                    duration: 3000,
                }
            );
        } else {
            var loggedUser: loggin;
            loggedUser = {
                username: this.username,
                password: this.password,
            };
            let usuarioLogueado = this.connectService.loginUsuario(loggedUser);
            usuarioLogueado.subscribe((user: loggedUser | null) => {
                console.log(user);
                if (user) {
                    if (user.username == "Usuario incorrecto") {
                        this.snackBar.open(
                            "Usuario o contraseña incorrectos",
                            "Cerrar",
                            {
                                duration: 3000,
                            }
                        );
                    } else {
                        document.cookie = "token=" + user.token;
                        this.dialog.closeAll();
                        window.location.reload();
                    }
                }
            });
        }
    }
}
