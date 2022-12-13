/* Aqui temos o código do slider do site. (Pretendemos substitui-lo por sliders do bootstrap ou outras bibliotecas do JavaScript, ficará melhor) */

let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage();
}, 4000)

function nextImage(){
    count++;
    if(count>6){
        count=1;
    }

    document.getElementById("radio"+count).checked = true;
}
/*--------------------------------------------------------------------------------------------------------*/