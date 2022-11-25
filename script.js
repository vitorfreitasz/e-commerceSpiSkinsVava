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
                <p class="preco">
                    <span>R$</span>
                    <span>${item.preco}</span>
                </p>
            </div>
            `;
        }
        document.querySelector(".produtosdisplay").innerHTML = output;
    }
}

let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage();
}, 4000)


function nextImage(){
    count++;
    if(count>7){
        count=1;
    }

    document.getElementById("radio"+count).checked = true;
}

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