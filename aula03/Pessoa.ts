class Pessoa {
    nome: string
    idade: number
    
    constructor(nome: string,idade:number){
        this.nome = nome
        this.idade = idade
    }
    comprimentar(): void {
    }
}

let eu:Pessoa = new Pessoa('felipe',17)

eu.comprimentar()

class Crianca extends Pessoa {
    comprimentar(): void {
        console.log(`Ola como você esta eu tenho ${this.idade} anos e me chamo ${this.nome}`)
    }
}
class Adulto extends Pessoa {
    comprimentar(): void {
        console.log(`Ola como você esta eu tenho ${this.idade} anos e me chamo ${this.nome}`)
    }
}
class Idoso extends Pessoa {
    comprimentar(): void {
        console.log(`Ola como você esta eu tenho ${this.idade} anos e me chamo ${this.nome}`)
    }
}
let kid = new Crianca('luiz',3)
let adult = new Adulto('leonardo',20)
let oldmen = new Idoso('thiago', 92)

kid.comprimentar()
adult.comprimentar()
oldmen.comprimentar()