// Função para calcular o IMC
const imc = (peso, altura) => peso / (altura * altura);

// Função para determinar a situação do IMC
const situacao = (valor_imc) => {
    if (valor_imc < 18.5) return 'Abaixo do peso';
    else if (valor_imc < 25) return 'Peso ideal (parabéns)';
    else if (valor_imc < 30) return 'Sobrepeso';
    else if (valor_imc < 35) return 'Obesidade I';
    else if (valor_imc < 40) return 'Obesidade II (severa)';
    else return 'Obesidade III (muito severa)';
};