import produtos from "../pd.js";
import exibirDescri from "./exibirDescricao.js";

import exibirItensNaTela from "./exibirProdutosNaTela.js";

const lista = produtos;
console.table(lista);
exibirItensNaTela(lista);
exibirDescri()