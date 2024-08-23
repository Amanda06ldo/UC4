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
var reader = require('readline-sync');
var ponto2d = /** @class */ (function () {
    function ponto2d() {
        this.X = 0;
        this.Y = 0;
    }
    ponto2d.prototype.get = function () {
        console.log("Os pontos dois dois sao: x = ".concat(this.X, " e y = ").concat(this.Y));
    };
    ponto2d.prototype.setX = function () {
        var escolhaX = reader.question('Digite o valor do x:');
        this.X = escolhaX;
    };
    ponto2d.prototype.setY = function () {
        var escolhaY = reader.question('Digite o valor do y:');
        this.Y = escolhaY;
    };
    ponto2d.prototype.movimentacao = function () {
        var X = reader.question('Digite o valor do x:');
        var Y = reader.question('Digite o valor do y:');
        this.X = X;
        this.Y = Y;
    };
    ponto2d.prototype.equals = function (outroPonto) {
        if (this.X == outroPonto.X && this.Y == outroPonto.Y) {
            console.log("os pontos s\u00E3o iguais");
            return true;
        }
        else {
            console.log("os pontos s\u00E3o diferentes");
            return false;
        }
    };
    ponto2d.prototype.toString = function () {
        return "X = ".concat(this.X, " e Y = ").concat(this.Y);
    };
    ponto2d.prototype.distancia = function (outroPonto) {
        return Math.sqrt(Math.pow((outroPonto.X - this.X), 2) + Math.pow((outroPonto.Y - this.Y), 2));
    };
    ponto2d.prototype.clone = function () {
        var newPonto = new ponto2d;
        newPonto.X = this.X;
        newPonto.Y = this.Y;
        return newPonto;
    };
    return ponto2d;
}());
var doisParametros = /** @class */ (function (_super) {
    __extends(doisParametros, _super);
    function doisParametros(X, Y) {
        var _this = _super.call(this) || this;
        _this.X;
        _this.Y;
        return _this;
    }
    return doisParametros;
}(ponto2d));
var outroObjeto = /** @class */ (function (_super) {
    __extends(outroObjeto, _super);
    function outroObjeto(outroPonto) {
        var _this = _super.call(this) || this;
        _this.X = outroPonto.X;
        _this.Y = outroPonto.Y;
        return _this;
    }
    return outroObjeto;
}(ponto2d));
