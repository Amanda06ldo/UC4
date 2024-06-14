"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.coruja = void 0;
var coruja = /** @class */ (function () {
    function coruja(nome, peso) {
        this.nome = nome;
        this.peso = peso;
    }
    coruja.prototype.chirriar = function () {
        console.log("iUh iUh!");
    };
    coruja.prototype.comer = function (quantidade) {
        console.log("A coruja comeu ".concat(quantidade, " insetos."));
    };
    coruja.prototype.voar = function (tempo) {
        console.log("A coruja voou por ".concat(tempo, " segundos"));
    };
    return coruja;
}());
exports.coruja = coruja;
