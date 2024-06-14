import { Guerreiro } from "./guerreiro";
import { Monstro } from "./monstro";

let meuGuerreiro:Guerreiro = new Guerreiro('Hunter','Mago',10)
let meuMosntro:Monstro = new Monstro('Belos')


meuGuerreiro.recebeDano(meuMosntro)
meuGuerreiro.stats()
