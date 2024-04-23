function calcularIMC() {
  const nome = document.getElementById("nome").value;
  const altura = parseFloat(document.getElementById("altura").value);
  const peso = parseFloat(document.getElementById("peso").value);

  if (isNaN(altura) || isNaN(peso)) {
    alert("Por favor, insira valores válidos para altura e peso.");
    return;
  }

  const imc = peso / (altura * altura);
  const classificacao = classificarIMC(imc);

  const resultado = `
        **Nome:** ${nome}
        **Altura:** ${altura.toFixed(2)} m
        **Peso:** ${peso.toFixed(1)} kg
        **IMC:** ${imc.toFixed(2)}
        **Classificação:** ${classificacao}
    `;

  document.getElementById("resultado").innerHTML = resultado;
}

function classificarIMC(imc) {
  if (imc < 18.5) {
    return "Abaixo do peso";
  } else if (imc < 25) {
    return "Peso normal";
  } else if (imc < 30) {
    return "Sobrepeso";
  } else {
    return "Obesidade";
  }
}
