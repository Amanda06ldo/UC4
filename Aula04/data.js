var Data = /** @class */ (function () {
    function Data(dia, mes, ano) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    return Data;
}());
var novaData = new Data(14, 11, 2006);
console.log(novaData);
//npm i --save-dev @types/node
//npm i readline-sync
//npx tsc index.ts(nome no arquivo)
