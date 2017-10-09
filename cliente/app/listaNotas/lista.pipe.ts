import{ Pipe, PipeTransform } from '@angular/core';
import{ ListagemComponente } from './notas.componente';

@Pipe({
    name:'filterTitle'
})

export class FilterTitle implements PipeTransform{
    transform(notas: ListagemComponente[], digitado: string){
        digitado = digitado.toLowerCase();
        return notas.filter(notas => notas.DEST_NOME.toLowerCase().includes(digitado))
    }
}