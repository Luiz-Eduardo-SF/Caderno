# 📝 Sintaxe e Conceitos

O JavaScript foi criado originalmente para o client side (navegadores), mas atualmente funciona tanto no client side quanto no server side (por exemplo, com Node.js).

## 🔒 Definição de Constantes e Variáveis

- **Tipagem fraca**: O tipo da variável pode mudar conforme o valor atribuído.
- O tipo é definido pela atribuição corrente à variável.
- Uma simples atribuição já define a variável.
- Antigamente, usava-se `var` para declarar variáveis. Hoje, recomenda-se:
    - `let` para valores que podem ser alterados.
    - `const` para valores fixos.

```js
let a = 10; // Tipo Number (inteiro)
let frase = "Olá mundo!!"; // Tipo String
let resposta = true; // Tipo Boolean
let nulo = null; // Tipo Null
let vazio = undefined; // Tipo Undefined
let objeto = {}; // Tipo Object

const v1 = [1, 2, 3]; // Tipo Array
const array = []; // Tipo Array
const funcao1 = function() {}; // Função tradicional
const funcao2 = () => {}; // Arrow function
```

## ➕ Uso de Operadores

- **Aritméticos**: `+`, `-`, `*`, `/`, `%`
- **Lógicos e Binários**: `&&`, `||`, `!`, `^`, `&`, `|`
- **Relacionais**: `==`, `!=`, `>`, `<`, `>=`, `<=`
- **Concatenação**: `+`, `${}` (template strings)
- **Decisão**: `?` (operador ternário)
- **Atribuição**: `=`, `+=`, `-=`, `*=`, `/=`, etc.

```js
let b1 = (z > c) && (c <= d); // Booleano
let texto = (z >= 5) ? "Maior ou igual a 5" : "Menor que 5"; // String
let k = 5 ^ 2; // Operador bitwise XOR

let x = 1 + 2;
x *= 3; // x = 9
// Equivalente a:
x = x * 3; // x = 9

// Três formas de concatenar informações em uma string:
let nome = "Luiz";
let frase1 = "Olá mundo!! Meu nome é " + nome;
let frase2 = 'Olá mundo!! Meu nome é ' + nome;
let frase3 = `Olá mundo!! Meu nome é ${nome}`; // Recomendada por ser mais legível
```

## 🧩 Tipos de Dados

- **Number**: Números inteiros e decimais (`let idade = 25;`)
- **String**: Textos (`let nome = "Luiz";`)
- **Boolean**: Verdadeiro ou falso (`let ativo = true;`)
- **Null**: Ausência intencional de valor (`let vazio = null;`)
- **Undefined**: Valor não definido (`let indefinido;`)
- **Object**: Estruturas complexas (`let pessoa = { nome: "Luiz", idade: 25 };`)
- **Array**: Listas de elementos (`let lista = [1, 2, 3];`)
- **Function**: Funções são objetos especiais

## 🏗️ Classes e Objetos

O JavaScript suporta programação orientada a objetos, permitindo a criação de classes e objetos para organizar e reutilizar código.

### O que são Classes e Objetos?

- **Classe**: Um modelo (template) que define propriedades e métodos que os objetos criados a partir dela terão.
- **Objeto**: Uma instância de uma classe, com atributos e comportamentos definidos pela classe.

```js
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
}

const pessoa1 = new Pessoa("Luiz", 25);
console.log(pessoa1.apresentar()); // Olá, meu nome é Luiz e tenho 25 anos.
```

- O método `constructor` inicializa os atributos do objeto.
- Métodos podem ser definidos dentro da classe para realizar ações.

## 📚 Utilização de Vetores (Arrays)

Arrays permitem armazenar e manipular coleções de elementos de qualquer tipo.

- Baseados na classe `Array`
- Métodos úteis:
    - `sort()`: Ordena os elementos
    - `forEach()`: Itera sobre cada elemento
    - `map()`: Cria um novo array com base em uma função aplicada a cada elemento
    - `reduce()`: Reduz o array a um único valor

```js
let valores = [1, 9, 4, 6, 3, 8, 5];
valores.sort(); // Ordena os elementos

console.log(valores); // [1, 3, 4, 5, 6, 8, 9]
console.log(`Valor do primeiro elemento: ${valores[0]}`); // 1

// Exemplo de uso de map e reduce:
let dobrados = valores.map(v => v * 2); // [2, 6, 8, 10, 12, 16, 18]
let soma = valores.reduce((acc, v) => acc + v, 0); // Soma todos os valores
```

## ✅ Conclusão

Nesta aula, vimos:

- Sintaxe e Conceitos
- Tipos de Dados
- Operadores
- Classes e Objetos
- Utilização de Vetores (Arrays)

Esses são os fundamentos essenciais para começar a programar em JavaScript. Pratique bastante e bons estudos! 🚀

---