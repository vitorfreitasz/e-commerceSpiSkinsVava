/* Carrinho por enquanto apenas com a verificação para ver se o usuário está logado. */

if(localStorage.getItem('token')==null){
    alert('Você precisa logar em sua conta para acessar o carrinho...')
    window.location.href='login.html'
}

let http = new XMLHttpRequest();
http.open('get','produtos.json', true);
http.send();
http.onload = function(){
    if(this.readyState == 4 && this.status==200){
        let produtos = JSON.parse(this.responseText);
        console.log(produtos)
        let output = "";
        for(let item of produtos){
            output += `
            <div class="produtos">
                <img src="${item.imgskin}" alt="${item.imgskin}">
                <p class="skin">${item.skin}</p>
                <p id="preco">
                    <span>VP&dollar; ${item.preco}</span>                  
                </p>
                <button id="botaocompra" onlick="addcart(${item.skin})">Comprar</button>
            </div>
            `;
        }
        document.querySelector("#produtosdisplay").innerHTML = output;
    }
}