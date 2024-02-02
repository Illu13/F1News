import { CookieService } from 'ngx-cookie-service';
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { AngularModulesModule } from './angular-modules/angular-modules.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoticiasComponent } from './componentes/noticias/noticias.component';
import { HttpClientModule } from "@angular/common/http";
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { RegisterModalComponent } from './componentes/register-modal/register-modal.component';
import { LoginModalComponent } from './componentes/login-modal/login-modal.component';
import { CookieServiceService } from './services/cookie-service.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NoticiasComponent,
    RegisterModalComponent,
    LoginModalComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularModulesModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
     ReactiveFormsModule,
     FormsModule,
  ],
  providers: [
    provideClientHydration(),
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
    
 }
