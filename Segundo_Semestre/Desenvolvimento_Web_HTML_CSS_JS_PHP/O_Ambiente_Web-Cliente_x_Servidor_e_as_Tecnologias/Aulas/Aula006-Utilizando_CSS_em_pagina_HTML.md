# 🎨 Utilizando CSS em página HTML

## ℹ️ Sobre

- CSS (Cascading Style Sheets) é uma linguagem de estilo utilizada para estilizar elementos HTML.
- Ela permite definir cores, tamanhos, fontes e outros aspectos visuais dos elementos da página.

## 🛠️ Uso

- O CSS pode ser aplicado de três formas diferentes no HTML:

    - **Inline:** Definindo o estilo diretamente na tag HTML.<br>
    *(É o menos recomendado, pois fica muito difícil de administrar e deixa o código mais poluído.)*
    ```html
    <p style="color: red;">Exemplo</p>
    ```

    - **Interno:** Definindo o estilo dentro da tag `<style>`.<br>
    *(Melhor que o método inline, mas também não é muito recomendado.)*
    ```html
    <style> p { color: red; } </style>
    ```

    - **Externo:** Definindo o estilo em um arquivo separado, com extensão `.css`.<br>
    *(É o mais utilizado e o mais recomendado, pois permite uma melhor organização dos códigos e dos arquivos.)*
    ```html
    <link rel="stylesheet" href="estilo.css">
    ```

## 📁 Exemplos

- O exemplo desta aula pode ser encontrado na pasta de exemplos (Anexo-aula006).
    - Lá estão três arquivos HTML: um com estilo inline, outro com estilo interno e o terceiro com estilo externo.
    - Assim, é possível visualizar o uso de cada um desses exemplos de forma mais clara em uma página HTML.
