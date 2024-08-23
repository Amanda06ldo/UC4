import { ponto2d } from "./ponto2d";

var reader = require('readline-sync')

let menu: boolean = true

while(menu){
    console.log(
        `
        0 - Finalizar
        1 - get
        2 - set x
        3 - set y
        4 - movimentação  
        5- equals
        6- toString
        7- distancia
        8- clone     
        `
    );
    
}

let option = reader.questionInt(`Escolha:`)

switch(option){
    case 1: 
       
        break
    case 2:
        
        break
    case 3:
        
        break
    case 4: 
        
        break
    case 5:
        break
    case 6:

        break
    case 0:
        process.exit(0)
    default:
        console.log(`Opcao invalida`);
        break
}