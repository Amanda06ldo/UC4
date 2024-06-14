var reader = require('readline-sync');
var Carro = /** @class */ (function () {
    function Carro(rodas, motor, cor, modelo, marca) {
        this.rodas = rodas;
        this.motor = motor;
        this.cor = cor;
        this.modelo = modelo;
        this.marca = marca;
    }
    Carro.prototype.acelerar = function () {
        console.log("vrummmmmmm");
    };
    Carro.prototype.desacelerar = function () {
        console.log("desacelerando");
    };
    Carro.prototype.trocarMarcha = function () {
        console.log("tufsss tufsss");
    };
    return Carro;
}());
var meuCarro = new Carro(15, 2.0, 'Azul', 'Lancer', 'Mitsubishi');
console.log(meuCarro.modelo);
meuCarro.acelerar();
meuCarro.trocarMarcha();
meuCarro.desacelerar();
//new rodasCarro = reader.question('readline-sync')
//npx tsc index.ts(nome no arquivo)
var pessoa = /** @class */ (function () {
    function pessoa(nome, sobrenome, corPele, peso, idade, centimetro) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.etnia = etnia;
        this.peso = peso;
        this.idade = idade;
        this.centimetro = centimetro;
    }
    return pessoa;
}());
var nomePessoa = reader.question('Qual o nome da pessoa?');
var sobrenomePessoa = reader.question('Qual o sobrenome da pessoa?');
var etnia = reader.question('Qual a etnia da pessoa?');
var peso = reader.question('Qual o peso da pessoa?');
var idade = reader.question('Qual a idade da pessoa?');
var centimetro = reader.question('Qual o centimetro da pessoa?');
var pessoa1 = new pessoa(nomePessoa, sobrenomePessoa, etnia, peso, idade, centimetro);


