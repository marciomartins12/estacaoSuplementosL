function clickBotaoExcluir(botaoExcluirItem){
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
export default clickBotaoExcluir