import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string | undefined;
  password: string | undefined;
  array= [];

  constructor( private route: Router) {
    console.time('log');
    console.log('LINEA 15');
    console.timeEnd('log');

    console.log('LINEA 16');
  }

login(){
  // hacemos una condicion, si hay un mail i una contraseña...
  if(this.email && this.password){
    console.log('HAY UN EMAIL Y UN PASSWORD');
    this.route.navigateByUrl('listado');
    //le vamos a llevar a la pagina de listao
  }
  else{
    console.log('FALTA EMAIL O PASSWORD');
  }
}
}

