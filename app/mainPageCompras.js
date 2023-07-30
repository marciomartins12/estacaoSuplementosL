import produtos from "../pd.js";
const container = document.querySelector(".carrinho-de-compras");
const storage = JSON.parse(localStorage.getItem("produtoId"));
console.log(storage)

if(storage){
storage.forEach(element => {
   const itemAdicionar= produtos.filter((produtos)=>{
        return produtos.id == element
    })
        console.log("a")
        adicionarAoHtml(itemAdicionar)
    });
    }else{
        console.log("b")
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
}