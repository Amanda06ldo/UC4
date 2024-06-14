"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cachorro_1 = require("./cachorro");
var coruja_1 = require("./coruja");
var meuCachorro = new cachorro_1.cachorro("Hunter", 10, "Vira-Lata");
var minhaCoruja = new coruja_1.coruja("Edwiges", 10);
meuCachorro.latir();
minhaCoruja.voar(10);
console.log(minhaCoruja.nome);
//metodo atacar e sofrer dano
