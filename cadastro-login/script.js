var senhaLogin = document.getElementById('senha')
var senhaCadastro = document.getElementById('novasenha')
var senhaConfirmar = document.getElementById('confirmar')

function mostrar(){
    if (senhaLogin.type == "password"){
        senhaLogin.type = "text"
    } else {
        senhaLogin.type = "password"
    }

    if (senhaCadastro.type == "password"){
        senhaCadastro.type = "text"
    } else {
        senhaCadastro.type = "password"
    }

    if (senhaConfirmar.type == "password"){
        senhaConfirmar.type = "text"
    } else {
        senhaConfirmar.type = "password"
    }
}