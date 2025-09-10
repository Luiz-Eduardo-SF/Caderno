# Estruturas de repetição na prática

## Série de Fibonacci

O objetivo de hoje é desenvolver um site simples onde vamor receber um valor `x` e devolver a sequência de fibonacci de `x` elementos.

Para isso vamos usar mais uma vez o framework CSS Bootstrap, assim focamos somento no JavaScript e no HTML.

---

## Códigos

### HTML

---

```html
<body class="container">

    <div class="mt-5 border p-5 bg-light shadow rounded-5">

        <h1 class="text-center">Fibonacci Counter</h1>

        <hr>

        <label for="id_fibonacci" class="form-label">Digite um valor:</label>
        <input type="number" id="v1" class="form-control">

        <button onclick="calcular()" class="btn btn-primary mt-2 w-100">Calcular</button>

        <hr>

        <div class="alert alert-success" id="res">Resultado: </div>

    </div>

</body>
```

> Nesse exemplo o framework Bootstrap já está integrado.

---

### JavaScript Externo

---

```javascript
const fibonacci = (x) => { // Cria uma função fibonacci que recebe um valor
    let fm1 = 1, fm2 = 1, fm; // Declara 3 variáveis
    
    if (x == 0 || x == 1) { // Se x for 0 ou 1
        return 1; // Retorna 1
    } else { // Se x for diferente de 0 ou 1

        for (let i = 2; i <= x; i++) { // usamos um loop que vai se repetir enquanto i for menor ou igual ao x 
            fm = fm1 + fm2; // fm recebe fm1 + fm2
            fm1 = fm2; // fm1 recebe fm2
            fm2 = fm; // fm2 recebe fm
        
            // Desse modo os valores vão se alterando conforme a sequencia de fibonacci
        }
        return fm; // Retorna o valor de fm
    }
}
```

|f1|f2|fm|
|:-:|:-:|:-:|
|1|1|2|
|1|2|3|
|2|3|5|
|3|5|8|
