import { Data } from "./data"

/*Criar um SWITCH CASE com essas informações:

CASE 1: Criar a data;
CASE 2: Comparar datas;
CASE 3: Print do Dia / Mês / Ano;
CASE 4: Verificar se é bissexto;
CASE 5: Clonar Data. */

let reader = require('readline-sync')
let menu: boolean = true
let bancoDatas: Array<Data> = []

while(menu){
    console.log(
        `
        0 - Finalizar
        1 - Criar a data
        2 - Comparar datas
        3 - Print do Dia / Mes / Ano
        4 - Verificar se é bissexto
        5 - Clonar Data
        0 - Sair
        `
    );

    let option = reader.questionInt("Escolha: ")

    switch(option){
        case 1:
           criarDatas()
            break
        case 2:
            let i = reader.questionInt(``)
            break
        case 3:
            
            
            break
        case 4:
            
        
            break
        case 5:

            break
        case 0:
            process.exit(0)
        default:
            console.log(`Essa opção não existe`)
            break
            
    }
    
}

    function criarDatas(): Data{
    let novoDia = reader.questionInt(`Digite um dia: `)
    let novoMes = reader.questionInt(`Digite um mes: `)
    let novoAno = reader.questionInt(`Digite um ano: `)
    let newData = new Data (novoDia,novoMes,novoAno)
    bancoDatas.push(newData)
    return newData
}

