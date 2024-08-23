
var reader = require('readline-sync')

export class NumeroComplexo{
    numeroReal: number
    numeroImaginario: number

    constructor(numeroReal:number,numeroImaginario:number){
        this.numeroReal = numeroReal
        this.numeroImaginario = numeroImaginario
    }

    get(): void{
        console.log(`Valor real: ${this.numeroReal} e valor imaginario: ${this.numeroImaginario}`)

    }

    setNumeroReal():void{
        let escolhaNumeroReal = reader.question(`Escolha um valor:`)
        escolhaNumeroReal = this.numeroReal
    }

    setNumeroImaginario(): void{
        let escolhaNumeroImaginario = reader.question(`Escolha um valor:`)
        escolhaNumeroImaginario = this.numeroImaginario
    }

    somar(outroNumero: NumeroComplexo): NumeroComplexo{
        let newReal = this.numeroReal + outroNumero.numeroReal
        let newImaginario = this.numeroImaginario + outroNumero.numeroImaginario
        let newNumeroComplexo = new NumeroComplexo(newReal,newImaginario)
        return newNumeroComplexo
    }

    subitrair(outroNumero: NumeroComplexo): NumeroComplexo{
        let newReal = this.numeroReal - outroNumero.numeroReal
        let newImaginario = this.numeroImaginario - outroNumero.numeroImaginario
        let newNumeroComplexo = new NumeroComplexo(newReal,newImaginario)
        return newNumeroComplexo
    }

    dividir(outroNumero: NumeroComplexo){
        let newReal = this.numeroReal / outroNumero.numeroImaginario
        let newImaginario = this.numeroImaginario / outroNumero.numeroImaginario
        let newNumeroComplexo = new NumeroComplexo(newReal,newImaginario)
        return newNumeroComplexo
    }

    multiplicar(outroNumero: NumeroComplexo): NumeroComplexo{
        let newReal = this.numeroReal * outroNumero.numeroReal
        let newImaginario = this.numeroImaginario * outroNumero.numeroImaginario
        let newNumeroComplexo = new NumeroComplexo(newReal,newImaginario)
        return newNumeroComplexo
    }

    equals(outroNumero: NumeroComplexo): boolean{
        if(Math.sqrt((outroNumero.numeroReal - this.numeroReal) * 2 + (outroNumero.numeroImaginario - this.numeroImaginario) * 2)){
            return true
        }else{
            return false
        }
    }

    toString(): string{
        return `
        Valor Real: (${this.numeroReal})
        Valor Imaginario: (${this.numeroImaginario})`
    }

    modulo(outroNumero: NumeroComplexo): string {
        let resultado = Math.sqrt(this.numeroReal * outroNumero.numeroReal + this.numeroImaginario * outroNumero.numeroImaginario)
        let resultado2 = resultado + 'i'
        return resultado2;
    }
    
}
