/* Função de logar, ela pega os elementos dos inputs, cria uma lista para validar um usuário e cria uma lista para pegar os dados do JSON. */

function logar(){
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    let msgerror= document.querySelector(".mnsgerror")

    let lista_User = []
    let userValid = {
        nome: '',
        email: '',
        senha: '',
        cart: []

    }

    lista_User = JSON.parse(localStorage.getItem('listaUser'))
    
    lista_User.forEach((item) => {
        if(email == item.emailCad && senha == item.senhaCad){ 
            console.log('OLOCOOOO')
            userValid = {
                nome: item.nomeCad,
                email: item.emailCad, 
                senha: item.senhaCad,
                cart: item.cartCad
            } /* Depois, ela percorre a lista do JSON verificando se o que foi digitado no input confere com alguma conta cadastrada, se sim, armazena na lista userValid */
            setTimeout(()=>{
                window.location.href ='index.html' 
            }, 3000)
            
            /* Depois faz a mesma verificação pra efetuar o login, se estiver correta, ela envia o usuário para a tela principal index.html */
            localStorage.setItem('userLog', JSON.stringify(userValid))
            let token = Math.random().toString(16).substring(2) /* Aqui geramos um token aleatório para cada login, no qual se faz as verificações como na tela de login. */
            localStorage.setItem('token', token)                /* Armazenamos ele no localStorage */
    
        }else{
            msgerror.setAttribute('style','display: block');
            msgerror.innerHTML= 'Email ou senha incorretos.'; /* Caso dê erro nas verificações, mostramos os elementos. */
        }
    });
}