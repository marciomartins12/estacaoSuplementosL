
const localProdutos = document.querySelector(".container-produtos");


function exibirItensNaTela(Produtos) {

    Produtos.forEach((elemento) => {

        localProdutos.innerHTML += `
        <div class="grupos">
            <div class="produto">
            <div class="produto-fixo container${idaqui(elemento.id)}">
           
           <div class="item-clicavel">
           <label for="idInput${elemento.id}">
               <div class="botao-fechar">
                   <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
                       <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
                    </svg></div>
                    
                    
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
                    <span class="preco-produto2">R$${elemento.preco}</span>
        
                   
                </div>
                </div>
                </div>
                <div class="div-preco-produto">
                    <span class="preco-produto">R$${elemento.preco}</span>
                    
                    <label for="idInput2${elemento.id}">
                    <div>
                    <i value="${elemento.id}"
                    class="botao bi bi-cart-plus"></i>        
                    <i class="botao2 bi bi-cart-x"></i>
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