import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemComponente } from './notas.componente';
import { FilterTitle } from './lista.pipe';

@NgModule({

    imports:[CommonModule],
    declarations: [ListagemComponente, FilterTitle],
    exports: [ListagemComponente, FilterTitle]
})

export class ListaModule{}