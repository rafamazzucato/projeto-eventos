import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component'
import { HomeComponent } from './components/home/home.component'
import { CadastroComponent } from './components/cadastro/cadastro.component'
import { NotFoundComponent } from './components/erro/notFound.component'

import { EventosService } from './services/eventos.service'

import { SubLista } from './filters/sublista.filter';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    CadastroComponent,
    NotFoundComponent,
    SubLista
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EventosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
