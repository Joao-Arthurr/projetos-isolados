var sexo = document.getElementsByName('sexo')
var btHomem = document.getElementById('homem')
var btMulher = document.getElementById('mulher')

function calcularIMC() {
    var txtIdade = document.getElementById('idade')
    var txtAltura = document.getElementById('altura')
    var txtPeso = document.getElementById('peso')
    var erroId = document.getElementById('erroIdade')
    var erroAlt = document.getElementById('erroAltura')
    var erroPs = document.getElementById('erroPeso')
    var divRes = document.getElementById('res')
    var altura = Number(txtAltura.value)/100
    var peso = Number(txtPeso.value)
    var resultado = ""
    var res = Number(resultado)

    if (txtIdade.value == 0){
        erroId.innerHTML = '<p style = "margin-top:-15px; font-size:0.9em; color:red;">Por favor, informe sua idade</p>'
    } else{
        erroId.innerHTML = ''
    }
    
    if(txtAltura.value == 0){
        erroAlt.innerHTML = '<p style = "margin-top:-15px; font-size:0.9em; color:red;">Por favor, informe sua altura</p>'
    } else {
        erroAlt.innerHTML = ''
    }
    
    if(txtPeso.value == 0){
        erroPs.innerHTML = '<p style = "margin-top:-15px; font-size:0.9em; color:red;">Por favor, informe seu peso</p>'
    } else{
        erroPs.innerHTML = ''
    }
    
    if (txtIdade.value != 0 & txtAltura.value != 0 & txtPeso.value != 0){
        divRes.innerHTML = ""
        res = peso / (altura*altura)
        divRes.innerHTML += `<br><hr>`
        divRes.innerHTML += `<h4>Resultado:</h4>`
        divRes.innerHTML += `<p>Seu IMC é <strong style='color:#0367A6;'>${res.toFixed(1)} kg/m2</strong></p>`
    }
}

function homem(){
    btHomem.style.backgroundColor = '#0367A6'
    btHomem.style.color = 'white'
    btMulher.style.backgroundColor = '#f8687e33'
    btMulher.style.color = '#a57e83'
}

function mulher(){
    btMulher.style.backgroundColor = '#e17676'
    btMulher.style.color = 'white'
    btHomem.style.backgroundColor = '#65d3f833'
    btHomem.style.color = '#7ea0ab'
}