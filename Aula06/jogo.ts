
var rl = require('readline-sync')

export class Jogo {
    titulo: string
    genero: string
    classificacaoEtaria: number

    constructor(titulo: string, genero: string, classificacaoEtaria: number){
        this.titulo = titulo
        this.genero = genero
        this.classificacaoEtaria = classificacaoEtaria
}
   getDetalhes(): void{
        console.log(`O jogo se chama ${this.titulo}, o genero do filme é ${this.genero} e a classificação etaria  do filme é de maiories ${this.classificacaoEtaria} anos.`);
        
    }
     setJogo(): void{
        let newTitulo = rl.question('Digite o titulo:')
        let newGenero = rl.question('Digite o genero:')
        let newClassicacaoEtaria = rl.question('Digite a classificacao etaria:')

        this.titulo = newTitulo
        this.genero = newGenero
        this.classificacaoEtaria = newClassicacaoEtaria
    }
}