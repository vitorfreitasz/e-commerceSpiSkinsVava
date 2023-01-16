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
        let Userlog = JSON.parse(localStorage.getItem('userLog'))
        let cartuser = Userlog.cart
        let output = "";
        for(let item of produtos){
            for(let prdt of cartuser){
                if( prdt == item.skin){
                    output += `
                    <table id = "tabelaprodutos" border="2px" bgcolor = "#62bbd2">
                        <tr>
                            <td>
                                <img src = "${item.imgskin}">
                            </td>
                            <td>
                                <p>${item.skin}</p>
                            </td>
                            <td>
                                <p>${item.preco}</p>
                            </td>
                        </tr>
                    </table>
                    `;
                }
            }
        }
        document.querySelector(".produtoscarrinho").innerHTML = output;
    }
}