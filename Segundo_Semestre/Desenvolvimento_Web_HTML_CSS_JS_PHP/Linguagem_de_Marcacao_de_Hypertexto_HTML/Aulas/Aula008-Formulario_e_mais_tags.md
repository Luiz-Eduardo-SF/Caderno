# 📝 Formularios HTML

## 📚 O que vamos abordar?

- A estrutura do formulário
- Elementos e atributos do formulário
- Atributos do formulário: O atributo type
- Novos atributos e tipos de entrada

## 💡 Motivação

- Um formulário HTML é uma ótima maneira de interagir com o usuário.
- Esses formulários foram o ponto de partida de diversos frameworks modernos.

## 🏗️ Estrutura do formulário

Como exemplo, vamos usar a seguinte estrutura que aborda diversos elementos do formulário:

---

```html
<body>
    <form action="/pagina-processa-dados-do-form">
        <fieldset>
            <legend>Dados Gerais</legend>

            <label for="nome">Nome:</label>
            <input type="text" id="nome">

            <label for="data_nascimento">Data de Nascimento:</label>
            <input type="date" id="data_nascimento">

            <label for="cpf">CPF:</label>
            <input type="text" id="cpf">

        </fieldset>

        <fieldset>
            <legend>Endereço</legend>

            <label for="tipo_endereco">Tipo:</label>
            <select id="tipo_endereco">
                <option value="">Selecione</option>
                <option value="">Rua</option>
                <option value="">Estrada</option>
                <option value="">Avenida</option>
                <option value="">Outros</option>
            </select>

            <label for="logradouro_endereco">Logradouro:</label>
            <input type="text" id="logradouro_endereco">

            <label for="numero_endereco">Número:</label>
            <input type="text" id="numero_endereco">

            <label for="complemento_endereco">Complemento:</label>
            <input type="text" id="complemento_endereco">

        </fieldset>

        <fieldset>
            <legend>Fale conosco</legend>
            
            <label for="msg">Mensagem:</label>
            <textarea id="msg"></textarea>
        </fieldset>

        <fieldset>
            <button type="submit">Enviar sua mensagem</button>
            <button type="reset">Limpar formulário</button>
        </fieldset>
    </form>
</body>
```

---

> Neste exemplo, aplicamos diversos elementos e atributos novos. Por isso, vou explicar cada um deles a seguir. Se você quiser ver como esse código inteiro se comporta em um arquivo HTML, basta entrar na pasta de exemplos, salvar os arquivos no seu dispositivo e executar com seu navegador.

---

## 🏷️ Elementos e atributos do formulário

|Tags|Atributos|Função do atributo|
|:--:|:--:|:--:|
|`<form>`|action|Define a URL para a qual os dados do formulário serão enviados|
|`<form>`|method|Define o método HTTP (POST ou GET) para envio dos dados|
|`<label>`|for|Vincula a tag `<label>` ao campo ao qual ela se refere|
|`<input>`|minlength,<br>maxlength|Define a quantidade mínima e máxima de caracteres|
|`<input>`,<br>`<button>`|type|Define o tipo do campo e, sobretudo, como ele se comporta|
|`<option>`|value|Pode ser utilizado na tag `<input>`|

---

- A tag `<fieldset>` cria seções dentro do formulário, ajudando a separar os campos no código e a visualizar a página no navegador.

- Isso fica mais claro quando vinculamos ao `<fieldset>` a tag `<legend>`, que cria o cabeçalho da seção.

---

## 🔠 Atributos do formulário: O atributo type

|Type|Significado|
|:--:|:--:|
|`password`|Mascara o texto com asteriscos|
|`hidden`|Esconde o campo para não ser exibido no navegador|
|`checkbox`|Seleção de valor através de clique-check|
|`radio`|Usado para seleção exclusiva de valor|
|`reset`|Limpa os dados do formulário|
|`submit`|Envia os dados do formulário|
|`file`|Permite o upload de arquivos|
|`date`|Permite a seleção de data|
|`time`|Permite a seleção de hora|
|`button`|Apresenta um componente "botão" no formulário|

---

- Os novos "types" acrescentam comportamentos que facilitam o desenvolvimento de formulários.

- Alguns desses atributos podem ser combinados.

---

## ⚠️ Aviso

Como consegui fazer grande parte das anotações físicas até o final do dia, sinto que o conteúdo não foi 100% entregue de forma correta. Portanto, amanhã vou revisar mais sobre essa aula e atualizar este conteúdo de uma forma melhor. Obrigado pela compreensão, bons estudos a todos!
