# 💡 Aplicando JavaScript no código HTML

## 📜 Sobre JavaScript

- **JavaScript**: Uma linguagem de programação de alto nível, interpretada e dinâmica, usada para criar interatividade e dinamismo em websites. Funciona em conjunto com HTML e CSS.

## 🛠️ Aplicações

Assim como o CSS, o JavaScript pode ser aplicado de diferentes formas:

- **Inline:** O código é inserido diretamente na tag HTML.
    ```html
    <button onclick="alert('Hello World!')">Click</button>
    ```

- **Externo:** O código fica em um arquivo separado.
    ```html
    <script src="script.js"></script>
    ```

- **Interno:** O código é colocado dentro da tag `<script>` no próprio HTML.
    ```html
    <script>
        alert('Hello World!')
    </script>
    ```

---

## 🧩 Exemplos

Como de costume, preparei alguns exemplos que estão disponíveis na pasta de exemplos anexada a esta aula. Separei em 3 arquivos para mostrar o uso de cada forma de aplicação.

O exemplo é simples: uma lâmpada que "apaga" e "acende" ao clicar nos botões.<br>
Todos os sites são bem parecidos, mas a maneira como o código foi escrito é diferente.