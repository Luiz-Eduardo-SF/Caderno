# 🧮 Composição e Criação de Vetores

## ❓ O que são vetores?

- Vetores e arrays são a mesma coisa: variáveis que armazenam diversos dados, podendo ser de tipos diferentes ou iguais.
- No JavaScript, eles funcionam como listas.
- Podem ser definidos com colchetes ou com base na classe Array.

```javascript
let nomes1 = ["João", "Maria", "Joaquim"];
let nomes2 = new Array("João", "Maria", "Joaquim");

let vazio1 = [];
let vazio2 = new Array();
```

---

## 🔎 Acesso

- Os elementos são acessados através do índice.
- O primeiro índice tem o valor 0.

```javascript
console.log(nomes1[0]); // João
console.log(nomes1[1]); // Maria
console.log(nomes1[2]); // Joaquim
```

---

## 🔗 Geração de texto com join()

O método `join()` serve para unir os elementos de um array em uma string, separando-os por um delimitador. Veja o exemplo:

```html
<script>
    const valores = [1, 2, 3, 4, 5];
    const saida = valores.join(" - "); // 1 - 2 - 3 - 4 - 5
    console.log(saida);
</script>
```

---

## 🛠️ Ordenação, Mapeamento e Redução

```javascript
const valores = [1, 6, 9, 8];

valores.sort(); // Ordena os elementos do array em ordem crescente > [1, 6, 8, 9]

valores.forEach((valor) => console.log(valor)); // Executa uma função para cada elemento do array > 1, 6, 8, 9

valores.map((e) => e * 2); // [2, 12, 18, 16] // Aplica uma função a cada elemento > 2, 12, 18, 16

valores.reduce((a, b) => a + b); // Soma todos os elementos do array
```

---

## ✅ Conclusão

Nesta aula, aprendemos mais sobre vetores e alguns comandos para modificá-los. Em breve, veremos outros comandos para adicionar e remover valores, entre outras funcionalidades. Estude bastante esses conceitos, pois mais novidades estão por vir!

---
