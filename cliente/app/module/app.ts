import 'rxjs/add/operator/map';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import {routing } from '../rotas/rotas';
import { AppComponent} from '../componente/componente';
//import { ListagemComponente } from '../listaNotas/notas.componente';

import{ ListaModule } from '../listaNotas/lista.module';

import { PdfViewerComponent } from 'ng2-pdf-viewer';
import { platformBrowserDynamic} from '@angular/platform-browser-dynamic';


@NgModule({
  imports:[ 
    BrowserModule, 
    HttpModule, 
    routing,
    ListaModule
      ],
  declarations: [ AppComponent, PdfViewerComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule)
