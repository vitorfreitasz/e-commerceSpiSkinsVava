if(localStorage.getItem('token')==null){
    window.location.href='login.html'
}

let dadosusuario = JSON.parse(localStorage.getItem('userLog'))

let senha = ""
for (let i=0; i<dadosusuario.senha.length; i++)  {
	senha+='*'
}

outputtt=`
    <h1>Olá ${dadosusuario.nome}, seja bem vindo(a)!</h1>
    <div class="dadosdouser">
        <h3>Dados da sua conta:</h3>
        <p>Nome: ${dadosusuario.nome}</p>
        <p>Email: ${dadosusuario.email}</p>
        <p>Senha: ${senha}</p>
        <button onclick="deslogar()">Log Out</button>
    </div>
    `;

document.querySelector('.perfilUser').innerHTML= outputtt;

function deslogar(){
    localStorage.removeItem('userLog')
    localStorage.removeItem('token')
    setTimeout(()=>{
        window.location.href='index.html'
    }, 1000)
}