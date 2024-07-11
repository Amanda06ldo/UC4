"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jogo = void 0;
var rl = require('readline-sync');
var Jogo = /** @class */ (function () {
    function Jogo(titulo, genero, classificacaoEtaria) {
        this.titulo = titulo;
        this.genero = genero;
        this.classificacaoEtaria = classificacaoEtaria;
    }
    Jogo.prototype.getDetalhes = function () {
        console.log("O jogo se chama ".concat(this.titulo, ", o genero do filme \u00E9 ").concat(this.genero, " e a classifica\u00E7\u00E3o etaria  do filme \u00E9 de maiories ").concat(this.classificacaoEtaria, " anos."));
    };
    Jogo.prototype.setJogo = function () {
        var newTitulo = rl.question('Digite o titulo:');
        var newGenero = rl.question('Digite o genero:');
        var newClassicacaoEtaria = rl.question('Digite a classificacao etaria:');
        this.titulo = newTitulo;
        this.genero = newGenero;
        this.classificacaoEtaria = newClassicacaoEtaria;
    };
    return Jogo;
}());
exports.Jogo = Jogo;
