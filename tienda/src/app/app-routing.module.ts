import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TiendaComponent } from './paginas/tienda/tienda.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'tienda',
    pathMatch:'full'
  },
  {
    path:'tienda',
    component: TiendaComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
