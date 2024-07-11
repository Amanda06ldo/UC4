"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BibliotecaDeJogos = void 0;
var rl = require('readline-sync');
var BibliotecaDeJogos = /** @class */ (function () {
    function BibliotecaDeJogos() {
        this.jogos = [];
    }
    BibliotecaDeJogos.prototype.adicionaJogo = function (jogo) {
        this.jogos.push(jogo);
    };
    BibliotecaDeJogos.prototype.removerJogo = function () {
        console.log(this.jogos);
        var titulo = rl.question('Insira o titulo para excluir:');
        this.jogos = this.jogos.filter(function (jogo) { return jogo.titulo !== titulo; });
    };
    BibliotecaDeJogos.prototype.listaJogos = function () {
        var i;
        for (i = 0; i < this.jogos.length; i++) {
            this.jogos[i].getDetalhes();
        }
    };
    return BibliotecaDeJogos;
}());
exports.BibliotecaDeJogos = BibliotecaDeJogos;
