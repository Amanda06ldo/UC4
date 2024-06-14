var reader = require('readline-sync')
class Carro {
    rodas: number
    motor: number
    cor: string
    modelo: string
    marca: string

    constructor(rodas:number, motor:number, cor:string, modelo:string, marca:string){
        this.rodas = rodas
        this.motor = motor
        this.cor = cor
        this.modelo = modelo
        this.marca = marca
    }
    acelerar(){
        console.log("vrummmmmmm");
    }
    desacelerar(){
        console.log("desacelerando");
    }
    trocarMarcha(){
        console.log("tufsss tufsss")
    }
}
const meuCarro = new Carro(15, 2.0, 'Azul', 'Lancer', 'Mitsubishi')
console.log(meuCarro.modelo);
meuCarro.acelerar()
meuCarro.trocarMarcha()
meuCarro.desacelerar()
//new rodasCarro = reader.question('readline-sync')
//npm i --save-dev @types/node
//npm i readline-sync
//npx tsc index.ts(nome no arquivo)

class pessoa {
    nome: string
    sobrenome: string
    etnia: string
    peso:  number
    idade: number
    centimetro: number

    constructor(nome: string, sobrenome: string, corPele: string, peso:  number, idade: number, centimetro: number){
        this.nome = nome
        this.sobrenome = sobrenome
        this.etnia = etnia
        this.peso = peso
        this.idade = idade
        this.centimetro = centimetro
    }


}
var nomePessoa = reader.question('Qual o nome da pessoa?')
var sobrenomePessoa = reader.question('Qual o sobrenome da pessoa?')
var etnia = reader.question('Qual a etnia da pessoa?')
var peso = reader.question('Qual o peso da pessoa?')
var idade = reader.question('Qual a idade da pessoa?')
var centimetro = reader.question('Qual o centimetro da pessoa?')

let pessoa1 = new pessoa(nomePessoa, sobrenomePessoa, etnia, peso, idade, centimetro)

