function enviarParaoWatsapp(botaoEnviarPedidoParaOwhatsapp){
    
botaoEnviarPedidoParaOwhatsapp.addEventListener("click", () => {

    const getLocalStorage = JSON.parse(localStorage.getItem("produtoId"));

    if (getLocalStorage && getLocalStorage.length) {
        let conteudo = ''

        let variavelQueRecebeOIdDoElementoQueFoiColocadoNoLocalStorage = [];
        getLocalStorage.forEach((element) => {
            conteudo = produtos.filter((elemento) => element == elemento.id);
            variavelQueRecebeOIdDoElementoQueFoiColocadoNoLocalStorage.push(...conteudo)
        })
        enviarWhatsapp(variavelQueRecebeOIdDoElementoQueFoiColocadoNoLocalStorage)
    } else {
        container.innerHTML = `<h2 class="storageVazioTexto">Você não possui itens no carrinho<i class="bi bi-exclamation-octagon"></i>.</h2>`

    }
})
let textoEnviar = "https://api.whatsapp.com/send?phone=5598986279371&text=Ol%C3%A1,%20vim%20pelo%20Site%20e%20gostaria%20de%20comprar%20o%20"
let valorDosPrecosDeCadaItem = 0;
let valorDeCadaItemSomado = 0;
let parteFinalDoTextoComValorFinal = "";

function enviarWhatsapp(lista) {
    valorDosPrecosDeCadaItem = lista.map((lista) => lista.preco);
    valorDosPrecosDeCadaItem.forEach((item) => {
        valorDeCadaItemSomado += item
    });

    parteFinalDoTextoComValorFinal = `.%20Com%20valor%20total%20R$${valorDeCadaItemSomado}.00`

    const classesWhats = lista.map((item) => item.classe);
    textoEnviar += classesWhats
    textoEnviar += parteFinalDoTextoComValorFinal

    window.location.href = `${textoEnviar}`

}
}
export default enviarParaoWatsapp