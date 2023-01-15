/* Carrinho por enquanto apenas com a verificação para ver se o usuário está logado. */

if(localStorage.getItem('token')==null){
    alert('Você precisa logar em sua conta para acessar o carrinho...')
    window.location.href='login.html'
}

/*let carrinho=[]
function addcart(x){
    carrinho.push(x)
    console.log(carrinho)
    //let outputt = "";
    /*for(let item of carrinho){
        outputt += `
        <div class="carrinhoso">
            <p class="cartproducts">${item}</p>
        </div>
        `;
    }/
    document.querySelector("#produtoscarrinho").innerHTML = outputt;*/