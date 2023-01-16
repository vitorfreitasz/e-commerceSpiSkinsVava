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
        let somapreco = 0;
        for(let item of produtos){
            for(let prdt of cartuser){
                if( prdt == item.skin){
                    somapreco += item.preco;
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
        output += `
            <div id = "subtotal">
                <p>Total: ${somapreco}</p>
            </div>
            `;

        document.querySelector(".produtoscarrinho").innerHTML = output;
    }
}

    

dadosusuario = JSON.parse(localStorage.getItem('userLog'))
let carrinho= dadosusuario.cart
function removecart(x){
    carrinho.splice(x)
    console.log(carrinho)
    usuario=JSON.parse(localStorage.getItem('userLog'))
    //.filter(item => item.cart !== carrinho)
    usuario.cart = carrinho
    console.log(usuario)
    localStorage.removeItem('userLog')
    localStorage.setItem('userLog', JSON.stringify(usuario))
    window.location.reload();
}

function gofinalpage(){
    if(carrinho.length > 0){
        setTimeout(()=>{
            window.location.href='pagamento.html'
        }, 1000)
    } else{
        document.querySelector('.textzin h5').innerHTML = 'Seu carrinho está vazio!'
        setTimeout(()=>{
            document.querySelector('.textzin h5').innerHTML = ''
        }, 5000)
    }
}
function usuario(){
    if(localStorage.getItem('token')==null){
        window.location.href='login.html'
    } else{
        window.location.href='perfil.html'
    }
}