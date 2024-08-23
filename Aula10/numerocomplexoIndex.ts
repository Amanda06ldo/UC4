var reader = require('readline-sync')

let menu: boolean = true
import { NumeroComplexo } from "./numerocomplexo";

while(menu){
    console.log(
        `
        0 - Finalizar
        1 - get 
        2 - set real
        3 - set imaginario
        4 - somar
        5-  subtrair 
        6-  multiplicar 
        7-  dividir
        8-  equals
        9- toString
        10- modulo
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
    case 7:

    break
    case 8:
    
    break
    case 9:

    break
    case 10:
    
    break
    case 0:
        process.exit(0)
    default:
        console.log(`Opcao invalida`);
        break
}