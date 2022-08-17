var peso;
window.alert("Vamos calcular seu IMC")
peso = prompt("Qual o seu peso?")

var altura;
altura = prompt("Agora, sua altura:")

window.alert("Calculando ....")

var IMC = peso / ( altura * altura);
var IMCf = IMC;
window.alert("Seu imc é de:" + IMCf.toPrecision(2));


if (IMC > 40) {
  window.alert("Você está em estado de obesidade grave, procure um profissional da área! SE CUIDE SEMPRE :)")
} else if (40 > IMC > 30) {
  window.alert("Você está em estado de obesidade, procure um profissional da área! SE CUIDE SEMPRE :)")
} else if (29,9 > IMC > 24,9) {
  window.alert("Você está no sobrepeso, procure se alimentar melhor e fazer exercícios! SE CUIDE SEMPRE :)")
}
else {
  window.alert("Você está no peso correto, PARABÉNS! SE CUIDE SEMPRE :)")
}
