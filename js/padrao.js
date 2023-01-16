import prodt from './script.js'


let htttp = new XMLHttpRequest();
htttp.open('get','produtos.json', true);
htttp.send();
htttp.onload = function(){
    if(this.readyState == 4 && this.status==200){
        let produtos = JSON.parse(this.responseText);
        let outputt = "";
        for(let item of produtos){
            if(item.skin == prodt){
                console.log('oi')
                outputt += `
                <div class="left-side">
                    <div class="items">
                        <div class="select-image">
                            <img src="/imagens/todas-skins/Vandal/Vandal Champions 2021/AnyConv.com__Champions_2021_Vandal.png">
                        </div>
                        <div class="thumbnails">
                            <div class="thumbnail">
                                <img src="/imagens/todas-skins/Vandal/Vandal Champions 2021/AnyConv.com__Champions_2021_Vandal.png">
                            </div>

                            <div class="thumbnail">
                                <img src="/imagens/todas-skins/Vandal/Vandal Champions 2021/AnyConv.com__Champions_2021_Vandal.png">
                            </div>

                            <div class="thumbnail">
                                <img src="/imagens/todas-skins/Vandal/Vandal Champions 2021/AnyConv.com__Champions_2021_Vandal.png">
                            </div>

                            <div class="thumbnail">
                                <img src="/imagens/todas-skins/Vandal/Vandal Champions 2021/AnyConv.com__Champions_2021_Vandal.png">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="right-side">
                    <div class="content">
                        <h6> ${item.classe} </h6>
                        <h1> ${item.skin} </h1>
                        <p> Celebre o Champions 2021 e apoie a sua equipe favorita com essa skin raríssima para Vandal.
                            . </p>
                        <div class="prices">
                            <span class="price">por R$55.00 ou 10x de R$ 5,50</span>
                            <span class="off">de R$75.00</span>
                        </div>
                        <div class="options">
                            <div class="amount">
                                <div class="minus">
                                    <img src="imagens/icon-minus.png">
                                </div>
                            <span>0</span>
                            <div class="plus">
                                <img src="imagens/icon-plus.png">
                            </div>
                        </div>
                        <a href="carrinho.html" class="button"><img src="./imagens/icon-cart.png">Adicionar ao carrinho</a>
                    </div>
                </div>
                `;
                console.log(outputt)
            }
        }
            document.querySelector("#produtospadrao").innerHTML = outputt;
        }
    }