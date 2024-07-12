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

    getCarro(): void{
        console.log(`A marca do carro é ${this.marca}, a quantidade do tanque é ${this.tanque} e  está a ${this.km} por hora. `);
        
    }
     setCarro(): void{
        let newTanque = reader.question('Digite a quantidade do tanque:')
        let newKm = reader.questionInt('Digite o km que está:')
        let newMarca = reader.questionInt('Digite a marca do carro:')
        
        if(newMarca == ''){
            this.marca = this.marca
        }else{
            this.marca = newMarca
        }

        if(newKm == ''){
            this.km = this.km
        }else{
            this.km = newKm
        }
        if(newTanque == ''){
            this.tanque = this.tanque
        }else{
            this.tanque = newTanque
        }
    }

    Andar(): void{
        let distancia = reader.questionInt("Qual a distancia que voce quer percorrer?")
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
        let abastecer = reader.questionInt("Quanto deseja abastecer o tanque?")
        console.log(`Voce abasteceu ${abastecer}`)
        this.tanque += abastecer
    }



}
