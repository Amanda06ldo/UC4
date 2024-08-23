
var reader = require('readline-sync')

export class ponto2d {
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

    equals(outroPonto: ponto2d): boolean {
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

    distancia(outroPonto: ponto2d): number{
        return Math.sqrt((outroPonto.X - this.X) ** 2 + (outroPonto.Y - this.Y) ** 2)
    }

    clone(){
        let newPonto = new ponto2d
        newPonto.X = this.X
        newPonto.Y = this.Y

        return newPonto
    
    }
}

class doisParametros extends ponto2d {
    x: number
    y:number

    constructor(X:number,Y:number ){
        super()

        this.X
        this.Y
    }
    
}

class outroObjeto extends ponto2d {
    outroPonto: ponto2d

    constructor(outroPonto:ponto2d){
        super()
        this.X = outroPonto.X
        this.Y = outroPonto.Y
    }
}
