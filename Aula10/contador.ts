

class contador{
    private contagem:number = 0 

    zerar():void{
        this.contagem = 0
    }
    incrementar(): void{
        this.contagem += 1
    }
    valor():string{
    return  `esse é o valor ${this.contagem}`
    }
}


