import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { IsLogueadoGuard } from './guard/isLogueado/is-logueado.guard';
import { AdminComponent } from './paginas/admin/admin.component';
import { ListadoComponent } from './paginas/listado/listado.component';
import { LoginComponent } from './paginas/login/login.component';

const routes: Routes = [
  // si alguien entra a la ruta por defecto, quiero que vaya al listado
  {
    path: '',
    redirectTo: 'listado',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'listado',
    component: ListadoComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate:[IsLogueadoGuard]
  },
    {
    path: 'bienvenida',
    component: BienvenidaComponent
    },
// si alguien pone unas rutas que no estan aquí que le lleve a listado
  {
    path:'**',
    redirectTo:'listado',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
