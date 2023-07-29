exibirDescri()
function exibirDescri() {
    const prod = document.querySelectorAll(".item-clicavel");

    prod.forEach((elemento) => {
        
        elemento.addEventListener("click", () => {
         const exibirTudo = elemento.parentNode.parentNode;
         const preco1 = elemento.parentElement.parentElement.parentElement.querySelector(".div-preco-produto");
         const preco2 = elemento.parentElement.parentElement.querySelector(".div-preco-produto2");
         const texto = elemento.parentElement.querySelector(".descricao-produto")
         console.log(preco1)


         exibirTudo.classList.add("displayFixo")
         preco2.classList.remove("div-preco-produto2");
         preco2.classList.add("div-descricao-produto3");
         preco1.classList.add("displayNone")
         texto.classList.add("displayON")
})
})
    
}
function clickbotao(botaoVoltar, descricaoProduto, campoEsconderCarrinho, precoecarrinhoDisplayNone, containerFixo ){
    botaoVoltar.addEventListener("click",()=>{
        
        })
    
}
export default exibirDescri