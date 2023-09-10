document.getElementById('calcular').addEventListener('click', () => {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value) / 100;
    const imc = peso / (altura * altura);
    const resultado = document.getElementById('resultado');
    
    if (!isNaN(imc)) {
      const classificacao = obterClassificacaoIMC(imc);

      let cor = '';

      if (classificacao === "Peso Normal"){
        cor = '#008000';
      } else if (classificacao === "Abaixo do peso" || classificacao === "Acima do Peso") {
        cor = '#d3d300';
      } else {
        cor = '#af0101';
      }

      const mensagemResultado = `Seu IMC é ${imc.toFixed(2)} Classificação: ${classificacao}`;

      exibirAlertaPersonalizado(mensagemResultado, cor);

      //resultado.textContent = mensagemResultado;
      //resultado.style.color = cor;

    } else {
      exibirAlertaPersonalizado('Preencha os campos corretamente.', 'black')
      //resultado.textContent = 'Preencha os campos corretamente.';
      //resultado.style.color = 'black';
    }
});

    function obterClassificacaoIMC(imc){
      if(imc < 18.5){
        return "Abaixo do peso"
      }else if(imc < 24.9){
        return "Peso Normal"
      }else if(imc < 29.9){
        return "Acima do Peso"
      }else if(imc < 34.9){
        return "Obesidade Grau I"
      }else if(imc < 39.9){
        return "Obesidade Grau II"
      }else{
        return "Obesidade Grau III"
      }
  };

  function exibirAlertaPersonalizado(mensagem, cor){
    const customAlert = document.getElementById('customAlert');
    const customAlertMessage = document.getElementById('customAlertMessage');

    customAlertMessage.textContent = mensagem;
    customAlert.style.backgroundColor = cor;
    customAlert.classList.add('show');

    setTimeout(() =>{
      customAlert.classList.remove('show');
    }, 5000);
  }
  