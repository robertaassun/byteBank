import {Cliente} from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { Conta } from "./Conta.js";

const cliente1 = new Cliente("Roberta", 11111111111);

const contaCorrenteRoberta = new ContaCorrente(cliente1, 1001);
contaCorrenteRoberta.depositar(500);
contaCorrenteRoberta.sacar(100);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001)


console.log(contaCorrenteRoberta);
