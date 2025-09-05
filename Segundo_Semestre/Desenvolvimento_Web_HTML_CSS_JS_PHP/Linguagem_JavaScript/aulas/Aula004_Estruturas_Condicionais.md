# 📝 Estruturas Condicionais

Estruturas condicionais são extremamente importantes em qualquer linguagem de programação, pois permitem a tomada de decisões a partir de certas condições.

## 🟢 Comando if - estrutura SE/ENTÃO

- Comandos são executados apenas se a condição for verdadeira.
- Para mais de uma instrução, é obrigatório delimitar o bloco com chaves; para instrução simples, as chaves são opcionais.

```js
let a = Number(prompt("Número: "));

if (a % 2 == 0){
    alert("O número é par");
    console.log(`Valor:${a}`);
}
```

> Nesse exemplo, um resultado só vai aparecer se o resto da divisão por 2 for igual a zero.

## 🔗 Operadores Relacionais

```js
const a = 10, b = 5;
let w;
```

|Instrução|Resultado|
|:--:|:--:|
|w = a > b;|true|
|w = a < b;|false|
|w = a == b;|false|
|w = a != b;|true|
|w = a >= b;|true|
|w = a <= b;|false|

> **OBS:** O sinal de `===` no JS só retorna true se for o mesmo objeto, não importando se o valor for o mesmo.

---

### 📚 Características Gerais

- Tem como entrada dois valores numéricos e como saída um valor booleano.
- Aceita variáveis e instruções aritméticas.

```js
let f = (x + 2) < Math.pow(x,3);
```

---

## ⚙️ Operadores Lógicos

|A|B|A && B|A // B|!A|
|:--:|:--:|:--:|:--:|:--:|
|false|false|false|false|true|
|false|true|false|true|true|
|true|false|false|true|false|
|true|true|true|true|false|

> **OBS:** Os operadores lógicos sempre retornam um booleano.

---

### 📚 Características Gerais

- Tem como entrada dois valores booleanos e como saída um valor booleano.
- Permite combinar operações relacionais.
- Curto-circuito minimiza comparações.

```js
let f = (x <= 2) && (y != 3); // Se o primeiro valor for falso, você já sabe que o resultado de f também será falso
```

---

## 🖥️ Exemplo com estrutura IF

```html
<html>
    <body>
        <h2>Estrutura IF</h2>
        <p>Apresenta "Bom dia" se for menos que 12:00</p>
        <p id="demo">Já passou de meio-dia</p>

        <script>
            // new Date().getHours() retorna a hora atual

            if (new Date().getHours() < 12) { // Só executa o comando se a condição for verdadeira
                document.getElementById("demo").innerHTML = "Bom dia!!"; // Modifica o texto do parágrafo
            }
        </script>
    </body>
</html>
```

---

## 🔄 Comando if else = SE/ENTÃO/SE NÃO

### Execução condicional com negativa

- Comandos diferentes são executados para cada resultado da condição (verdadeira ou falsa).
- Se a condição for verdadeira, executa o comando 1; se for falsa, executa o comando 2.

```js
let a = Number(prompt("Número: "));

if (a % 2 == 0){ // Se a condição for verdadeira, executa o comando 1
    alert("O número é par"); // Comando 1
} else { // Se a condição for falsa, executa o comando 2
    alert("O número é ímpar"); // Comando 2
}
```

## 🧩 Estrutura if else aninhada

### Modo Simples

```html
<html><body>
    <h2>Estrutura if else</h2>
    <p>Modifica o cumprimento de acordo com a hora do dia</p>
    <p id="demo">Que horas são?</p>

    <script>
        let painel = document.getElementById("demo");
        let hora = new Date().getHours(); // Pega a hora do computador

        if (hora < 12){ // Se a condição for verdadeira (comando 1)
            painel.innerHTML = `Bom Dia!!` // comando 1
        } else if (hora < 18){ // Se a primeira condição for falsa mas a segunda for verdadeira (comando 2)
            painel.innerHTML = `Boa Tarde!!`  // comando 2
        } else { // Se nenhuma das condições for verdadeira (comando 3)
            painel.innerHTML = `Boa Noite!!` // comando 3
        }
    </script>
</body></html>
```

### Exemplo de Operador de Decisão

---

```html
<html><body>
    <h2>Estrutura if else</h2>
    <p>Modifica o cumprimento de acordo com a hora do dia</p>
    <p id="demo">Que horas são?</p>

    <script>
        let painel = document.getElementById("demo");
        let hora = new Date().getHours(); // Pega a hora do computador

        // Mesma ideia do anterior
        // Mas usando o operador de decisão 
        painel.innerHTML = (hora < 12)? "Bom Dia!!" : (hora < 18)? "Boa Tarde!!": "Boa Noite!!"
        
    </script>
</body></html>
```

## 🗂️ Comando Switch

- Comandos diferentes são executados para cada valor da expressão.

```js
let frase = "", b = Number(prompt("Valor: ")); //  Declara duas variáveis 

switch (b % 2) { // Se o resto da divisão por 2 for

    case 0: // se for igual a zero
        frase = "É Par"; // Fala que o número é par
        break; // Break para sair do switch

    case 1: // se for igual a 1
        frase = "É Ímpar"; // Fala que o número é ímpar
        break; // Sai do switch
}
console.log(frase);
```

---

## 🏆 Conclusão 

 As estruturas condicionais são fundamentais para o desenvolvimento de algoritmos dinâmicos e inteligentes. Elas permitem que o código tome decisões com base em diferentes situações, tornando os programas mais flexíveis e interativos. Dominar essas estruturas é essencial para qualquer programador que deseja criar soluções eficientes e funcionais.

---