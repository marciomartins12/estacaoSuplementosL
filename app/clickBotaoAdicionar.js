import produtos from "../pd.js";
const itensLocalSorage = JSON.parse(localStorage.getItem("produtoId"))||[];
function botaoComprar(){
const TodosBotoesClicar = document.querySelectorAll(".input2");
const botaoPagamento = document.querySelector(".carrinho-de-itens")

TodosBotoesClicar.forEach((btn)=>{
    btn.addEventListener("Change",()=> console.log("aiaiaia"))
})
TodosBotoesClicar.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        const botao = btn.parentElement.parentElement.parentElement.querySelector(".botao");
        const removerIcone1 = btn.parentElement.parentElement.parentElement.querySelector(".botao2");
        const iconCompraAdd = btn.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector(".ponto-vermelho");
        removerIcone1.classList.add("botaoOn");
        iconCompraAdd.classList.add("ponto-vermelhoOn")
        botao.classList.add("displayNone");


itensLocalSorage.push(botao.getAttribute("value"));
localStorage.setItem("produtoId", JSON.stringify(itensLocalSorage))
        
    })
})
let resultado = ""
botaoPagamento.addEventListener("click",()=>{
    
window.location.href="./pageCompras.html"
})

}
export default botaoComprar