
var reader = require('readline-sync')

export class Ponto2D {
    X:number
    Y:number

    constructor(){
        this.X = 0
        this.Y = 0
    }
    public get(): void{
        console.log(`Os pontos dois dois sao: x = ${this.X} e y = ${this.Y}`)
    }

    public setX(): void{
    let escolhaX = reader.question('Digite o valor do x:')
    this.X = escolhaX
    }

    public setY(): void{
        let escolhaY = reader.question('Digite o valor do y:')
        this.Y = escolhaY
    }

    movimentacao():void{
        let X = reader.question('Digite o valor do x:')
        let Y = reader.question('Digite o valor do y:')
        this.X = X
        this.Y = Y
    }

    equals(outroPonto: Ponto2D): boolean {
        if (this.X == outroPonto.X && this.Y == outroPonto.Y) {
            console.log(`os pontos são iguais`)
            return true
        } else {
            console.log(`os pontos são diferentes`)
            return false
        }
    }

    toString(): string{
        return `X = ${this.X} e Y = ${this.Y}`
    }

    distancia(outroPonto: Ponto2D): number{
        return Math.sqrt((outroPonto.X - this.X) ** 2 + (outroPonto.Y - this.Y) ** 2)
    }

    clone(){
        let newPonto = new Ponto2D
        newPonto.X = this.X
        newPonto.Y = this.Y

        return newPonto
    
    }
}

export class doisParametros extends Ponto2D {
    x: number
    y:number

    constructor(X:number,Y:number ){
        super()

        this.X
        this.Y
    }
    
}

export class outroObjeto extends Ponto2D{
    outroPonto: Ponto2D

    constructor(outroPonto:Ponto2D){
        super()
        this.X = outroPonto.X
        this.Y = outroPonto.Y
    }
}
