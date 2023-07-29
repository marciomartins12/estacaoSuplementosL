function inputExibir(){
    const inputs = document.querySelectorAll(".input");
    
    inputs.forEach((elemento)=>{
elemento.addEventListener("change", (elemento)=>{
    const campoFixed = elemento.target.parentElement.parentElement.parentElement
    const descricaoParagrafoItem = elemento.target.parentElement.parentElement.parentElement.querySelector(".descricao");
    const botoesComprar = elemento.target.parentElement.parentElement.parentElement.querySelectorAll(".div-preco-produto2");
    const botoesComprar2 = elemento.target.parentElement.parentElement.parentElement.parentElement.querySelector(".div-preco-produto");
    const botaoVoltar = elemento.target.parentElement.parentElement.parentElement.parentElement.querySelector(".botao-fechar");
    console.log(botoesComprar2)
    campoFixed.classList.toggle("displayFixo");
    descricaoParagrafoItem.classList.toggle("descricao-produto");
    botoesComprar.classList.toggle("displayON")
    botoesComprar2.classList.toggle("displayNone")
    botaoVoltar.classList.toggle("displayON")

})
    })
}
export default inputExibir