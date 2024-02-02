import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, catchError } from "rxjs";
import { Noticia } from "../interfaces/noticia";
import { User } from "../interfaces/user";
import { loggedUser } from "../interfaces/loggedUser";
import { of } from 'rxjs';
import { loggin } from "../interfaces/loggin";
@Injectable({
    providedIn: "root",
})
export class ConnectService {
    constructor(private http: HttpClient) {}
    public getNoticias(): Observable<Noticia[]> {
        const url = "http://localhost:8080/noticias/todas";
        return this.http.get<Noticia[]>(url);
    }

    public registrarUsuario(usuario: User): Observable<User> {
        let user = {
            name: usuario.name,
            email: usuario.email,
            password: usuario.password,
            username: usuario.username,
        };
        const url = "http://localhost:8080/user/insertar";
        return this.http.post<User>(url, user, {
            headers: { "Content-Type": "application/json" },
        });
    }

    public loginUsuario(loggin: loggin): Observable<loggedUser | null> {
        let user = {       
            username: loggin.username,
            password: loggin.password
        };
        const url = "http://localhost:8080/user/login";

        return this.http
            .post<loggedUser>(url, user, {
                headers: { "Content-Type": "application/json" },
            })
            .pipe(
                catchError((error) => {
    
                    // Retorna null en lugar de lanzar el error
                    return of(null);
                })
            );
    }

}
