function soma(n1, n2) {
   n1 = prompt('Escolha um número');
   n2 = prompt('Escolha outro número para somar');

   document.getElementById('resultado').innerHTML = Number(n1) + Number(n2);
}

function multiplicacao(n1, n2) {
   n1 = prompt('Escolha um número');
   n2 = prompt('Escolha outro número para multiplicar');

   document.getElementById('resultado').innerHTML = Number(n1) * Number(n2);
}

function divisao(n1, n2) {
   n1 = prompt('Escolha um número');
   n2 = prompt('Escolha outro número para dividir');

   document.getElementById('resultado').innerHTML = Number(n1) / Number(n2);
}

function subtracao(n1, n2) {
   n1 = prompt('Escolha um número');
   n2 = prompt('Escolha outro número para subtrair');

   document.getElementById('resultado').innerHTML = Number(n1) - Number(n2);
}
