export class coruja {
    nome: string
    peso:number
    
    constructor(nome: string, peso:number){
        this.nome = nome
        this.peso = peso
    }

    chirriar(): void{
        console.log(`iUh iUh!`)
    }
    comer(quantidade:number):void{
        console.log(`A coruja comeu ${quantidade} insetos.`)
    }
   voar(tempo:number):void{
    console.log(`A coruja voou por ${tempo} segundos`)
   } 

}