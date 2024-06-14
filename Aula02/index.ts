import { cachorro } from "./cachorro"
import { coruja } from "./coruja"
const meuCachorro:cachorro = new cachorro("Hunter",10, "Vira-Lata")
const minhaCoruja:coruja = new coruja("Edwiges", 10)

meuCachorro.latir()
minhaCoruja.voar(10)
console.log(minhaCoruja.nome)

//metodo atacar e sofrer dano