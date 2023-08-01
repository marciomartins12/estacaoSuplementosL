import produtos from "../pd.js";
import botaoComprar from "./clickBotaoAdicionar.js";
import inputExibir from "./exibirDescricao.js";


import exibirItensNaTela from "./exibirProdutosNaTela.js";
localStorage.clear()
const lista = produtos;
exibirItensNaTela(lista);
inputExibir()
botaoComprar()
