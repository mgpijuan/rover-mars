import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TiendaComponent } from './paginas/tienda/tienda.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button'
import {MatDialogModule} from '@angular/material/dialog';
import {MatGridListModule} from '@angular/material/grid-list'
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    TiendaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatGridListModule,
    MatIconModule,
    MatMenuModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
