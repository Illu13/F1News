import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, catchError } from "rxjs";
import { Noticia } from "../interfaces/noticia";
import { User } from "../interfaces/user";
import { loggedUser } from "../interfaces/loggedUser";
import { of } from 'rxjs';
import { loggin } from "../interfaces/loggin";
import { noticiaInsertar } from "../interfaces/noticiaInsertar";
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
        return this.http.post<User>(url, user);
    }

    public loginUsuario(loggin: loggin): Observable<loggedUser | null> {
        let user = {       
            username: loggin.username,
            password: loggin.password
        };
        const url = "http://localhost:8080/user/login";

        return this.http
            .post<loggedUser>(url, user)
            .pipe(
                catchError((error) => {
    
                    // Retorna null en lugar de lanzar el error
                    return of(null);
                })
            );
    }

    public insertarNoticia(noticia: noticiaInsertar): Observable<Noticia> {

        let noticiaJson =  {
            title: noticia.title,
            subtitle: noticia.subtitles,
            photo: noticia.photo,
            noticetext: noticia.noticetext,

        }

        const url = "http://localhost:8080/noticias/insertar";
        console.log("hola");
        return this.http.post<Noticia>(url, noticiaJson);
    }

    public getMisNoticias(): Observable<Noticia[]> {
        const url = "http://localhost:8080/noticias/misnoticias";
        return this.http.post<Noticia[]>(url, null);
    }

}
