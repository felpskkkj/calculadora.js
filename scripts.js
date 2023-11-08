function mudancaApagar() {
  if(document.getElementById("resultado") != "" || document.getElementById("previous") != "") {
    document.getElementById("sera").innerInner = "C"
  }
}
//let ponto = document.getElementById("ponto");
let currentOperation = "";
function insert(num) {
  let resultado = document.getElementById("resultado").innerText
  if ((resultado == "" || resultado.includes(".")) && num == ".") return;
  document.getElementById("resultado").innerText += num;
  //if (document.getElementById("resultado").includes(".") && num == ".") return;
  //if(!document.getElementById("resultado").includes(".") && num != ".") return;
  //if(resultado.includes(".") && num == ".") return;
  //if(num === "." && resultado.innerText.includes(".")) {
  //return;
}
//}
function clean() {
  
  document.getElementById("resultado").innerText = "";
  document.getElementById("previous").innerText = "";
}
function back() {
  let resultado = document.getElementById("resultado").innerHTML;
  document.getElementById("resultado").innerHTML = resultado.substring(
    0,
    resultado.length - 1
  );
}
function insertOperation(x) {
  if (currentOperation != "") {
    calcular();
  }

  let preview = document.getElementById("previous").innerText;
  let operacoess = document.getElementById("resultado").innerText;
  if (operacoess == "") return;
  document.getElementById("previous").innerText = operacoess + x;
  document.getElementById("resultado").innerText = "";

  currentOperation = x;

  if (preview !== "") {
    calcular();
  }
}
function calcular() {
  let operacaoValor;
  let previous = document.getElementById("previous").innerText;
  let current = document.getElementById("resultado").innerText;
  let _previous = parseFloat(previous);
  let _current = parseFloat(current);
  

  if (isNaN(_previous) || isNaN(_current)) return;

  switch (currentOperation) {
    case "+":
      operacaoValor = _previous + _current;
      break;
    case "-":
      operacaoValor = _previous - _current;
      break;
    case "%":
      operacaoValor = (_previous * _current) / 100;
      break;
    case "x":
      operacaoValor = _previous * _current;
      break;
    case "÷":
      operacaoValor = _previous / _current;
      break;
    default:
      return; 
  }
  document.getElementById("resultado").innerText = operacaoValor;
  document.getElementById("previous").innerText = "";
  console.log(operacaoValor);
}
//   let calculo = document.getElementById("calcular")
//  if(previous) {
//  calculo.addEventListener('click', )
//  }
// if ((resultado == "" || resultado.includes(".")) && x == ".") return;


mudancaApagar()




