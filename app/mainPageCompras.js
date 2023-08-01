import produtos from "../pd.js";
const container = document.querySelector(".carrinho-de-compras");
const storage = JSON.parse(localStorage.getItem("produtoId"));
let valor = 0
console.log(storage)

if (storage) {
    storage.forEach(element => {
        const itemAdicionar = produtos.filter((produtos) => {
            return produtos.id == element
        })
        adicionarAoHtml(itemAdicionar);
        valorTotal(itemAdicionar);
    });
} else {
    container.innerHTML += `<h2 class="storageVazioTexto">Você não possui itens no carrinho <i class="bi bi-exclamation-octagon"></i></h2>`
}



function adicionarAoHtml(item) {
    item.forEach((elemento) => {
        container.innerHTML += `
        <div class="container-item">
        <div class="item">
        <img src="${elemento.img}" alt="foto">
        
        <div class="nome-preco">
        <h3 class="nome-item">${elemento.nome}</h3>
        <p class="preco-item">R$ ${elemento.preco}.00</p>
        </div>
        
        </div>
        <i id="${elemento.id}" class="cancelar-item bi bi-x-square"></i>
        
        </div>`
    })
    
    const botaoExcluirItem = document.querySelectorAll(".cancelar-item")
    botaoExcluirItem.forEach((item) => {
        const getItem = JSON.parse(localStorage.getItem("produtoId"));
        item.addEventListener("click", () => {
            window.location.reload();
            item.parentNode.remove();
            
            const resultado = getItem.filter((a) => {
                return a != item.id
            })
            localStorage.setItem("produtoId", JSON.stringify(resultado))
            
        })
        
    })
}



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
