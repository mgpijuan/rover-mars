import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogueadoService {

  estoyLogeado = false;

  constructor() { }
  //getter
  getEstado(){
    // devolver el dato que estoy logueado
    return this.estoyLogeado
  }

  // setter
  setEstado (estado:boolean){
     this.estoyLogeado = estado
  }
}
