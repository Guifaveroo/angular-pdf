"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var ListagemComponente = /** @class */ (function () {
    function ListagemComponente(http) {
        var _this = this;
        this.notas = [];
        this.notaSelecionada = [];
        http.get('esteeumtestedeurl/lista')
            .map(function (res) { return res.json(); })
            .subscribe(function (notas) {
            _this.notas = notas;
            _this.DEST_NOME = notas.DEST_NOME;
        }, function (erro) { return console.log("Algo deu errado: " + erro); });
    }
    ListagemComponente.prototype.selecionado = function (nota) {
        this.notaSelecionada = nota;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ListagemComponente.prototype, "DEST_NOME", void 0);
    ListagemComponente = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'lista',
            templateUrl: './listagem.notas.html'
        }),
        __metadata("design:paramtypes", [http_1.Http])
    ], ListagemComponente);
    return ListagemComponente;
}());
exports.ListagemComponente = ListagemComponente;
//# sourceMappingURL=notas.componente.js.map