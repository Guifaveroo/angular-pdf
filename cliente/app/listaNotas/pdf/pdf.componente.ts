import {Component} from '@angular/core';

@Component({
    selector: 'example-app',
    template: `
    <div>
        <label>PDF src</label>
        <input type="text" placeholder="PDF src" [(ngModel)]="pdfSrc">
    </div>
    <pdf-viewer [src]="pdfSrc" 
                [render-text]="true"
                style="display: block;"
    ></pdf-viewer>
    `
  })

export class PDFComponent{
    pdfSrc: string = 'nomedoPDF';
}