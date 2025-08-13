# 🏷️ Algumas Tags HTML

## ℹ️ Sobre

- Na linguagem HTML, temos diversas tags com diversas finalidades, como por exemplo:

    - cabeçalhos.
    - parágrafos.
    - links.
    - listas.
    - tabelas.
    - formulários. 
    - e muito mais!

- Cada tag tem seus propósitos específicos, próprios atributos e comportamento.

## 🧩 Composição de uma tag

- Normalmente as tags são compostas por um nome e atributos, por exemplo:

```html
<img src="imagem.png" alt="Imagem">
```

- Esse exemplo é de uma tag que adiciona imagens aos projetos, e como podemos ver, ela é composta por:
    - `img`: nome da tag.
    - `src=""`: atributo que indica o caminho da imagem.
    - `alt=""`: atributo que indica o texto alternativo da imagem. (Caso a imagem por algum motivo não seja carregada, esse texto aparece ao invés dela).

## 🏷️ Atributos mais importantes

- Há uma variedade muito grande de atributos, mas temos que destacar dois que são de extrema importância no desenvolvimento web:

    - **ID : `id=""` &rarr; utilizado para definir um identificador, que *DEVE* ser único, para uma tag.**

        - Ele ajuda muito na hora de usarmos o JavaScript para selecionar elementos específicos com o `document.getElementById()`.

    - **Class : `class=""` &rarr; Utilizado para definir uma classe à qual uma ou mais tags pertencem.**

        - Ele ajuda muito na hora de aplicarmos as folhas de estilos em uma ou mais tags específicas.

## 🏷️ Mais algumas tags HTML

| Tags | Funções |
| :--: | :--: |
| **`<article>`** | Inclui um bloco de conteúdo que deve ser usado quando se deseja inserir um artigo, como um post de um blog, por exemplo. |
| **`<section>`** | Define uma seção no documento. É normalmente utilizada para agrupar seções. Por exemplo: uma `<section>` poderia conter vários `<article>`. |
| **`<h1>` até `<h6>`** | É usado para títulos, e a numeração indica uma hierarquia de títulos. O `<h1>` representa o título principal, e o `<h6>` representa o título de menor hierarquia. |
| **`<p>`** | Define um parágrafo. |
| **`<br>`** | Quebra uma linha. |
| **`<pre>`** | Define a inserção de um texto pré-formatado. |
| **`<hr>`** | Define uma linha horizontal. |
| **`<a>`** | Define um link. |
| **`<img>`** | Define uma imagem. |
| **`<div>`** | Agrupamento de tags (sem semântica). |
| **`<span>`** | Apresenta semelhança com `<div>`. Entretanto, enquanto a `<div>` é um elemento não semântico em bloco (quando usada, quebra o conteúdo em uma seção), a `<span>` é embutida (não quebra o conteúdo, apenas o agrupa). |

---

## ✅ Conclusão

- Nesta aula pudemos entender um pouco mais sobre algumas tags e como elas funcionam. O conteúdo não está tão aprofundado, mas nas próximas aulas com certeza veremos mais exemplos que fazem uso dessas tags. Lembre-se, não esqueça de praticar!
