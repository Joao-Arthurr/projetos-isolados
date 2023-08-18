var inputSenha = document.getElementById('senha')
function mostrar(){
    if (inputSenha.type == "password"){
        inputSenha.type = "text"
    } else {
        inputSenha.type = "password"
    }
}