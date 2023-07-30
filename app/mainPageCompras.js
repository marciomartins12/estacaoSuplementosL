import produtos from "../pd.js";
const container = document.querySelector(".carrinho-de-compras");
const storage = JSON.parse(localStorage.getItem("produtoId"));
let valor = 0
let valor2 = 0;
console.log(storage)

if(storage){
    storage.forEach(element => {
        const itemAdicionar= produtos.filter((produtos)=>{
            return produtos.id == element
        })
        adicionarAoHtml(itemAdicionar)
        valorTotal(itemAdicionar)
    });
}else{
    container.innerHTML+=`<h2 class="storageVazioTexto">Você não possui itens no carrinho.</h2>`
}



    function adicionarAoHtml(item){
        item.forEach((elemento)=>{
            container.innerHTML+=`
            <div class="container-item">
            <div class="item">
            <img src="${elemento.img}" alt="foto">
            
            <div class="nome-preco">
            <h3 class="nome-item">${elemento.nome}</h3>
            <p class="preco-item">R$ ${elemento.preco}</p>
            </div>
            
            </div>
            <i class="cancelar-item bi bi-backspace"></i>
            </div>`
        })
        const botaoExcluirItem = document.querySelectorAll(".cancelar-item")
        botaoExcluirItem.forEach((item)=>{
            item.addEventListener("click", ()=>{
                let result = []
                item.parentNode.remove();
                const containerP2 = document.querySelector(".carrinho-de-compras");
                const atualizaValor = containerP2.querySelectorAll(".nome-item");
                atualizaValor.forEach((e)=>{
                    result = e.textContent
                    console.log(result)
                    
                    const nomeDeQuemVaiVoltar =  produtos.filter((i)=>{
                        return i.nome == result
                     })
                     atualizarPreco(nomeDeQuemVaiVoltar)
                 })
                })
        })
    }
    function valorTotal(item){
        const localValor = document.querySelector(".local-valor");
        item.forEach((itens)=>{
            valor +=  itens.preco
        })
        localValor.innerHTML=`<span class="valor-total">R$${valor}.00</span>`
    }
    
    function atualizarPreco(item){
           item.forEach((itens)=>{
            console.log(itens)
            valor2 +=  itens.preco
        })
        document.querySelector(".local-valor").innerHTML=`<span class="valor-total">R$${valor}.00</span>`
    }