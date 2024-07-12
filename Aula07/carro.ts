let reader = require("readline-sync")

export class Carro {
    tanque:number
    km:number
    marca:string

    constructor(tanque:number,km:number, marca:string){
        this.tanque = tanque
        this.km = km
        this.marca = marca
    }

    getAndar(): void{
        let distancia = reader.question("Qual a distancia que voce quer percorrer?")
        let gastoGasolina = this.tanque - (distancia / this.km)
        if(gastoGasolina < 0){
            console.log("Voce nao tem gasolina para percorrer essa distancia")
        } else {
            this.tanque -= gastoGasolina
            console.log(`Voce gastou ${gastoGasolina} na corrida`)
        }
    
    }

    obterGasolina():number {
        return this.tanque
    }

    adicionarGasolina():void{
        let abastecer = reader.question("Quanto deseja abastecer o tanque?")
        console.log(`Voce abasteceu ${abastecer}`)
        this.tanque += abastecer
    }



}
