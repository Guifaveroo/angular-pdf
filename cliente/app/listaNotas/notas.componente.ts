import { Component, Input } from '@angular/core';
import { Http } from '@angular/http';


@Component({
    moduleId: module.id,
    selector: 'lista',
    templateUrl: './listagem.notas.html'
})

export class ListagemComponente { 
    notas: Object[] = [];
    notaSelecionada: Object[] = [];
    @Input() DEST_NOME : string;
    
   
    
    constructor(http: Http){
        http.get('esteeumtestedeurl/lista')
        .map(res => res.json())
        .subscribe(
            notas => {
                this.notas = notas;
                this.DEST_NOME = notas.DEST_NOME;
            } ,
            erro => console.log("Algo deu errado: " + erro)
        );
    }

    selecionado(nota){
        this.notaSelecionada = nota
    }    

}
