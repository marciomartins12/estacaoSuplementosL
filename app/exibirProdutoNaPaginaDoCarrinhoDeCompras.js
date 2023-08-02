function adicionarAoHtml(item, container){
    item.forEach((elemento) => {
        container.innerHTML += `
        <div class="container-item">
        <div class="item">
        <img src="${elemento.img}" alt="foto">
        
        <div class="nome-preco">
        <h3 class="nome-item">${elemento.nome}</h3>
        <p class="preco-item">R$ ${elemento.preco}.00</p>
        </div>
        
        </div>
        <i id="${elemento.id}" class="cancelar-item bi bi-x-square"></i>
        
        </div>`
    })}
    export default adicionarAoHtml