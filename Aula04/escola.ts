var leitor = require("readline-sync")


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
    nomeEscola : string
    endereço : string
    num_end: number
    constructor(trabalhador: Professor, nomeEscola:string,endereço:string,num_end:number){
        this.trabalhador = trabalhador
        this.nomeEscola = nomeEscola
        this.endereço = endereço
        this.num_end = num_end

    }
    getEscola():void{
        console.log(`Olá, minha escola é o ${this.nomeEscola},no endereço ${this.endereço} no número ${this.num_end} e o nome do professor é ${this.trabalhador.nome}`)
    }
    setEscola():void{
        this.trabalhador.getProfessor()
        let nomeEscolaUp = leitor.question("Qual o nome da escola?")
        let endereçoUp = leitor.question("Qual o endereço do escola?")
        let num_endUp = leitor.question("Qual o número do escola?")
        this.nomeEscola = nomeEscolaUp
        this.endereço = endereçoUp
        this.num_end = num_endUp


    }

}

let profNovo = new Professor("",0 ,0)
let escolaNova = new Escola(profNovo, "","",0)
let menu = true
while(menu){
    let questao = leitor.questionInt("Escolha a opção \n 1 - Cadastrar Prof. \n 2 - Cadastrar Escola \n 3 - Atualizar Prof. \n 4 - Atualizar Escola \n 5 - Visualizar Prof. \n 6 - Atualizar escola \n 0 - Sair n\ escolha uma opção:")
    switch(questao){
        case 1:
            profNovo.setProfessor()
            break
        case 2: 
            escolaNova.setEscola()
            break
        case 3:
            profNovo.getProfessor()
            break
        case 4:
            escolaNova.setEscola()
            break
        case 5:
            profNovo.setProfessor()
            break
        case 6:
            escolaNova.setEscola()
            break
            case 0:
            !menu
            process.exit(0)
    }
}



   