import produtos from "../pd.js";
import botaoComprar from "./clickBotaoAdicionar.js";
import inputExibir from "./exibirDescricao.js";


import exibirItensNaTela from "./exibirProdutosNaTela.js";

const lista = produtos;
exibirItensNaTela(lista);
inputExibir()
botaoComprar()
