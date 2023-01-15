/* Aqui salvando as variáveis */

let nomes = document.querySelector('#nome')
let labelnome = document.querySelector('#labelnome')
let validNome = false

let email = document.querySelector('#email')
let labelemail = document.querySelector('#labelemail')
let validEmail = false

let senha = document.querySelector('#senha')
let labelsenha = document.querySelector('#labelsenha')
let validSenha = false

let confirmsenha = document.querySelector('#senha2')
let labelconfirmsenha = document.querySelector('#labelsenha2')
let validconfirmSenha = false

let msgerror = document.querySelector('.mnsgerror')
let msgsucess = document.querySelector('.mnsgsucess')

/*---------------------------------------------------------------------*/

/* Configurando os eventos para uma validação básica e rápida (Não está 100% pronto, mas já está funcionando.) */

nomes.addEventListener('keyup', () => {
    if(nomes.value.length <= 2){
        validNome = false
    } else {
        validNome = true
    }
})

email.addEventListener('keyup', () => {
    if(email.value.includes('@') && email.value.length > 5){
        validEmail = true
    } else {
        validEmail = false
    }
})

senha.addEventListener('keyup', () => {
    if(senha.value.length <= 5){
        validSenha = false
    } else {
        validSenha = true
    }
})

confirmsenha.addEventListener('keyup', () => {
    if(senha.value == confirmsenha.value){
        validconfirmSenha = true
    } else {
        validconfirmSenha = false
    }
})

/*-------------------------------------------------------------------------------------------------------------------*/

/* Criando a função de cadastro. Ela adiciona OU CRIA a lista no localStorage, e adiciona os dados lá. */

function cadastrar(){
    if(validNome && validEmail && validSenha && validconfirmSenha){
        let listaDeUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
        listaDeUser.push(
            {
                nomeCad: nomes.value,
                emailCad: email.value,
                senhaCad: senha.value,
                cartCad: []
            }
        )
        localStorage.setItem('listaUser', JSON.stringify(listaDeUser))

        msgsucess.setAttribute('style', 'display: block')
        msgsucess.innerHTML = "Cadastrado com sucesso."
        msgerror.innerHTML = ""
        msgerror.setAttribute('style','display: none')

        setTimeout(()=>{
            window.location.href='login.html'
        }, 3000)

    } else{
        msgerror.setAttribute('style', 'display: block')
        msgerror.innerHTML = "Preencha todos os campos corretamente"
        msgsucess.setAttribute('style', 'display: none')
        msgsucess.innerHTML = ""
    }
}
/*------------------------------------------------------------------------------------------------------------------------*/