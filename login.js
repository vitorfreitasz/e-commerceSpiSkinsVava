function logar(){
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    let msgerror= document.querySelector(".mnsgerror")

    let lista_User = []
    let userValid = {
        nome: '',
        email: '',
        senha: ''
    }

    lista_User = JSON.parse(localStorage.getItem('listaUser'))
    
    lista_User.forEach((item) => {
        if(email == item.emailCad && senha == item.senhaCad){
            userValid = {
                nome: item.nomeCad,
                email: item.emailCad,
                senha: item.senhaCad
            }
        }
    });
    console.log(userValid)

    if(email == userValid.email && senha == userValid.senha){
        setTimeout(()=>{
            window.location.href ='index.html'
        }, 3000)
        
        let token = Math.random().toString(16).substring(2)
        localStorage.setItem('token', token)


    }else{
        msgerror.setAttribute('style','display: block');
        msgerror.innerHTML= 'Email ou senha incorretos.';
        email.focus();
    }
}