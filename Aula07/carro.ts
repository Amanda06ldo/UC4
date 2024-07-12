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

    public getDetalhes(): void{
        console.log(`A marca do carro é ${this.marca}, a quantidade do tanque é ${this.tanque} e  está a ${this.km} por hora. `);
        
    }
    public setCarro(): void{
        let newTanque = reader.question('Digite a quantidade do tanque:')
        let newKm = reader.question('Digite o km que está:')
        let newMarca = reader.question('Digite a marca do carro:')

        this.tanque = newTanque
        this.km = newKm 
        this.marca = newMarca
    }

    Andar(): void{
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
