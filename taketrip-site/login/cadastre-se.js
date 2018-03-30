let formulario = document.querySelector('.formulario .row');

function carregarFomulario(){
    formulario.innerHTML = `
         <form action="" method="post" class ="ordem">
            <label for="">Nome</label>
            <input class="registrar" type="name" name="" id="">

            <label for="">Sobrenome</label>
            <input class="registrar" type="name" name="" id="">

            <div class="sexo">
                <label for="">Sexo</label>
                <select name="Sexo" id="">
                    <option value="">Feminino</option>
                    <option value="">Masculino</option>
                    <option value="">Outros</option>
                </select>
            </div>


            <label for="">Data de Nascimento</label>
            <input class="registrar regisrardata" type="date" name="" id="">


            <label for="">E-mail</label>
            <input class="registrar" type="email" name="" id="">

            <label for="">Confirmar e-mail</label>
            <input class="registrar" type="email" name="" id="">

            <label for="">Senha</label>
            <input class="registrar" type="password" name="" id="">

            <label for="">Confirmar Senha</label>
            <input class="registrar" type="password" name="" id="">

            <button onClick ="enviarFormulario" >Registrar</button>
        </form>
    `;

}

function enviarFormulario(){
    let inputs = document.querySelectorAll('input');
    let select = document.querySelector('select');
    
    let dados = {
        nome: inputs[0].value,
        sobrenome: inputs[1].value,
        email: inputs[3].value,
        confirmar: inputs[4].value,
        senha: inputs[5].value,
        confirmar: inputs[6].value
    };

    let url = 'http://localhost:4000/' + select.value;

        container.innerHTML = `<div class="alert alert-success">Personagem inserido!</div>`;
    
    
}

