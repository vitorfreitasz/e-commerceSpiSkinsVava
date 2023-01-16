/* Aqui puxamos a lista dos produtos do JSON */

let http = new XMLHttpRequest();
http.open('get','produtos.json', true);
http.send();
http.onload = function(){
    if(this.readyState == 4 && this.status==200){
        let produtos = JSON.parse(this.responseText);
        let output = "";
        for(let item of produtos){
            output += `
            <div class="produtos">
            <a href = "${item.linkskin}">
            <img src="${item.imgskin}" alt="${item.imgskin}">
            <p class="skin">${item.skin}</p>
            <p id="preco">
            <span>R&dollar; ${item.preco}</span>                  
            </p></a>
            <button id="botaocompra" onclick="addcart('${item.skin}')">Comprar</button>
            </div>
            `;
        }
        document.querySelector("#produtosdisplay").innerHTML = output;
    }
}

dadosusuario = JSON.parse(localStorage.getItem('userLog'))
let carrinho= dadosusuario.cart
function addcart(x){
    
    carrinho.push(x)
    console.log(carrinho)
    usuario=JSON.parse(localStorage.getItem('userLog'))
    //.filter(item => item.cart !== carrinho)
    usuario.cart = carrinho
    console.log(usuario)
    localStorage.removeItem('userLog')
    localStorage.setItem('userLog', JSON.stringify(usuario))
    setTimeout(()=>{
        window.location.href='carrinho.html'
    }, 1000)
}

function salvadiv(x){
    let prodt = x
    console.log(prodt)
    
}


function pagFinal(){
    setTimeout(()=>{
        window.location.href='finalizado.html'
    }, 1000)
}

function usuario(){
    if(localStorage.getItem('token')==null){
        window.location.href='login.html'
    } else{
        window.location.href='perfil.html'
    }
}

/* -------------------------------------------------------------------------------------- */