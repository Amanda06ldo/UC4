var leitor = require("readline-sync");
var Professor = /** @class */ (function () {
    function Professor(nome, idade, ano_xp) {
        this.nome = nome;
        this.idade = idade;
        this.ano_xp = ano_xp;
    }
    Professor.prototype.getProfessor = function () {
        console.log("Ol\u00E1,meu nome \u00E9 ".concat(this.nome, ",tenho ").concat(this.idade, " anos e sou professor h\u00E1 ").concat(this.ano_xp, " anos"));
    };
    Professor.prototype.setProfessor = function () {
        var nomeUp = leitor.question("Qual o nome do professor?");
        var idadeUp = leitor.question("Qual a idade do professor?");
        var ano_xpUp = leitor.question("Qual o tempo de xp do professor?");
        this.nome = nomeUp;
        this.idade = idadeUp;
        this.ano_xp = ano_xpUp;
    };
    return Professor;
}());
var Escola = /** @class */ (function () {
    function Escola(trabalhador, nomeEscola, endereço, num_end) {
        this.trabalhador = trabalhador;
        this.nomeEscola = nomeEscola;
        this.endereço = endereço;
        this.num_end = num_end;
    }
    Escola.prototype.getEscola = function () {
        console.log("Ol\u00E1, minha escola \u00E9 o ".concat(this.nomeEscola, ",no endere\u00E7o ").concat(this.endereço, " no n\u00FAmero ").concat(this.num_end, " e o nome do professor \u00E9 ").concat(this.trabalhador.nome));
    };
    Escola.prototype.setEscola = function () {
        this.trabalhador.getProfessor();
        var nomeEscolaUp = leitor.question("Qual o nome da escola?");
        var endereçoUp = leitor.question("Qual o endereço do escola?");
        var num_endUp = leitor.question("Qual o número do escola?");
        this.nomeEscola = nomeEscolaUp;
        this.endereço = endereçoUp;
        this.num_end = num_endUp;
    };
    return Escola;
}());
var profNovo = new Professor("", 0, 0);
var escolaNova = new Escola(profNovo, "", "", 0);
var menu = true;
while (menu) {
    var questao = leitor.question("Escolha a opção \n 1 - Cadastrar Prof. \n 2 - Cadastrar Escola \n 3 - Atualizar Prof. \n 4 - Atualizar Escola \n 5 - Visualizar Prof. \n 6 - Atualizar escola \n 7 - Sair");
    switch (questao) {
        case 1:
            profNovo.setProfessor();
            break;
        case 2:
            escolaNova.setEscola();
            break;
        case 3:
            profNovo.getProfessor();
            break;
        case 4:
            escolaNova.setEscola();
            break;
        case 5:
            profNovo.setProfessor();
            break;
        case 6:
            escolaNova.setEscola();
            break;
    }
}
