export class cachorro {
    nome: string
    peso:number
    raca: string
    
    constructor(nome: string,peso:number, raca: string){
        this.nome = nome
        this.peso = peso
        this.raca = raca
    }
      latir(): void{
        console.log(`Au au!`)
    }
    comer(quantidade:number):void{
        console.log(`O cachorro comeu ${quantidade} coxinha.`)
    }
    

}

// let carro2:string = "Monza"