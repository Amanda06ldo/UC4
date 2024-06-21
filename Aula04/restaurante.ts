import { CONNREFUSED } from "dns"

 var leitor = require("readline-sync")
class Cozinheiro {
    nome:string
    idade:number
    ano_xp:number
    constructor(nome:string,idade:number,ano_xp:number){
        this.nome = nome
        this.idade = idade
        this.ano_xp = ano_xp

    }
    getCozinheiro():void{
        console.log(`Olá,meu nome é ${this.nome},tenho ${this.idade} anos e sou chef há ${this.ano_xp} anos`)
    }
    setCozinheiro():void{
        let nomeUp = leitor.question("Qual o nome do cozinheiro?")
        let idadeUp = leitor.question("Qual a idade do cozinheiro?")
        let ano_xpUp = leitor.question("Qual o tempo de xp do cozinheiro?")
        this.nome = nomeUp
        this.idade = idadeUp
        this.ano_xp = ano_xpUp


    }

}
class Restaurante{
    cz : Cozinheiro
    nome : string
    endereço : string
    num_end: number
    constructor(cz:Cozinheiro, nome:string,endereço:string,num_end:number){
        this.cz = cz
        this.nome = nome
        this.endereço = endereço
        this.num_end = num_end

    }
    getRestaurante():void{
        console.log(`Olá, meu restaurante é o ${this.nome},no endereço ${this.endereço} no número ${this.num_end} e o nome do chef é ${this.cz.nome}`)
    }
    setRestaurante():void{
        this.cz.getCozinheiro()
        let nomeUp = leitor.question("Qual o nome do restaurante?")
        let endereçoUp = leitor.question("Qual o endereço do restaurante?")
        let num_endUp = leitor.question("Qual o número do restaurante?")
        this.nome = nomeUp
        this.endereço = endereçoUp
        this.num_end = num_endUp


    }

}
/*
//instancia da classe cozinheiro
let chefThalles = new Cozinheiro("Thalles",35,15)
//instancia da classe restaurante agregada com o objeto da classe cozinheiro
let variatto = new Restaurante(chefThalles,"Variatto","Av. Imperatriz",500)
console.log(variatto.cz)
*/
let chefNovo = new Cozinheiro("Teste", 50, 20)
chefNovo.getCozinheiro()

chefNovo.setCozinheiro()

chefNovo.getCozinheiro()

let restauranteNovo = new Restaurante(chefNovo,"Variatto","Av. Imperatriz",500)
restauranteNovo.getRestaurante()
restauranteNovo.setRestaurante()
restauranteNovo.getRestaurante()