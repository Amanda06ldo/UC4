"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cachorro = void 0;
var cachorro = /** @class */ (function () {
    function cachorro(nome, peso, raca) {
        this.nome = nome;
        this.peso = peso;
        this.raca = raca;
    }
    cachorro.prototype.latir = function () {
        console.log("Au au!");
    };
    cachorro.prototype.comer = function (quantidade) {
        console.log("O cachorro comeu ".concat(quantidade, " coxinha."));
    };
    return cachorro;
}());
exports.cachorro = cachorro;
// let carro2:string = "Monza"
