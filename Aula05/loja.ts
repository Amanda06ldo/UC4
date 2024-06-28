var leitor = require('readline-sync')

class Produto{
nome: string
precoVendido: number
marca: string
precoComprado: number
lucro: number

constructor (nome: string, precoVendido: number, marca: string, precoComprado: number){
this.nome = nome
this.precoVendido = precoVendido
this.precoComprado = precoComprado
this.marca = marca
}

getProduto (): void{
 console.log(`Informaçoes: nome: ${this.nome}, precoComprado:${this.precoComprado}, precoVendido:${this.precoVendido}, lucro: ${this.lucro}, marca: ${this.marca}.`)
}
 calcularLucro(): number{
 let lucroTotal = this.precoVendido - this.precoComprado
 this.lucro = lucroTotal
 return lucroTotal
 }

setProduto (): void{
    let nomeUp = leitor.question('Qual o nome do Produto? ')
    let precoCompradoUp = leitor.question('Qual foi o preco comprado do produto? ')
    let precoVendidoUp = leitor.question('Qual o preco vendido do produto? ')
    let marcaUp = leitor.question('Qual a marca do pedido? ')
    this.nome = nomeUp
    this.precoComprado = precoCompradoUp
    this.precoVendido = precoVendidoUp
    this.marca = marcaUp
}
}

class Venda {
    produto: Produto
    quantidade: number
    valorTotal: number
    data: string

    constructor(produto: Produto){
        this.produto = produto

    }


    valorDaCompra ():void {
        let quantidadeUp = leitor.question('Quantos produtos voce quer comprar no total? ')
        this.quantidade = quantidadeUp
        this.valorTotal = quantidadeUp * this.produto.precoComprado
    console.log(` Sua compra foi realizada,  na venda foi comprado essa quantidade no total: ${quantidadeUp} e o  valor total foi: R$ ${this.valorTotal} `)
    }

    getVendas (): void{
        console.log(`Informacoes sobre a Venda: Produto: ${this.produto.nome},  Marca do produto: ${this.produto.marca}, Quantidade: ${this.quantidade}, Valor Total:${this.valorTotal}, Data:${this.data}.`)
    }

    setVenda (): void{
        this.produto.setProduto()
        let dataUp = leitor.question('Qual foi a data do produto que voce comprou? (Utilize até a data de expiração) ')
        this.data = dataUp
        
    }
    
    aplicarDescontos(): void{
        let CompraComDesconto = this.valorTotal * 0.2
        console.log(`  Parabens, voce ganhou um desconto de 30% em suas novas compras, agora seu valor total pode ser reduzido para: ${CompraComDesconto}`)
    }
    
    
}
let produtoVazio = new Produto('',0,'',0)
let produtoTvUp = new Produto('Televisao',10008889,'LG',2896)
let produtoCelularUp = new Produto('Celular',178087,'Samsung',9765)
let produtoNotebookUp = new Produto('Computador',926734,'Lenovo',47089)
let vendaTv = new Venda(produtoTvUp)


let vendaUp = new Venda(produtoVazio)

produtoTvUp.getProduto()
produtoTvUp.calcularLucro()
vendaTv.getVendas()
vendaTv.valorDaCompra()
vendaUp.setVenda()
vendaUp.getVendas()


//npm i --save-dev @types/node
//npm i readline-sync
//,