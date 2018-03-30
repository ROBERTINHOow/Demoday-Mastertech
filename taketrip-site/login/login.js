let container = document.querySelector('.container .row');

function carregarLogin(){
    container.innerHTML = ` 
        <form action="/" method = "post">
            <label for="">E-mail</label>
            <input class="logar" type="e-mail" name="" id="">
            <label for="">Senha</label>
            <input class="logar" type="password" name="" id="">

            <button onClick="logar()">Logar</button>
            <p><a href="#">Esqueci a senha</a></p>
            <p><a href="cadastre-se.html">Cadastre-se</a></p>
        </form>
    `;
    
}

function logar(){
    alert('Login realizado com sucesso');
}

function enviarCadastro(){
    let inputs = document.querySelectorAll('input');
    let button = document.querySelector('button');
    
    let dados = {
        email: inputs[0].value,
        senha: inputs[1].value,
        
    };

    let url = 'http://localhost:4000/' + select.value;

    axios.post(url, dados).then(function(resposta){
        console.log(resposta);

        container.innerHTML = `<div class="alert alert-success">Personagem inserido!</div>`;
    });
    
}