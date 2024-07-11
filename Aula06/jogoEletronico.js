"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.jogoEletronico = void 0;
var jogo_1 = require("./jogo");
var rl = require('readline-sync');
var jogoEletronico = /** @class */ (function (_super) {
    __extends(jogoEletronico, _super);
    function jogoEletronico() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    jogoEletronico.prototype.super = function (titulo, genero, classificacaoEtaria, plataforma) {
        this.titulo = titulo;
        this.genero = genero;
        this.classificacaoEtaria = classificacaoEtaria;
        this.plataforma = plataforma;
    };
    jogoEletronico.prototype.getDetalhes = function () {
        console.log(" O jogo se chama ".concat(this.titulo, ", o genero do filme \u00E9 ").concat(this.genero, " e a classifica\u00E7\u00E3o etaria  do filme \u00E9 de maiories ").concat(this.classificacaoEtaria, " anos, roda na plataforma ").concat(this.plataforma, "."));
    };
    jogoEletronico.prototype.setJogo = function () {
        var newTitulo = rl.question('Digite o titulo:');
        var newGenero = rl.question('Digite o genero:');
        var newClassicacaoEtaria = rl.question('Digite a classificacao etaria:');
        var newPlataforma = rl.question('Qual a plataforma do jogo:');
        this.titulo = newTitulo;
        this.genero = newGenero;
        this.classificacaoEtaria = newClassicacaoEtaria;
        this.plataforma = newPlataforma;
    };
    return jogoEletronico;
}(jogo_1.Jogo));
exports.jogoEletronico = jogoEletronico;
