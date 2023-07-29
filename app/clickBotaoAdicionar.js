function botaoComprar(){
const TodosBotoesClicar = document.querySelectorAll(".input2");


TodosBotoesClicar.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        const botao = btn.parentElement.parentElement.parentElement.querySelector(".botao");
        const removerIcone1 = btn.parentElement.parentElement.parentElement.querySelector(".botao2")

       
        console.log(removerIcone1)
        removerIcone1.classList.toggle("botaoOn")
        botao.classList.toggle("displayNone")
        
    })
})


}
export default botaoComprar