# 📍 Posições

## ℹ️ Sobre

- Hoje vamos falar um pouco sobre um comando muito útil no CSS: `position`.<br>
Esse comando pode ser usado de diversas maneiras para personalizar e posicionar elementos no seu projeto.

## 📝 Explicando cada uma das posições

- `position: static;` &rarr; É a posição padrão de um elemento, ou seja, por se tratar de uma posição padrão, ela nem precisa ser declarada.

- `position: absolute;` &rarr; Posiciona o elemento em relação ao elemento pai posicionado ou, na ausência deste, em relação à tag `<body>`.

- `position: relative;` &rarr; É uma posição definida a partir da sua posição natural (static).

- `position: fixed;` &rarr; É uma posição relativa ao viewport (tela), ou seja, o elemento fica fixo em qualquer lugar da tela.

- `position: sticky;` &rarr; É uma posição que alterna entre `position: relative;` e `position: fixed;`, permanecendo no lugar definido até que o scroll ultrapasse esse ponto, quando então fica fixa na tela.

## 🛠️ Alguns outros comandos

Junto dos comandos acima, podemos utilizar os comandos `top`, `left`, `right`, `bottom` para alterar a posição de um elemento.

- Esses comandos funcionam da seguinte forma: quando chamados, pedem um valor que determina a distância em relação à orientação especificada.

    ---

    - `top: 0;` &rarr; Posiciona o elemento no topo da tela.
    - `top: 50px;` &rarr; Posiciona o elemento a 50px de distância do topo da tela.

    ---

    ```css
    position: absolute;
    top: 0; /* O objeto fica no topo da tela */
    left: 50px; /* O objeto fica a 50px de distância do lado esquerdo da tela */
    ```

---

## 💡 Exemplos

- Esta aula tem um arquivo de exemplo. Se você quiser dar uma olhada, basta ir à pasta de exemplos e acessar o anexo desta aula.

## ✅ Conclusão

- Nesta aula aprendemos muito sobre um dos conceitos mais importantes do CSS, a posição, e como utilizá-lo para personalizar e posicionar elementos no seu projeto.

> Se você quiser saber mais sobre esses conceitos, recomendo o site do [W3Schools](https://www.w3schools.com/css/css_positioning.asp).<br> Eles abordam o mesmo conteúdo que eu expliquei e têm um quiz para testar seus conhecimentos.

---