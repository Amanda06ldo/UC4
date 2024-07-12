class pessoa {
    nome:string
    sobrenome:string
    nomeDoPai:string
    nomeDaMae:string
    rg:number
    cpf:number
    dataDeNascimento:number

    constructor(nome:string,sobrenome:string,nomeDoPai:string,nomeDaMae:string,rg:number,cpf:number,dataDeNascimento:number){
        this.nome = nome
        this.sobrenome = sobrenome
        this.nomeDoPai = nomeDoPai
        this.nomeDaMae = nomeDaMae
        this.rg = rg
        this.cpf = cpf
        this.dataDeNascimento = dataDeNascimento
    }
}