# 🖋️ Utilizando Web Fonts

## ℹ️ Sobre

As Web Fonts são fontes de texto que podem ser usadas em uma página web sem precisar ser instaladas no computador do usuário. Um exemplo é o Google Fonts, que vamos utilizar hoje. Também veremos alguns comandos de estilização de fontes.

## 🔎 Google Fonts

No Google Fonts, há diversos tipos de fontes disponíveis para uso, e podemos utilizá-las em nossos projetos de forma simples.

- [Google Fonts](https://fonts.google.com/)

## 🛠️ Como usar as fontes do Google Fonts no seu projeto CSS?

1. Na página do Google Fonts, pesquise pelas fontes que mais lhe agradam e selecione-as.
2. Após selecionar as fontes, clique em **Get Font**.
3. Clique em **<> Get Embed Code**.
4. Selecione a opção **@import**.
5. Copie o código entre as tags `<style>`.
6. Cole na primeira linha do seu arquivo CSS.

---

A partir desse momento, a fonte já estará disponível para uso no seu projeto. Para utilizá-la, basta usar o comando `font-family`, indicando o nome da fonte entre aspas simples.

---

#### 💡 Exemplo:
---
```css
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

body {
    font-family: 'Roboto', sans-serif;
}
```
---

## 📝 Comandos de Estilização de Fontes

Antes de falar sobre os comandos de estilização de fontes, vamos explicar rapidamente algumas medidas que podem ser usadas em projetos CSS, principalmente para definir o tamanho das fontes.

---

### 📏 Medidas Relativas

Medidas relativas são aquelas baseadas na medida do elemento pai, podendo variar de tamanho.

- `em` — medida relativa ao "M" maiúsculo da fonte (normalmente 16px)
- `ex` — medida relativa ao "x" da fonte
- `rem` — medida relativa ao "M" maiúsculo da fonte configurada no root
- `vh` — 1% da altura da tela
- `vw` — 1% da largura da tela
- `%` — porcentagem do elemento pai

### 📐 Medidas Absolutas

Medidas absolutas são fixas, independentemente do elemento pai.

- `px` — pixel
- `cm` — centímetro
- `mm` — milímetro
- `in` — polegada
- `pt` — ponto (não recomendado para telas)
- `pc` — paica (assim como ponto, não recomendado para telas)

Para saber mais, recomendo o vídeo do YouTube:  
[Tamanho de fonte e suas medidas - @Curso em Vídeo HTML5 e CSS3](https://www.youtube.com/watch?v=NGfPXJGiNH8&list=PLHz_AreHm4dlUpEXkY1AyVLQGcpSgVF8s&index=12)

---

### 🎨 Comandos de Estilização

Normalmente, ao editar uma fonte usando CSS, usamos os comandos:

- `font-family` — Define as fontes que serão usadas
- `font-size` — Define o tamanho da fonte
- `font-weight` — Define o peso da fonte
    - `lighter` — Fonte mais fina
    - `normal` — Fonte normal
    - `bold` — Negrito
    - `bolder` — Mais forte que o negrito normal
- `font-style` — Define o estilo da fonte
    - `normal` — Fonte normal
    - `italic` — Itálico

---

#### 💡 Exemplo:
---
```css
font-family: 'Poppins', sans-serif; /* Se a fonte Poppins não for encontrada, será usada a fonte sans-serif */
font-weight: bold; /* Define a fonte para negrito */
font-size: 1em; /* Define o tamanho da fonte para 1em */
font-style: italic; /* Define a fonte para itálico */
```
---

Para facilitar, existe um <abbr title="Um **shorthand** é uma forma abreviada de escrever diversos comandos em um só">shorthand</abbr> para esses comandos:

- `font: [font-style] [font-weight] [font-size] [font-family]`

Respeitando essa ordem, é possível definir os comandos de estilização de fonte de forma mais simples.

```css
font: italic bold 1em 'Poppins', sans-serif; /* Mesmo comando do exemplo acima, mas usando shorthand */
```
> Lembre-se: para usar estilos como itálico ou negrito, a fonte precisa oferecer esses atributos.

---

## ✅ Conclusão

Aprendemos como adicionar fontes do Google Fonts ao nosso projeto e como personalizá-las usando shorthand no CSS.
