import { CookieService } from 'ngx-cookie-service';
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private CookieService: CookieService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Get the auth token from the service.
    const authToken = this.CookieService.get('token');

    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    const authReq = req.clone({
      setHeaders: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`  // Use the 'Authorization' header with 'Bearer' scheme
      }
    });
    console.log(authReq.headers);

    // send cloned request with header to the next handler.
    return next.handle(authReq);
  }
}