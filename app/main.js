import produtos from "../pd.js";
import inputExibir from "./exibirDescricao.js";


import exibirItensNaTela from "./exibirProdutosNaTela.js";

const lista = produtos;
console.table(lista);
exibirItensNaTela(lista);
inputExibir()
