# Aplicando JavaScript no código HTML 

## Sobre JavaScript 

- **JavaScript**: Uma linguagem de programação de alto nível, interpretada e dinâmica, usada para criar interatividade e dinamicidade em websites. Trabalhando junto do HTML e CSS.

## Aplicações

Assim como CSS temos os mesmos tipos de aplicações

- **Inline:** Onde o código vai junto da tag HTML
    ```html
    <button onclick="alert('Hello World!')">Click</button>
    ```

- **External:** Onde o código vai em um arquivo externo
    ```html
    <script src="script.js"></script>
    ```
    
- **Interno:** Onde o código vai dentro da tag `<script>` no HTML
    ```html
    <script>
        alert('Hello World!')
    </script>
    ```

---

## Exemplos

Como de costume, eu fiz alguns exemplos, onde pode encontrar na pasta de exemplos no anexo dessa aula. Separei em 3 arquivos, pois eu queria mostrar o uso de cada uma das aplicações.

É um exemplo simples de uma lâmpada que "apaga" e "acende" ao clicar nos botões.<br>
Todos os sites são bem parecidos, mas o modo que o código foi escrito é diferente.