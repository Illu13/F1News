import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoticiasComponent } from './componentes/noticias/noticias.component';
import { InsertarNoticiasComponent } from './componentes/insertar-noticias/insertar-noticias.component';
import { loginGuard } from './guardians/AuthGuardian';

const routes: Routes = [ 

    { path: '', component: NoticiasComponent },
    {path: 'insertNewNoticia', component: InsertarNoticiasComponent, canActivate: [loginGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
