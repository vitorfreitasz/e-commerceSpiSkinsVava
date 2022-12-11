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
function logar(){
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    let msgerror= document.querySelector(".mnsgerror")
    if(email =='pixdasilvaskins@mandrake.com' && senha == 'sitemandrake'){
        alert('Logado!')
    }else{
        msgerror.setAttribute('style','display: block');
        msgerror.innerHTML= 'Email ou senha incorretos.';
        email.focus();
    }
}
var listacarrinho = []
function addcart(skin){
    listacarrinho.push(skin)
    console.log(listacarrinho)
}
console.log(listacarrinho)

/*{"Rifles":
    [
        {
            "arma": "Vandal",
            "skinsDaArma": ["Saqueadora","GlitchPop","Ion"],
            "preços":[1750,1750,2175]
        },
        {
            "arma": "Phantom",
            "skinsDaArma": ["Blastx","GlitchPop","Ion"], 
            "preços":[2175,1750,2175]
        }
    ]
}*/