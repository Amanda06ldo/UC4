import { Jogo } from "./jogo"

var rl = require('readline-sync')

export class jogoEletronico extends Jogo {
    plataforma:string
    constructor(titulo : string, genero:string, classificacaoEtaria : number){

        super(titulo,genero,classificacaoEtaria)
    this.plataforma = this.plataforma
    }

   getDetalhes(): void{
        console.log(` O jogo se chama ${this.titulo}, o genero do filme é ${this.genero} e a classificação etaria  do filme é de maiories ${this.classificacaoEtaria} anos, roda na plataforma ${this.plataforma}.`);
        
    }
     setJogo(): void{
        let newTitulo = rl.question('Digite o titulo:')
        let newGenero = rl.question('Digite o genero:')
        let newClassicacaoEtaria = rl.question('Digite a classificacao etaria:')
        let newPlataforma = rl.question('Qual a plataforma do jogo:')

        this.titulo = newTitulo
        this.genero = newGenero
        this.classificacaoEtaria = newClassicacaoEtaria
        this.plataforma = newPlataforma
    }
}