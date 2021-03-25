import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { AdminComponent } from './paginas/admin/admin.component';
import { ListadoComponent } from './paginas/listado/listado.component';
import { LoginComponent } from './paginas/login/login.component';

const routes: Routes = [
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
    component: AdminComponent
    },
    {
    path: 'bienvenida',
    component: BienvenidaComponent
    }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
