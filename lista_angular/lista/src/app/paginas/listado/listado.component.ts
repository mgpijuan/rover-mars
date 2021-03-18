import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import * as dni from 'dni-js-validator';
import * as EmailValidator from 'email-validator';


@Component({
selector: 'app-listado',
templateUrl: './listado.component.html',
styleUrls: ['./listado.component.css']
})


export class ListadoComponent implements OnInit {
alumnosRef;
alumnosArray = [];
rol;
jornada;
nombreWrong=null;
phoneWrong;
dniWrong;
emailWrong;


constructor(
private route: Router,
private db: AngularFirestore
) {
this.alumnosRef = this.db.collection('alumnos')//.doc().collection().doc();//.doc('adfasdfasdf').set({})

}
// esta funcion no nos sirve de nada
/*
eliminar(id){
console.log('id', id);
this.alumnosRef.doc(id).delete()
} */

ngOnInit(){
  console.log('DNI', dni.isValid('12345678J'));
  console.log('NIE', dni.isValid('X1234567Y'))
  }

comprobarNombre(nombre:string){
  const length = nombre.length;
  if( length > 100 || length < 1 ){
  this.nombreWrong = 'error'
  }else{
  this.nombreWrong = 'success'
  }
}

comprobarTelefono(telefono:string){
  //primero convertir el parametro string en numero
  // const telefonoEnNumber = parseInt(telefono);
  // = es asignación, vas a ser 9  y === comprobar que el tamaño es igual a (9)
  if (telefono.length === 9){
    this.phoneWrong = 'success'
  } else{
    this.phoneWrong = 'error'
  }
}

comprobarDni (dniParam:string){
  console.log ('DNI', dniParam);
  if (dni.isValid(dniParam)){
    // dni correcto
    this.dniWrong = 'success'

  }else{
    this.dniWrong = 'error'
  }
}

comprobarEmail(email:string){
  if(EmailValidator.validate(email)){
  this.emailWrong = 'success'
  }else{
  this.emailWrong = 'error'
  }
  }

jornadasDefinidas(jornadaParameter){
console.log('JORNADA',jornadaParameter);
this.jornada = jornadaParameter
}

salir(){
this.route.navigateByUrl('login')
}

crearAlumno(nombre, telefono, dni, email){
console.log('nombre', nombre);

this.alumnosRef.doc(dni).set({
nombre,
telefono,
dni,
email,
rol: this.rol,
date: new Date(),
jornada: parseInt(this.jornada)
})
}

// esta función sirve para escuchar del hijo el rol
rolDefinido(rolParameter:string){
this.rol = rolParameter;
}

}
