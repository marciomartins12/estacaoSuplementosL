
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
            <div class="div-preco-produto2">
                <span class="preco-produto2">R$${elemento.preco}</span>
                <svg value="${elemento.id}" xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-cart-plus botao-adicionar2" viewBox="0 0 16 16">
                <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                </svg>
            </div>
            </div>
            </div>
            <div class="div-preco-produto">
                <span class="preco-produto">R$${elemento.preco}</span>
                
                <svg value="${elemento.id}" xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="currentColor" class="bi bi-cart-plus botao-adicionar" viewBox="0 0 16 16">
                <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                </svg>
        </div>
    </div>
`
    })

}
function idaqui(id) {
    return id % 2 == 0 ? "1" : "2";
}


export default exibirItensNaTela