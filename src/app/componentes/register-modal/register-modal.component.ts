import { Component } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ConnectService } from "./../../services/connect.service";
import { User } from "../../interfaces/user";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { FormBuilder, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
@Component({
    selector: "app-register-modal",
    templateUrl: "./register-modal.component.html",
    styleUrl: "./register-modal.component.css",
})
export class RegisterModalComponent {
    regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; // Ejemplo de expresión regular para validar un correo electrónico
    username: string = "";
    name: string = "";
    email: string = "";
    password: string = "";
    confirmPassword: string = "";
    hide = true;
    constructor(
        private connectService: ConnectService,
        private router: Router,
        private formBuilder: FormBuilder,
        private snackBar: MatSnackBar,
        public dialog:MatDialog
    ) {}
    register() {
        if (
            this.name == "" ||
            this.email == "" ||
            this.password == "" ||
            this.confirmPassword == ""
        ) {
            this.snackBar.open("Todos los campos del formulario tienen que estar rellenos, y en un formato correcto", 'Cerrar', {
                duration: 3000,
            });
        } else {
            if (this.password != this.confirmPassword) {
                this.snackBar.open("Las contraseñas no coinciden.", 'Cerrar', {
                    duration: 3000
                });
                return;
            }else if (this.regex.test(this.email) == false){
                this.snackBar.open("El formato del correo no es correcto", 'Cerrar', {
                    duration: 3000
                });
            } else {
                var registeredUser: User;
                registeredUser = {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    username: this.username
                }
                let usuarioRegistrado = this.connectService.registrarUsuario(registeredUser)
                usuarioRegistrado.subscribe(
                    (user: User) => {
                        if (user.name == "Usuario ya existente") {
                            this.snackBar.open("Ya existe una cuenta con esas credenciales", 'Cerrar', {
                                duration: 3000
                            });
                        } else {
                            this.router.navigate(['']);
                            this.snackBar.open("Cuenta registrada, inicia sesión.", 'Cerrar', {
                                duration: 3000
                            });
                            this.dialog.closeAll();
                            
                        }
                    }
                )
                    
                
            }
        }
    }
}
