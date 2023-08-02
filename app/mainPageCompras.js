import produtos from "../pd.js";
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
botaoEnviarPedidoParaOwhatsapp.addEventListener("click", ()=>{

    const getLocalStorage = JSON.parse(localStorage.getItem("produtoId"));
   
    if(getLocalStorage && getLocalStorage.length){
        let conteudo = ''
        
        let res = [];
        getLocalStorage.forEach((element)=>{
            conteudo = produtos.filter((elemento)=>element== elemento.id);
            res.push(...conteudo)
        })
         enviarWhatsapp(res)
    }else{
        container.innerHTML=`<h2 class="storageVazioTexto">Você não possui itens no carrinho<i class="bi bi-exclamation-octagon"></i>.</h2>`
    
    }
})
let textoEnviar = "https://api.whatsapp.com/send?phone=5598986279371&text=Ol%C3%A1,%20vim%20pelo%20Site%20e%20gostaria%20de%20comprar%20o%20"
let valorDosPrecosDeCadaItem = 0;
let valorDeCadaItemSomado = 0;
let parteFinalDoTextoComValorFinal = "";

function enviarWhatsapp(lista){
    valorDosPrecosDeCadaItem = lista.map((lista)=>lista.preco);
    valorDosPrecosDeCadaItem.forEach((item)=>{
        valorDeCadaItemSomado+=item
    });
    
    parteFinalDoTextoComValorFinal=`.%20Com%20valor%20total%20R$${valorDeCadaItemSomado}.00`
   

    const classesWhats = lista.map((item)=>item.classe);
    textoEnviar+=classesWhats
    textoEnviar+=parteFinalDoTextoComValorFinal
    
    window.location.href=`${textoEnviar}`

}
