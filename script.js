document.getElementById('calcular').addEventListener('click', () => {
  const peso = parseFloat(document.getElementById('peso').value);
  const altura = parseFloat(document.getElementById('altura').value) / 100;
  const imc = peso / (altura * altura);

  if (!isNaN(imc)) {
    const classificacao = obterClassificacaoIMC(imc);
    let cor = '';
    let alertaClasse = '';

    if (classificacao === "Abaixo do peso" || classificacao === "Acima do Peso") {
      cor = '#FFD700';
      alertaClasse = 'warning';
    } else if (classificacao === "Obesidade Grau I" || classificacao === "Obesidade Grau II" || classificacao === "Obesidade Grau III") {
      cor = '#FF0000';
      alertaClasse = 'error';
    } else {
      cor = '#007700';
      alertaClasse = 'success';
    }

    exibirAlertaPersonalizado(imc.toFixed(2), classificacao, cor, alertaClasse);

    // Aplica a animação de fade-in para todos os alertas
    animarAlertas();

    // Se a classificação for "Obesidade", faça o alerta piscar
    if (classificacao === "Obesidade Grau I" || classificacao === "Obesidade Grau II" || classificacao === "Obesidade Grau III") {
      piscarAlerta();
    }
  } else {
    exibirAlerta('Preencha os campos corretamente.', 'red');
  }
});

function obterClassificacaoIMC(imc) {
  if (imc < 18.5) {
    return "Abaixo do peso";
  } else if (imc < 24.9) {
    return "Peso Normal";
  } else if (imc < 29.9) {
    return "Acima do Peso";
  } else if (imc < 34.9) {
    return "Obesidade Grau I";
  } else if (imc < 39.9) {
    return "Obesidade Grau II";
  } else {
    return "Obesidade Grau III";
  }
}

function exibirAlerta(mensagem, cor) {
  const customAlert = document.getElementById('customAlert');
  const customAlertMessage = document.getElementById('customAlertMessage');

  customAlert.classList.remove('error', 'success', 'warning');
  customAlert.classList.add('error');
  customAlertMessage.innerHTML = mensagem;
  customAlert.style.backgroundColor = cor;
  customAlert.classList.add('show');

  setTimeout(() => {
    customAlert.classList.remove('show');
  }, 3000);
}

function exibirAlertaPersonalizado(imc, classificacao, cor, alertaClasse) {
  const customAlert = document.getElementById('customAlert');
  const customAlertMessage = document.getElementById('customAlertMessage');

  if (alertaClasse) {
    customAlert.classList.remove('error', 'success', 'warning');
    customAlert.classList.add(alertaClasse);
  }

  customAlertMessage.innerHTML = `Seu IMC é: <strong>${imc}</strong><br>Classificação: <strong>${classificacao}</strong>`;
  customAlert.style.backgroundColor = cor;
  customAlert.classList.add('show');

  setTimeout(() => {
    customAlert.classList.remove('show');
  }, 6000);
}

function animarAlertas() {
  const customAlert = document.getElementById('customAlert');
  const customAlertMessage = document.getElementById('customAlertMessage');
  customAlert.style.transition = 'opacity 2s ease-in-out'; // Adiciona uma transição de 2 segundos para o fade-in
  customAlert.style.opacity = '0'; // Define a opacidade inicial como 0 (invisível)

  setTimeout(() => {
    customAlertMessage.style.visibility = 'visible';
    customAlert.style.opacity = '1'; // Define a opacidade como 1 (visível)
  }, 100); // Aguarda 100 milissegundos antes de mostrar
}

function piscarAlerta() {
  const customAlert = document.getElementById('customAlert');
  const customAlertMessage = document.getElementById('customAlertMessage');
  let visivel = true;
  let contador = 0;

  const intervalo = setInterval(() => {
    if (visivel) {
      customAlertMessage.style.visibility = 'hidden';
    } else {
      customAlertMessage.style.visibility = 'visible';
    }
    visivel = !visivel;
    contador++;

    if (contador === 12) { // Pisca 12 vezes (6 segundos)
      clearInterval(intervalo);
      customAlertMessage.style.visibility = 'visible'; // Garante que o texto seja visível no final
    }
  }, 500);
}








