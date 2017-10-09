"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var notas_componente_1 = require("../listaNotas/notas.componente");
var pdf_componente_1 = require("../listaNotas/pdf/pdf.componente");
var appRoutes = [
    { path: 'notas/lista', component: notas_componente_1.ListagemComponente },
    { path: '/pdf', component: pdf_componente_1.PDFComponent },
    { path: '**', redirectTo: 'notas/lista' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=rotas.js.map