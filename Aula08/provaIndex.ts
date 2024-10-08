class Aluno {
    nome: string
    idade: number
    matricula: number
    prova: prova

    constructor(nome: string, idade: number, matricula: number) {
        this.nome = nome
        this.idade = idade
        this.matricula = matricula
    }
     
}

import { prova } from "./prova"

var rl = require('readline-sync')

let menu: boolean = true

let BancoProva: Array<prova> = []

let num = 0
let verifica: boolean = false
while (menu) {
    console.log(
        `
        0 - Finalizar
        1 - Construir o Gabarito
        2 - Receber as respostas
        3 - Contabilizar acertos
        4 - Verificar nota
        5 - Comparar notas.     `
    );
    
    
    

    let option = rl.questionInt(`Escolha:`)

    switch (option) {
        case 1:
            let newProva = new prova([])
        
            let gabarito = criarGabarito()
            newProva.gabarito = gabarito
            verifica = true

            BancoProva.push(newProva)
            break
        case 2:
            
            
        
            let escolha = rl.questionInt('Qual prova voce quer responder? ')
        
            if(verifica){
            for(let i = 1;i <= 15; i++){
                let resposta = rl.question(`Fale a resposta da pergunta ${i}: `)
                
                BancoProva[escolha - 1].respostaAluno(resposta)
                } 
            }else{
            console.log('Voce nao criou o gabarito ainda.'); 
        }
            
            break
        case 3:
            console.log(BancoProva);
            
        
            let escolha1 = rl.questionInt('Qual prova voce quer verificar? ')
        
            console.log(BancoProva[escolha1 - 1].questoes);
            
            break
        case 4:
            console.log(BancoProva);
            
            let escolha2 = rl.questionInt('Qual prova voce quer verificar? ')
        
            console.log(BancoProva[escolha2 - 1].acertos1);
            
            break
        case 5:
            let escolha3 = rl.questionInt('Qual prova voce quer comparar? ')
            let escolha4 = rl.questionInt('Qual a outra prova que voce quer comparar? ')
        
            BancoProva[escolha3 - 1].maior(BancoProva[escolha4 - 1])
            break
        case 0:
            process.exit(0)
        default:
            console.log(`Opcao invalida`);
            break
    }
}
function criarGabarito(): Array<string> {
    let gabarito: Array<string> = []
    for (let i = 0; i < 15; i++) {
        let pergunta = rl.question(`Insira as resposta da pergunta ${i}: `)
        gabarito.push(pergunta)
    }

    return gabarito
}