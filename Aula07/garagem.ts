import { Carro } from "./carro"

export class Garagem{
    Carros:Carro[]

    constructor(){
        this.Carros = []
    }

    adicionaCarro(Carro: Carro): void{
        if(this.Carros.length < 10){
            this.Carros.push(Carro)
        } else {
            console.log("Garagem está lotada, tente outra vez")
        }
        
    }
  
        removerCarro(marca: string): void{
           let i:number
           for(i = 0; i < this.Carros.length; i++){
            if(this.Carros[i].marca === marca){
                this.Carros.splice(i,1)[i]
            }
            
            
           }

}
}