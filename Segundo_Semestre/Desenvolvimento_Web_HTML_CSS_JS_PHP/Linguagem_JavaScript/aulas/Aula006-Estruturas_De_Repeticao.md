# 🔁 Estruturas de Repetição

## ❓ O que são?

As estruturas de repetição são usadas para executar um conjunto de instruções várias vezes, tornando o código mais organizado e eficiente. Elas são úteis em diversas tarefas, mas hoje vamos focar em como funcionam.

## ⚙️ Como funcionam?

As estruturas de repetição, diferentemente das estruturas condicionais como if/else, executam comandos repetidamente enquanto a condição for verdadeira, e param quando a condição se torna falsa.

Essa explicação se aplica à maioria das estruturas de repetição, como veremos a seguir.

---

<img src="../img/Aula006-Estrutura_Comum.png" style="display: flex; justify-self: center; margin: 10px;">

---

## ⏳ Comando While - Estrutura Enquanto / Faça

A estrutura `while` segue exatamente a explicação anterior: o código dentro dela será executado várias vezes enquanto a condição for verdadeira.

---

```js
let x = 1; // Declarando a variável
while (x <= 10) { // Checando se x é menor ou igual a 10
    console.log(x); // Imprimindo o valor de x
    x++; // Incrementando o valor de x (x = x + 1)
}
```

---

Esse é um exemplo simples de como criar um loop em um código.

> É importante que dentro do while haja um incremento que altere o valor da condição, para que ela se torne falsa em algum momento. Caso contrário, o loop será infinito e poderá travar o navegador.

---

## 🔄 Comando Do While - Estrutura Faça / Enquanto

O `do while` é diferente do `while`, pois verifica a condição de repetição somente após executar o código.

Ou seja, ele executa o bloco pelo menos uma vez, mesmo que a condição seja falsa, e só depois verifica se deve repetir.

---

<img src="../img/Aula006-Estrutura_DoWhile.png" style="display: flex; justify-self: center; margin: 10px;">

---

> Neste exemplo, a variável já começa fora da condição do while propositalmente. Assim, ao rodar o código, você verá que ele executa pelo menos uma vez.

```javascript
let a = 20; // Definindo uma variável

do {
    console.log(a); // Imprimindo o valor de a
    a++; // Incrementando o valor de a (a = a + 1)
} while (a <= 10); // Checando se a é menor ou igual a 10
```

---

## 📝 Comandos For

### 📊 Repetição para uma faixa especificada

Os comandos são executados para cada valor definido na estrutura de controle.

A estrutura é dividida em três partes: **inicialização**, **condição** e **incremento**.

```javascript
for (let x = 1; x <= 10; x++) {
    console.log(x);
}
```

> No `for`, a declaração da variável e o incremento são feitos dentro da própria estrutura, não sendo necessário criar a variável antes ou colocar o incremento dentro do bloco repetido.

---

### 🗂️ Comando For In

---

#### 🧑‍💻 Iteração em Objeto

---

O comando `for in` percorre os elementos de um objeto, retornando o nome das chaves.

```javascript
const person = {fname: "Jake", lname: "Smith", age: 35}; // Criando um objeto

for (let x in person) { // x recebe o nome da chave (fname, lname, age)
    console.log(person[x]); // Imprime o valor correspondente à chave
}
```

---

#### 🔢 Iteração em Vetor (posicional)

---

O comando `for in` também pode ser usado para percorrer os índices de um vetor.

```javascript
const cars = ["JEEP", "FIAT", "FORD"]; // Criando um vetor

for (let x in cars) { // x recebe o índice do vetor (0, 1, 2)
    console.log(cars[x]); // Imprime o valor correspondente ao índice
}
```

---

### 📦 Comando For Of

O comando `for of` percorre os elementos de um vetor, onde `x` recebe o **valor** de cada elemento.

```javascript
const cars = ["JEEP", "FIAT", "FORD"]; // Criando um vetor

for (let x of cars) { // x recebe o valor do vetor (JEEP, FIAT, FORD)
    console.log(x); // Imprime o valor armazenado em x
}
```

---

## ✅ Conclusão

Nesta aula, vimos como funcionam os principais tipos de estruturas de repetição: `while`, `do while` e `for`. Na próxima aula, vamos praticar mais e aprender como usar essas estruturas para resolver problemas reais.

Bons estudos! Sempre coloque em prática o que aprendeu!

---

