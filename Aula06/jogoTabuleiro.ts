import { Jogo } from "./jogo"

var rl = require('readline-sync')

export class jogoTabuleiro extends Jogo {
    numeroDeJogadores:number
    super(titulo:string, genero:string, classificacaoEtaria:number, plataforma:string,numeroDeJogadores:number){
        this.titulo = titulo
        this.genero = genero
        this.classificacaoEtaria = classificacaoEtaria
        this.numeroDeJogadores = numeroDeJogadores
    }

   getDetalhes(): void{
        console.log(` O jogo se chama ${this.titulo}, o genero do filme é ${this.genero} e a classificação etaria  do filme é de maiories ${this.classificacaoEtaria} anos, numero de jogadores é ${this.numeroDeJogadores}.`);
        
    }
     setJogo(): void{
        let newTitulo = rl.question('Digite o titulo:')
        let newGenero = rl.question('Digite o genero:')
        let newClassicacaoEtaria = rl.question('Digite a classificacao etaria:')
        let newNumeroDeJogadores = rl.question('Digite o numero de jogadores:')

        this.titulo = newTitulo
        this.genero = newGenero
        this.classificacaoEtaria = newClassicacaoEtaria
        this.numeroDeJogadores = newNumeroDeJogadores
    }
}