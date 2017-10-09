import { RouterModule, Routes } from '@angular/router';
import { ListagemComponente } from '../listaNotas/notas.componente';
import { PDFComponent}  from '../listaNotas/pdf/pdf.componente'

const appRoutes: Routes = [
    {path: 'notas/lista', component: ListagemComponente},
    {path: '/pdf', component: PDFComponent}, 
    {path: '**', redirectTo: 'notas/lista'}
    

];

export const routing = RouterModule.forRoot(appRoutes);

