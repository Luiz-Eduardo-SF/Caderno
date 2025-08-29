# 🧩 Usando o Framework Bootstrap para criar Grids em CSS

## ℹ️ Sobre

Nesta aula, você vai aprender como integrar o framework [Bootstrap](https://getbootstrap.com/) ao seu projeto CSS e criar grids utilizando seus recursos. O professor focou em exemplos práticos, então preparei uma versão mais detalhada para facilitar o entendimento.

## 🔗 Como integrar o Bootstrap

Para adicionar o Bootstrap ao seu projeto, utilize a tag `<link>` no seu arquivo HTML, assim como faria com um CSS externo. O link oficial pode ser encontrado [aqui](https://getbootstrap.com/docs/5.2/getting-started/introduction/).

No site, você verá exemplos de como integrar o Bootstrap. Basta copiar e colar a tag `<link>` no `<head>` do seu HTML.

> *Obs.: Não utilizei a parte do script, apenas a tag `<link>`.*

---

## 🧱 Exemplos de Grids com Bootstrap

Os exemplos de grids estão disponíveis na pasta de anexos desta aula.

Mostrei dois métodos para criar grids com Bootstrap: usando a classe `container` e a classe `container-fluid`, para destacar suas diferenças.

- No primeiro exemplo, utilizei a tag `div` com a classe `container` para organizar a grid.
- No segundo exemplo, usei a classe `container-fluid` para mostrar como ela ocupa toda a largura da tela.
- O CSS para estilização foi incluído no arquivo HTML, dentro da tag `<style>`, destacando apenas as alterações feitas.
- As grids foram criadas sem a tag `table`, utilizando as classes `row` e `col` do Bootstrap para organizar os elementos em linhas e colunas.

---

### 📝 Exemplo 1

---

```html
<!-- Grid 1 -->
<div class="grid1">
    <h1>Grid 1</h1>
    <div class="container border">
        <!-- Primeira linha do Grid 1 -->
        <div class="row border">
            <h2>Container 1</h2>
        </div>

        <!-- Segunda linha do Grid 1 -->
        <div class="row border">
            <div class="col border">
                <p>Coluna 1</p>
            </div>
            <div class="col border">
                <p>Coluna 2</p>
            </div>
        </div>

        <!-- Terceira linha do Grid 1 -->
        <div class="row border">
            <div class="col border">
                <p>Coluna 1</p>
            </div>
            <div class="col border">
                <p>Coluna 2</p>
            </div>
            <div class="col border">
                <p>Coluna 3</p>
            </div>
        </div>
    </div>
</div>
```
---

### 📝 Exemplo 2

---

```html
<!-- Grid 2 -->
<div class="grid2">
    <h1>Grid 2</h1>
    <div class="container-fluid border">
        <!-- Primeira linha do Grid 2 -->
        <div class="row border">
            <h2>Container 2</h2>
        </div>

        <!-- Segunda linha do Grid 2 -->
        <div class="row border">
            <div class="col-6 border">
                <p>Coluna 1</p>
            </div>
            <div class="col-3 border">
                <p>Coluna 2</p>
            </div>
            <div class="col-3 border">
                <p>Coluna 3</p>
            </div>
        </div>
        
        <!-- Terceira linha do Grid 2 -->
        <div class="row border">
            <div class="col-2 border">
                <p>Coluna 1</p>
            </div>
            <div class="col-5 border">
                <p>Coluna 2</p>
            </div>
            <div class="col-5 border">
                <p>Coluna 3</p>
            </div>
        </div>
    </div>
</div>
```

---

## 🏷️ Explicação das Classes

Veja como as principais classes funcionam:

- `container` / `container-fluid`: organizam a grid, sendo que `container` tem largura fixa e `container-fluid` ocupa toda a largura da tela.
- `row`: cria uma linha na grid.
- `col`, `col-6`, `col-3`, etc.: criam colunas e definem sua largura. O Bootstrap divide a linha em 12 partes; por exemplo, `col-6` ocupa metade da linha.
- `border`: adiciona borda ao elemento.

Se você não especificar o tamanho da coluna (por exemplo, apenas `col`), o Bootstrap distribui o espaço igualmente entre as colunas da linha.

---

## ✅ Conclusão

Espero que estas anotações tenham ajudado a entender como criar grids com Bootstrap. Pratique bastante para fixar o conteúdo!

---

> Para se aprofundar, consulte a documentação oficial do Bootstrap: [Grid Layout](https://getbootstrap.com/docs/5.2/layout/grid/)

---
