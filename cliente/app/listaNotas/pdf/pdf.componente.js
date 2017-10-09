"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PDFComponent = /** @class */ (function () {
    function PDFComponent() {
        this.pdfSrc = '/35090408196295000125550010000000390791067451_NFe_Env.pdf';
    }
    PDFComponent = __decorate([
        core_1.Component({
            selector: 'example-app',
            template: "\n    <div>\n        <label>PDF src</label>\n        <input type=\"text\" placeholder=\"PDF src\" [(ngModel)]=\"pdfSrc\">\n    </div>\n    <pdf-viewer [src]=\"pdfSrc\" \n                [render-text]=\"true\"\n                style=\"display: block;\"\n    ></pdf-viewer>\n    "
        })
    ], PDFComponent);
    return PDFComponent;
}());
exports.PDFComponent = PDFComponent;
//# sourceMappingURL=pdf.componente.js.map