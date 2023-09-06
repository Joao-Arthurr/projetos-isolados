function calcularIMC() {
    var txtIdade = document.getElementById('idade')
    var txtAltura = document.getElementById('altura')
    var txtPeso = document.getElementById('peso')
    var divRes = document.getElementById('res')
    var altura = Number(txtAltura.value)/100
    var peso = Number(txtPeso.value)
    var resultado = ""
    var res = Number(resultado)

    if (txtIdade.value == 0 || txtAltura.value == 0 || txtPeso.value == 0){
        divRes.innerHTML = '<p style = "font-size:0.9em; color:red;">Por favor, preencha todos os dados</p>'
    } else{
        divRes.innerHTML = ""
        res = peso / (altura*altura)
        divRes.innerHTML += `<br><hr>`
        divRes.innerHTML += `<h4>Resultado:</h4>`
        divRes.innerHTML += `<p>Seu IMC é <strong>${res.toFixed(1)} kg/m2</strong></p>`
    }
}