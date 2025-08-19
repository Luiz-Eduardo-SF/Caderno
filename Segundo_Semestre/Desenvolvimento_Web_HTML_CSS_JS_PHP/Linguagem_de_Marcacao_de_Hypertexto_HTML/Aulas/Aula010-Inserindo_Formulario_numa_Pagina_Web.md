# 📝 Inserindo um formulário em uma página Web

Um formulário é uma forma simples de interagir com o usuário. Hoje vamos fazer um mini projeto em HTML que permitirá explorar um pouco mais sobre formulários.

> Por ser algo muito importante, recomendo que vocês criem um arquivo .html para praticar!

## 🛠️ Construção do formulário

Antes de qualquer coisa, devemos sempre planejar e pensar bem no formulário que vamos construir.

Neste formulário teremos:

- Nome
- E-mail
- Telefone de contato
- Calendário (Data de nascimento)
- Inserção de texto livre
- Botão de envio

Com essas características em mente, vamos colocar em prática!

## 🏗️ Construção do formulário

```html
<form action="/pagina-processa-dados-do-form" method="post">
    <fieldset>
        <legend>Formulário-Aula010</legend>
        
        <label for="nome">Nome:</label>
        <input type="text" id="nome" minlength="3" placeholder="Joaquim Silva" required>
        <br>

        <label for="email">Email:</label>
        <input type="email" id="email" placeholder="UserEmail@example.com" pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required>
        <br>

        <label for="telefone">Telefone:</label>
        <input type="number" id="telefone" placeholder="(98) 76543-2100" pattern="^\(\d{2}\) \d{4,5}-\d{4}$" required>
        <br>

        <label for="data_nascimento">Data de Nascimento:</label>
        <input type="date" id="data_nascimento" required>
        <br>

        <label for="mensagem">Mensagem:</label>
        <textarea id="mensagem" cols="30" rows="10" placeholder="Digite sua mensagem"></textarea>
        <br>

        <button type="submit">Enviar</button>
    </fieldset>
</form>
```

> Neste exemplo, criamos um formulário que contém as características requisitadas anteriormente e adicionamos alguns parâmetros para evitar problemas no envio das informações.

## ⚙️ Funções do formulário

|Parâmetro|Função|
|:--:|:--:|
|`action`|Define a URL para onde os dados do formulário serão enviados|
|`method`|Define o método HTTP utilizado para enviar os dados do formulário|
|`required`|Define que um campo deve ser preenchido|
|`minlength`|Define o comprimento mínimo de um campo|
|`pattern`|Define um padrão para um campo|
|`placeholder`|Define um texto de exemplo para um campo|
|`rows`|Define o número de linhas de um campo de texto|
|`cols`|Define o número de colunas de um campo de texto|

---

## ✅ Conclusão

A aula de hoje foi um trabalho prático para aprofundar os conhecimentos em HTML5. Espero que tenha sido interessante de estudar e que consigam praticar bastante.

Este mesmo formulário estará disponível em um arquivo `.html` dentro da pasta de exemplos. Se quiserem ver como fica o resultado em um site, basta fazer o download e executar em um navegador de sua preferência (por padrão, uso o Google Chrome para isso).

Com esta aula, encerramos nosso estudo básico de HTML e partimos para o estudo de CSS. Espero que tenham gostado do conteúdo!
