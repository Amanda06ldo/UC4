var leitor = require("readline-sync")
var n = true
while(n){
    let opt = leitor.question('')
    switch(opt){
        case '1':
            !n
            break 
    }
}
class Professor {
    nome:string
    idade:number
    ano_xp:number
    constructor(nome:string,idade:number,ano_xp:number){
        this.nome = nome
        this.idade = idade
        this.ano_xp = ano_xp

    }
    getProfessor():void{
        console.log(`Olá,meu nome é ${this.nome},tenho ${this.idade} anos e sou professor há ${this.ano_xp} anos`)
    }
    setProfessor():void{
        let nomeUp = leitor.question("Qual o nome do professor?")
        let idadeUp = leitor.question("Qual a idade do professor?")
        let ano_xpUp = leitor.question("Qual o tempo de xp do professor?")
        this.nome = nomeUp
        this.idade = idadeUp
        this.ano_xp = ano_xpUp


    }

}
class Escola{
    trabalhador: Professor
    nome : string
    endereço : string
    num_end: number
    constructor(trabalhador: Professor, nome:string,endereço:string,num_end:number){
        this.trabalhador = trabalhador
        this.nome = nome
        this.endereço = endereço
        this.num_end = num_end

    }
    getEscola():void{
        console.log(`Olá, minha escola é o ${this.nome},no endereço ${this.endereço} no número ${this.num_end} e o nome do professor é ${this.trabalhador.nome}`)
    }
    setEscola():void{
        this.trabalhador.getProfessor()
        let nomeUp = leitor.question("Qual o nome da escola?")
        let endereçoUp = leitor.question("Qual o endereço do escola?")
        let num_endUp = leitor.question("Qual o número do escola?")
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
let professorNovo = new Professor("Teste", 50, 20)
professorNovo.getProfessor()

professorNovo.setProfessor()

professorNovo.getProfessor()

let escolaNovo = new Escola(professorNovo,"Variatto","Av. Imperatriz",500)
escolaNovo.getEscola()
escolaNovo.setEscola()
escolaNovo.getEscola()

   