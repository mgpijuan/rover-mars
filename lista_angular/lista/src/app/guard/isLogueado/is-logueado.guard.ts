import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LogueadoService } from '../../servicios/logueado/logueado.service';

@Injectable({
  providedIn: 'root'
})
export class IsLogueadoGuard implements CanActivate {

  constructor(private logueado: LogueadoService){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

/* esto va hacer que para ir a admin pida siempre la contraseña */
     return this.logueado.getEstado()

     /* para hacer pruebas y que no nos pida la contraseña cada vez, eliminar la superior y dejar solo este */ // return true
      }

}
