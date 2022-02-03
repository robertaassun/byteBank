import {Cliente} from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Roberta", 11111111111);
const cliente2 = new Cliente("Mairon", 22222222222);

const contaCorrenteRoberta = new ContaCorrente(1001, cliente1);
contaCorrenteRoberta.depositar(500);
contaCorrenteRoberta.sacar(100);

const contaCorrenteMairon = new ContaCorrente(1002, cliente2);

let valor = 200;
contaCorrenteRoberta.transferir(valor, contaCorrenteMairon);

console.log(contaCorrenteRoberta)
console.log(contaCorrenteMairon)


