let rl = require("readline-sync")

class pessoa {
    nome:string
    sobrenome:string
    nomeDoPai:string
    nomeDaMae:string
    rg:number
    cpf:number
    dataDeNascimento:number

    constructor(nome:string,sobrenome:string,nomeDoPai:string,nomeDaMae:string,rg:number,cpf:number,dataDeNascimento:number){
        this.nome = nome
        this.sobrenome = sobrenome
        this.nomeDoPai = nomeDoPai
        this.nomeDaMae = nomeDaMae
        this.rg = rg
        this.cpf = cpf
        this.dataDeNascimento = dataDeNascimento
    }
    getPessoa(): void{
        console.log(`Nome: ${this.nome}\n Sobrenome: ${this.sobrenome}\n nome do pai: ${this.nomeDoPai}\n nome da mae: ${this.nomeDaMae}\n rg: ${this.rg}\n cpf: ${this.cpf}\n data de nascimento: ${this.dataDeNascimento}`);
        
    }
     setPessoa(): void{
        let newNome = rl.question(`Qual é o nome da pessoa: `)
        let newSobrenome = rl.questionInt(`Qual é o sobrenome da pessoa: `)
        let newNomePai = rl.questionInt(`Qual é o nome do pai da pessoa: `)
        let newNomeMae = rl.questionInt(`Qual é o nome da mae da pessoa: `)
        let newRg = rl.questionInt(`Qual o rg da pessoa: `)
        let newCpf = rl.questionInt(`Qual o Cpf da pessoa: `)
        let newDataNascimento = rl.questionInt(`Qual a data do nascimento da pessoa: `)
    }

}