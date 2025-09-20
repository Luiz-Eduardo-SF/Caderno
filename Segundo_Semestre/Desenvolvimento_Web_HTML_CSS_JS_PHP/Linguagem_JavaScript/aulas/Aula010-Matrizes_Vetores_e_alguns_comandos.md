# 🧮 Matrizes, Vetores e Alguns Comandos

## 🗂️ Matrizes

Resumidamente, matrizes são vetores que armazenam outros vetores com diversas informações. Quando precisamos acessar algum valor dessa matriz, utilizamos dois índices:

- O primeiro índice retorna o vetor na posição indicada.
- O segundo índice retorna o valor dentro do vetor na posição indicada.

---

#### 💡 Por exemplo:

---

```javascript
const matriz = [[1,2], [3,4], [5,6]];
console.log(matriz); // [[1,2], [3,4], [5,6]]
console.log(matriz[0]); // [1,2]
console.log(matriz[0][0]); // 1
```

---

## 🧹 Comando flat()

O comando `flat()` faz com que todas as informações de uma matriz se tornem um vetor único. Por exemplo:

```javascript
const matriz = [[1,2], [3,4], [5,6]];
console.log(matriz); // [[1,2], [3,4], [5,6]]

const vetor = matriz.flat();
console.log(vetor); // [1,2,3,4,5,6]  
```

> Nesse exemplo, conseguimos ver que o `flat()` faz com que a matriz se torne um vetor simples, juntando as informações de todos os vetores da matriz.

---

## ➕ Inclusão de Elementos

No JavaScript, podemos incluir elementos em um vetor de algumas formas diferentes. Dois exemplos são:

- **push()**: O comando `push()` adiciona um elemento ao final do vetor.
- **unshift()**: O comando `unshift()` adiciona um elemento ao início do vetor.

```javascript
const vetor = [1,2,3];
console.log(vetor); // [1,2,3]

vetor.push(4);
console.log(vetor); // [1,2,3,4]

vetor.unshift(0);
console.log(vetor); // [0,1,2,3,4]  
```

---

## ➖ Remoção de Elementos

Assim como nos comandos de inclusão, temos dois comandos para remoção de elementos:

- **pop()**: O comando `pop()` remove o último elemento do vetor.
- **shift()**: O comando `shift()` remove o primeiro elemento do vetor.

```javascript
const vetor = [0,1,2,3,4];
console.log(vetor); // [0,1,2,3,4]

vetor.pop();
console.log(vetor); // [0,1,2,3]

vetor.shift();
console.log(vetor); // [1,2,3]  
```

---

## 📝 Conclusão

Para que esta anotação não fique muito extensa, separei o conteúdo em duas partes. Na próxima aula, veremos sobre **junção de vetores**, **cópia com slice** e **inclusão e remoção com splice**. Até a próxima! E lembre-se de sempre colocar o que aprendeu em prática para memorizar melhor e treinar os conceitos dos comandos!
