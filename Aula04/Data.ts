class Data{
    dia:number
    mes:number
    ano:number
  
    constructor( dia:number,mes:number, ano:number){
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }
}
let novaData = new Data(14,11,2006)
console.log(novaData)
