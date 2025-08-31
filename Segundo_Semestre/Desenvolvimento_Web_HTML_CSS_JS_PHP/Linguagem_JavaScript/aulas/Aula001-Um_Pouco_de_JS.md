# Primeira aula sobre JavaScript

Como nessa aula teve diversos assuntos, essa aula acabou não tendo algo tão definido como as outras anteriores.

## O que é JavaScript?

De uma forma resumida, o JavaScript é uma linguagem de programação que é capaz de rodar tanto em navegadores, quanto em servidores através do node.js.

Ele serve para muita coisa, mas o uso dele no front-end é mais voltado para a interação com o usuário e a manipulação de elementos HTML. Como animações, utilidades, efeitos etc. 

Ela é muito usada também para criar conexõos com servidores via APIs para a utilização de dados.

Um exemplo muito bom de um site muito usado todos os dias por milhares de pessoas é o youtube, onde conecta seu site a sua conta e te manda diversos vídeos dentro da biblioteca da plataforma.

---

## Árvore DOM

A Árvore DOM (Document Object Model) representa a estrutura HTML como se fosse uma raiz de árvore, onde cada elemento é um ``Node (nó)``, e quanto mais conteúdo tiver mais ramificações vão existir, como podemos observar no exemplo abaixo feito por mim: 

<img src="../img/DOM_Tree_By_Me.png">

Nesse exemplo temos uma página simples, onde os Elementos são as tags com seus atributos e conteúdos.

---

### Para que serve?

---

- Além de mostrar o mapa interno que o navegador cria da página (elementos HTML como nós em hierarquia).

- Ela também permite que o JavaScript altere conteúdo/estilos dinamicamente.

- Garante interatividade (cliques, formulários etc.)

- E de forma bem resumida, ela é a ponte entre o HTML, CSS e JavaScript.

---

## Seletores

Seletores são usados para selecionar elementos HTML e manipular seus estilos, conteúdos etc.<br>
Existem três tipos de seletores, sendo eles:

- ``Tags do HTML`` &rarr; Onde usamos o nome da tag, como por exemplo: `p` para parágrafos.

- `Classes CSS` &rarr; Onde usamos o nome da classe atribuida aos elementos.

- `Identificadores` &rarr; Onde usamos o id atribuido ao elemento.

---

### Por exemplo:

```css
p { color: red;} /*Aqui usamos a tag <p>, assim o estilo vai ser aplicado a todas as tags <p>.*/

.negrito{ font-weight: bold;} /*Aqui todos as tags que tiverem a class="negrito" terão o estilo aplicado.*/

#principal{ color: green;} /*Aqui a tag com o id="principal" terá o estilo aplicado.*/
```

Isso nos permite selecionar expecificamente o elemento que queremos modificar, podendo ser eles todos, alguns ou apenas um.


### Outros exemplos:

```css
a:hover { color: red;} /*Aqui usamos a pseudo-classe :hover, que estiliza um elemento quando o cursor do mouse estiver sobre ele.*/

h1, h2, h3 {color: red;} /*Formatar diversas tags ao mesmo tempo*/

#c1 p a{color: red;} /*Formata uma tag <a> dentro de uma tag <p> dentro da tag com id="c1"*/

.dark:first-child{color: red;} /*Formata o primeiro filho de uma tag com a class="dark"*/

p::after{content: 'Obrigado!'} /*Formata algo após, mas dentro, de um elemento*/
```
---
