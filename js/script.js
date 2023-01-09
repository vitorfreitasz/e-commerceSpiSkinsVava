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
            <img src="${item.imgskin}" alt="${item.imgskin}">
            <p class="skin">${item.skin}</p>
            <p id="preco">
            <span>VP&dollar; ${item.preco}</span>                  
            </p>
            <button id="botaocompra" onclick="addcart('${item.skin}')">Comprar</button>
            </div>
            `;
        }
        document.querySelector("#produtosdisplay").innerHTML = output;
    }
}


/* -------------------------------------------------------------------------------------- */