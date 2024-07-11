import { Jogo } from "./jogo"
import { jogoEletronico } from "./jogoEletronico"
import { jogoTabuleiro } from "./jogoTabuleiro"

var rl = require('readline-sync')

export class BibliotecaDeJogos{
    jogos: Jogo[]

    constructor(){
        this.jogos = []
    }

    adicionaJogo(jogo: Jogo): void{
        this.jogos.push(jogo)
    }
  
        removerJogo(): void{
            console.log(this.jogos)
            let titulo= rl.question('Insira o titulo para excluir:')
            this.jogos = this.jogos.filter(jogo => jogo.titulo !== titulo)  
             }
        listaJogos():void{
            let i:number
            for(i = 0;i < this.jogos.length;i++){
                this.jogos[i].getDetalhes()
            }
        }
}