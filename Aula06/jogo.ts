
var rl = require('readline-sync')

export interface jogoInterface{
    titulo:string
    genero:string
    classificacaoEtaria: number

    getDetalhes(): void
    setJogo():void
}

export class Jogo implements jogoInterface{
   public titulo: string
   public genero: string
   public classificacaoEtaria: number

    constructor(titulo: string, genero: string, classificacaoEtaria: number){
        this.titulo = titulo
        this.genero = genero
        this.classificacaoEtaria = classificacaoEtaria
}
    public getDetalhes(): void{
        console.log(`O jogo se chama ${this.titulo}, o genero do filme é ${this.genero} e a classificação etaria  do filme é de maiories ${this.classificacaoEtaria} anos.`);
        
    }
    public setJogo(): void{
        let newTitulo = rl.question('Digite o titulo:')
        let newGenero = rl.question('Digite o genero:')
        let newClassicacaoEtaria = rl.question('Digite a classificacao etaria:')

        this.titulo = newTitulo
        this.genero = newGenero
        this.classificacaoEtaria = newClassicacaoEtaria
    }
}

