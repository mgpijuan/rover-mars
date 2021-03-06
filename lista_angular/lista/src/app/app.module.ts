import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { LoginComponent } from './paginas/login/login.component';
import { ListadoComponent } from './paginas/listado/listado.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListadoRolComponent } from './components/listado-rol/listado-rol.component';
import { AdminComponent } from './paginas/admin/admin.component';
import { JornadasComponent } from './components/jornadas/jornadas.component';
import { ListadoAlumnosComponent } from './components/listado-alumnos/listado-alumnos.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatCardModule} from '@angular/material/card';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { PipeMinusculasPipe } from './pipes/pipeMinusculas/pipe-minusculas.pipe';
import { AumentarDirective } from './directive/aumentar/aumentar.directive';

import {MatTableModule} from '@angular/material/table';
import { IconoRolPipe } from './pipes/iconoRol/icono-rol.pipe';
import {MatSortModule} from '@angular/material/sort';



var config = {
  apiKey: "AIzaSyDoJ26H4xWp3Y5F7jSBtTz8_-D_alN6bI0",
  authDomain: "lista-angular-ae3ce.firebaseapp.com",
  projectId: "lista-angular-ae3ce",
  storageBucket: "lista-angular-ae3ce.appspot.com",
  messagingSenderId: "2055302346",
  appId: "1:2055302346:web:0ee24d032d3e5cf4599833",
  measurementId: "G-DNCPL0VL43"
};


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListadoComponent,
    ListadoRolComponent,
    AdminComponent,
    JornadasComponent,
    ListadoAlumnosComponent,
    BienvenidaComponent,
    PipeMinusculasPipe,
    AumentarDirective,
    IconoRolPipe
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    // 3. Initialize
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, BrowserAnimationsModule, // storage
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatTableModule,
    MatSortModule,
  ],
  providers: [  ],
  bootstrap: [ AppComponent ],


})

export class AppModule { }
