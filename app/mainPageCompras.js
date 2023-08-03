import produtos from "../pd.js";
import enviarParaoWatsapp from "./clickEviarParaOWhatsapp.js";
import clickBotaoExcluir from "./eventodeclickBotaoNaPaginaDeCompraParaExcluir.js";
import adicionarAoHtml from "./exibirProdutoNaPaginaDoCarrinhoDeCompras.js";
const container = document.querySelector(".carrinho-de-compras");

const storage = JSON.parse(localStorage.getItem("produtoId"));

let valor = 0

if (storage) {
    storage.forEach(element => {
        const itemAdicionar = produtos.filter((produtos) => {
            return produtos.id == element
        })
        adicionarAoHtml(itemAdicionar, container);
        valorTotal(itemAdicionar);
    });
} else {
    container.innerHTML += `<h2 class="storageVazioTexto">Você não possui itens no carrinho <i class="bi bi-exclamation-octagon"></i></h2>`
}
const botaoExcluirItem = document.querySelectorAll(".cancelar-item")
clickBotaoExcluir(botaoExcluirItem)

function valorTotal(item) {
    const localValor = document.querySelector(".local-valor");
    item.forEach((itens) => {
        valor += itens.preco
    })
    localValor.innerHTML = `<span class="valor-total">R$${valor}.00</span>`
}

const botaoEnviarPedidoParaOwhatsapp = document.querySelector(".enviar-pedido");
enviarParaoWatsapp(botaoEnviarPedidoParaOwhatsapp)
