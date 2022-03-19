var numeroSecreto = parseInt(Math.random() * 101);
var resultado = document.getElementById("resultado");

var click = 0;
function Contar() {
  click += 1;
}

function Chutar() {
  var chute = parseInt(document.getElementById("valor").value);
  if (chute == numeroSecreto) {
    resultado.innerHTML =
      "Você acertou e precisou de " + click + " tentativas!";
  } else {
    if (chute < 0 || chute > 100) {
      resultado.innerHTML = "Você deve chutar um número entre 0 e 100.";
    } else {
      if (chute < numeroSecreto) {
        resultado.innerHTML = "O número é maior do que este.";
      } else {
        if (chute > numeroSecreto) {
          resultado.innerHTML = "O número é menor do que este.";
        } else {
        }
      }
    }
  }
}