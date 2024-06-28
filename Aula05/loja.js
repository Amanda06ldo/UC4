var leitor = require('readline-sync');
var Produto = /** @class */ (function () {
    function Produto(nome, precoVendido, marca, precoComprado) {
        this.nome = nome;
        this.precoVendido = precoVendido;
        this.precoComprado = precoComprado;
        this.marca = marca;
    }
    Produto.prototype.getProduto = function () {
        console.log("Informa\u00E7oes: nome: ".concat(this.nome, ", precoComprado:").concat(this.precoComprado, ", precoVendido:").concat(this.precoVendido, ", lucro: ").concat(this.lucro, ", marca: ").concat(this.marca, "."));
    };
    Produto.prototype.calcularLucro = function () {
        var lucroTotal = this.precoVendido - this.precoComprado;
        this.lucro = lucroTotal;
        return lucroTotal;
    };
    Produto.prototype.setProduto = function () {
        var nomeUp = leitor.question('Qual o nome do Produto? ');
        var precoCompradoUp = leitor.question('Qual foi o preco comprado do produto? ');
        var precoVendidoUp = leitor.question('Qual o preco vendido do produto? ');
        var marcaUp = leitor.question('Qual a marca do pedido? ');
        this.nome = nomeUp;
        this.precoComprado = precoCompradoUp;
        this.precoVendido = precoVendidoUp;
        this.marca = marcaUp;
    };
    return Produto;
}());
var Venda = /** @class */ (function () {
    function Venda(produto) {
        this.produto = produto;
    }
    Venda.prototype.valorDaCompra = function () {
        let quantidadeUp = leitor.question('Quantos produtos voce quer comprar no total? ')
        this.quantidade = quantidadeUp;
        this.valorTotal = quantidadeUp * this.produto.precoComprado;
        console.log(` Sua compra foi realizada,  na venda foi comprado essa quantidade no total: ${quantidadeUp} e o  valor total foi: R$ ${this.valorTotal} `)
    };
    Venda.prototype.getVendas = function () {
        console.log(`Informacoes sobre a Venda: Produto: ${this.produto.nome},  Marca do produto: ${this.produto.marca}, Quantidade: ${this.quantidade}, Valor Total:${this.valorTotal}, Data:${this.data}.`)
    };
    Venda.prototype.setVenda = function () {
        this.produto.setProduto();
        let dataUp = leitor.question('Qual foi a data do produto que voce comprou? (Utilize até a data de expiração) ')
        this.data = dataUp;
    };
    Venda.prototype.aplicarDescontos = function () {
        var CompraComDesconto = this.valorTotal * 0.2;
        console.log(`  Parabens, voce ganhou um desconto de 30% em suas novas compras, agora seu valor total pode ser reduzido para: ${CompraComDesconto}`)
    };
    return Venda;
}());
var produtoVazio = new Produto('', 0, '', 0)
var produtoTvUp = new Produto('Televisao',10008889,'LG',2896)
var produtoCelularUp = new Produto('Celular',178087,'Samsung',9765)
var produtoNotebookUp = new Produto('Computador',926734,'Lenovo',47089)
var vendaTv = new Venda(produtoTvUp);
var vendaUp = new Venda(produtoVazio);
produtoTvUp.getProduto();
produtoTvUp.calcularLucro();
vendaTv.getVendas();
vendaTv.valorDaCompra();
vendaUp.setVenda();
vendaUp.getVendas();
//npm i --save-dev @types/node
//npm i readline-sync
//npx tsc index.t
