"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
var Cozinheiro = /** @class */ (function () {
    function Cozinheiro(nome, idade, ano_xp) {
        this.nome = nome;
        this.idade = idade;
        this.ano_xp = ano_xp;
    }
    Cozinheiro.prototype.getCozinheiro = function () {
        console.log("Ol\u00E1,meu nome \u00E9 ".concat(this.nome, ",tenho ").concat(this.idade, " anos e sou chef h\u00E1 ").concat(this.ano_xp, " anos"));
    };
    Cozinheiro.prototype.setCozinheiro = function () {
        var nomeUp = leitor.question("Qual o nome do cozinheiro?");
        var idadeUp = leitor.question("Qual a idade do cozinheiro?");
        var ano_xpUp = leitor.question("Qual o tempo de xp do cozinheiro?");
        this.nome = nomeUp;
        this.idade = idadeUp;
        this.ano_xp = ano_xpUp;
    };
    return Cozinheiro;
}());
var Restaurante = /** @class */ (function () {
    function Restaurante(cz, nome, endereço, num_end) {
        this.cz = cz;
        this.nome = nome;
        this.endereço = endereço;
        this.num_end = num_end;
    }
    Restaurante.prototype.getRestaurante = function () {
        console.log("Ol\u00E1, meu restaurante \u00E9 o ".concat(this.nome, ",no endere\u00E7o ").concat(this.endereço, " no n\u00FAmero ").concat(this.num_end, " e o nome do chef \u00E9 ").concat(this.cz.nome));
    };
    Restaurante.prototype.setRestaurante = function () {
        this.cz.getCozinheiro();
        var nomeUp = leitor.question("Qual o nome do restaurante?");
        var endereçoUp = leitor.question("Qual o endereço do restaurante?");
        var num_endUp = leitor.question("Qual o número do restaurante?");
        this.nome = nomeUp;
        this.endereço = endereçoUp;
        this.num_end = num_endUp;
    };
    return Restaurante;
}());
/*
//instancia da classe cozinheiro
let chefThalles = new Cozinheiro("Thalles",35,15)
//instancia da classe restaurante agregada com o objeto da classe cozinheiro
let variatto = new Restaurante(chefThalles,"Variatto","Av. Imperatriz",500)
console.log(variatto.cz)
*/
var chefNovo = new Cozinheiro("Teste", 50, 20);
chefNovo.getCozinheiro();
chefNovo.setCozinheiro();
chefNovo.getCozinheiro();
var restauranteNovo = new Restaurante(chefNovo, "Variatto", "Av. Imperatriz", 500);
restauranteNovo.getRestaurante();
restauranteNovo.setRestaurante();
restauranteNovo.getRestaurante();
