import { Component} from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  nombre;
  apellido1;
  apellido2;
  alumnosRef;
  alumnosArray = [];

  constructor(
    private route: Router,
    private db: AngularFirestore) {
      // alumnosRef es para hacer una referencia de la colección
      this.alumnosRef = this.db.collection('alumnos')
      const alumnos = this.db.collection('alumnos').snapshotChanges();
      alumnos.subscribe((res:any)=>{
        console.log('LINEA 26')
        const arrayMapped = res.map((a)=>{
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return {data, id}
        })

        this.alumnosArray = arrayMapped
        console.log('ARRAY MAPPED', arrayMapped)
        });
// funcion de JS que  es Array.map que construye la array
  }

  eliminar(id){
    console.log('id', id);
    this.alumnosRef().doc(id).delete()
    }
    salir(){
      this.route.navigateByUrl('login')
      }
      //esta funcion nos hara el click en salir

  crearAlumno (nombre: string, apellido1: string, apellido2: string){
    console.log('nombre', nombre);
    console.log('apellido1', apellido1);
    console.log('apellido2', apellido2);
    this.alumnosRef.add({
      nombre,
      apellido1,
      apellido2,
    })
    }
  }
