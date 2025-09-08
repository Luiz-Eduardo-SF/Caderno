# 📝 Estruturas Condicionais na Prática

## 🧮 Calculadora de IMC

### 🎯 Objetivo

---

Construir uma página para calcular o índice de massa corporal (IMC), segundo a fórmula:

 - ***IMC = peso / (altura * altura)***

Após o cálculo, deverá ser apresentada a situação atual da pessoa, de acordo com a tabela abaixo:

| IMC | Situação |
|:---:|:--------:|
| Menor que 18,5 | Abaixo do peso |
| Entre 18,5 e 24,9 | Peso ideal (parabéns) |
| Entre 25 e 29,9 | Sobrepeso |
| Entre 30 e 34,9 | Obesidade I |
| Entre 35 e 39,9 | Obesidade II (severa) |
| Maior que 40 | Obesidade III (muito severa) |

---


## 📄 Utilização de arquivo JS externo

```js
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
```

- Essas funções servem para calcular o IMC e identificar a situação da pessoa.

---


## 🌐 Página HTML

```html
<html>
    <body class="container">
    <h1 class="text-center">Calculadora IMC</h1>
    <hr>
    <fieldset>
        <legend class="text-center">Valores</legend>

        <!-- Campo para o peso -->
        <label for="id_peso" class="form-label">Peso (kg):</label>
        <input type="number" id="id_peso" class="form-control" min="0" step="any"> <br>

        <!-- Campo para a altura -->
        <label for="id_altura" class="form-label">Altura (m):</label>
        <input type="number" id="id_altura" class="form-control" min="0" step="any"> <br>

        <!-- Botão para calcular -->
        <button onclick="executar()" class="btn btn-primary m-2">Calcular</button>

    </fieldset>

    <hr>

    <!-- Área para mostrar o resultado -->
    <div id="res" class="alert alert-success">
        O resultado vai aparecer aqui!
    </div>

    </body>
</html>
```

 - Neste exemplo também usamos o [Bootstrap](https://getbootstrap.com) para estilizar nossa página, facilitando o desenvolvimento e permitindo focar no HTML e JS.

---

## 🖥️ JS Interno

```html

<script>
    // Função executada ao clicar no botão
    const executar = () => {

        // Obtém os valores dos campos
        const peso = Number(document.getElementById("id_peso").value);
        const altura = Number(document.getElementById("id_altura").value);
        const resposta = document.getElementById("res");

        // Validação simples dos campos
        if (peso <= 0 || altura <= 0) {
            resposta.innerHTML = "Por favor, insira valores válidos para peso e altura.";
            return;
        }

        // Calcula o IMC e a situação
        const imc_res = imc(peso, altura).toFixed(2);
        const situacao_res = situacao(imc_res);

        // Exibe o resultado
        resposta.innerHTML = `Seu IMC: <strong>${imc_res}</strong> - ${situacao_res}`;
    }
</script>
```

 - Aqui criamos uma função para executar o cálculo e exibir o resultado na tela.

 > Também usamos o `toFixed(2)` para arredondar o resultado para duas casas decimais.

---


## ✅ Resultado

O resultado desta aula pode ser encontrado na página de exemplos (Anexo-aula005)!
Espero que tenha gostado desta anotação, e lembre-se sempre de colocar em prática tudo o que estuda para evoluir e aprender cada vez mais.

---