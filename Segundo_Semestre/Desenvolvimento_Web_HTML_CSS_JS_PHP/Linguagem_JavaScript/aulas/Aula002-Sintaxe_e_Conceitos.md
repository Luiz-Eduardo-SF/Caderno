# Sintaxe e Conceitos

O Java Script foi cirado para client side, mas hoje em dia ele funciona tanto no Client side quanto no Servers side

## Definição de constantes e variáveis

- ***Tipagem fraca*** // O tipo da variável pode mudar dependendo do tipo do valor
    - O tipo é definido pela atribuição corrente para variável

    - Uma somples atribuição define a variável

    - A palavra *var* era utilizada para definir variável formalmente.
        
        - Hoje usamos ``let`` ,para valores que podem ser alterados, e `const`, para valores fixos.


```js
let a = 10; // Tipo inteiro
let frase = "Olá mundo!!" // Tipo string
let resposta = true; // Tipo boolean
let nulo = null; // Tipo nulo
let vazio = undefined; // Tipo indefinido
let objeto = {}; // Tipo objeto

const v1 = newArray(1,2,3); // Tipo array
const array = []; // Tipo array

``` 