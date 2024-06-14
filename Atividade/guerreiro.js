"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guerreiro = void 0;
var reader = require('readline-sync');
var guerreiro = /** @class */ (function () {
    function guerreiro(nome, tipo, forca, saude) {
        this.nome = nome;
        this.tipo = tipo;
        this.forca = forca;
        this.saude = saude;
    }
    return guerreiro;
}());
exports.guerreiro = guerreiro;
var nomeGuerreiro = reader.question('Qual o nome do seu guerreiro?');
var tipoGuerreiro = reader.question('Qual será o seu tipo de guerreiro?');
var forcaGuerreiro = reader.question('Quanta força tem seu guerreiro?');
