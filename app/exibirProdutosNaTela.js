
const localProdutos = document.querySelector(".container-produtos");


function exibirItensNaTela(Produtos) {

    Produtos.forEach((elemento) => {

        localProdutos.innerHTML += `
        <div class="grupos">
            <div class="produto">
            <div class="produto-fixo container${idaqui(elemento.id)}">
           
           <div class="item-clicavel">
           <label for="idInput${elemento.id}">   
                    
                    <img src="${elemento.img}" alt="produto">
                    <div class="div-nome-descricao">
                    <h2 class="nome-produto">${elemento.nome}</h2>
                    <h3 class="subtitulo-produto">${elemento.subtitulo}</h3>
                    <p class="descricao">${elemento.descricao}</p>
                    </div>
                    
                    </div>
                    </label>

                    <input id="idInput${elemento.id}" class="input" type="checkbox">
                    <input id="idInput2${elemento.id}" class="input2" type="checkbox">
                    
                <div class="div-preco-produto2">
                    <span class="preco-produto2">R$${elemento.preco}.00</span>
        
                   
                </div>
                </div>
                </div>
                <div class="div-preco-produto">
                    <span class="preco-produto">R$${elemento.preco}.00</span>
                    
                    <label for="idInput2${elemento.id}">
                    <div>
                    <i value="${elemento.id}"
                    class="botao bi bi-cart-plus"></i> 
                           
                    <i class="botao2 bi bi-cart-check"></i>
                    </label>
                    </div>
                    </label>
        
            </div>
        </div>
`
    })

}
function idaqui(id) {
    return id % 2 == 0 ? "1" : "2";
}


export default exibirItensNaTela