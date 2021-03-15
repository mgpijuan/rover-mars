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
import { FormsModule } from '@angular/forms';


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
    ListadoComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    // 3. Initialize
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ],
  providers: [  ],
  bootstrap: [ AppComponent ],


})

export class AppModule { }
