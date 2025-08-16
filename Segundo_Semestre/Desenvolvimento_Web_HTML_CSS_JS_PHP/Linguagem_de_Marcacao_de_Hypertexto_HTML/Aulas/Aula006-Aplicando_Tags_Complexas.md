# 📋 Lista, tabelas e mídias em HTML

## 📝 Listas 

### ℹ️ Sobre

---

Existem três tipos de listas em HTML:
- **Ordenadas**: São listas que possuem uma ordem específica, como números ou letras.
- **Não ordenadas**: São listas que não possuem uma ordem específica, como marcadores.
- **Definição**: São listas que definem termos e suas descrições.

---

### 💡 Exemplo:

```html
<body>
    <h1>Listas em HTML</h1>
    
    <h2>Lista Ordenada</h2>
    <ol>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ol>

    <h2>Lista Não Ordenada</h2>
    <ul>
        <li>Azul</li>
        <li>Vermelho</li>
        <li>Verde</li>
    </ul>
    <h2>Lista de Definição</h2>
    <dl>
        <dt>HTML</dt>
        <dd>Linguagem de Marcação de Hipertexto</dd>
        <dt>CSS</dt>
        <dd>Linguagem de Estilo em Cascata</dd>
        <dt>JavaScript</dt>
        <dd>Linguagem de Programação para Web</dd>
    </dl>
</body>
```

> Neste exemplo, são utilizados alguns tipos de listas em HTML, mas na pasta de exemplos há exemplos mais completos de listas, como diferentes tipos de listas ordenadas e não ordenadas.

- `Lista Ordenada`: Utiliza a tag `<ol>` para criar uma lista numerada, onde cada item é definido com a tag `<li>`.
- `Lista Não Ordenada`: Utiliza a tag `<ul>` para criar uma lista com marcadores, onde cada item também é definido com a tag `<li>`.
- `Lista de Definição`: Utiliza a tag `<dl>` para criar uma lista de termos e suas descrições, onde cada termo é definido com a tag `<dt>` e sua descrição com a tag `<dd>`.

## 📊 Tabelas 

As tabelas são muito úteis para organizar e facilitar a visualização de dados. Elas são compostas por linhas e colunas, onde cada célula pode conter texto, imagens ou outros elementos HTML.

### 💡 Exemplo:

```html
<body>
    <h1>Tabelas em HTML</h1>
    
    <table border="1" cellspacing="0" cellpadding="4" >
        <tr>
            <th>Nome</th>
            <th>Idade</th>
            <th>Altura</th>
        </tr>
        
        <tr>
            <td>João</td>
            <td>19</td>
            <td>1.80</td>
        </tr>

        <tr>
            <td>Maria</td><td>20</td><td>1.70</td>
        </tr>

        <tr><td>Gustavo</td><td>23</td><td>1.70</td></tr>
    </table>
</body>
```

- `Tabela`: Utiliza a tag `<table>` para criar uma tabela, onde cada linha é definida com a tag `<tr>`, as células de cabeçalho com a tag `<th>` e as células de dados com a tag `<td>`.
- `Borda`: Define a borda da tabela com a tag `<table border="1">` e a largura da borda com a tag `<table border="1" cellspacing="0" cellpadding="4">`
    - `border="1"`: Define a borda da tabela com uma largura de 1 pixel.
    - `cellspacing="0"`: Define o espaçamento entre as células da tabela.
    - `cellpadding="4"`: Define o preenchimento das células da tabela.

---

## 🏗️ Estrutura das tabelas em HTML

| Tags | Função |
| :--: | :----: |
| `<table>` | Define uma tabela |
| `<tr>` | Define uma linha na tabela |
| `<th>` | Define uma célula de cabeçalho na tabela |
| `<td>` | Define uma célula de dados na tabela |
| `<caption>` | Define um título para a tabela |
| `<thead>` | Define o cabeçalho da tabela |
| `<tfoot>` | Define o rodapé da tabela |

---

## 🎬 Mídias 

As mídias em HTML permitem a inclusão de imagens, vídeos e áudios em uma página web. Isso enriquece a experiência do usuário e torna o conteúdo mais interativo.

---

### 🖼️ Imagens

---

- `<img src="imagem.png">`: Imagem na mesma pasta.
- `<img src="../img/imagem.png">`: Imagem na pasta anterior.
- `<img src="https://exemplo.com/imagem.png">`: Imagem externa.

---

### 🔊 Áudios

---

- `<audio src="audio.mp3"></audio>`: Define um áudio na página web.
    - Assim, é uma forma rápida de incluir um áudio em uma página web. Mas muitos navegadores não são compatíveis com MP3, então uma forma completa de colocar áudio no seu site seria usando a seguinte forma:

    ```html
    <audio controls>
        <source src="audio.mp3" type="audio/mpeg">
        <source src="audio.ogg" type="audio/ogg">
        <source src="audio.wav" type="audio/wav">

        <p>Infelizmente seu navegador não é compatível com áudio.</p>
    </audio>
    ```

    > Dessa forma, o navegador irá escolher o formato de áudio mais compatível. Se nenhuma das opções for compatível, ele exibirá uma mensagem de erro.

---

- Principais atributos da tag `<audio>`:

    - `preload`: Define o pré-carregamento da tag `<audio>`. Pode ser "none", "metadata" ou "auto".
    - `metadata`: Carrega apenas as informações sobre o arquivo (tamanho, tempo, informações de direitos, etc).
    - `none`: Não carrega nada até que o usuário clique no botão de reprodução ou um script faça isso.
    - `controls`: Exibe os controles do áudio, como botões de play, pause e volume.
    - `autoplay`: Faz com que o áudio seja reproduzido automaticamente ao carregar a página.
    - `loop`: Faz com que o áudio seja reproduzido novamente ao final.
    - `auto`: Faz com que o áudio seja reproduzido automaticamente ao carregar a página.

---

### 🎥 Vídeos

---

#### 💡 Exemplo:

```html
<video width="600" poster="thumb.jpg" controls autoplay>
    <source src="video.mp4" type="video/mp4">
    <source src="video.ogv" type="video/ogg">
    <source src="video.webm" type="video/webm">

    <p>Infelizmente seu navegador não é compatível com vídeo.</p>
</video>
```

> Dessa forma, o navegador irá escolher o formato de vídeo mais compatível. Se nenhuma das opções for compatível, ele exibirá uma mensagem de erro.

---

- Principais atributos da tag `<video>`:

    - `width`: Define a largura do vídeo.
    - `height`: Define a altura do vídeo.
    - `poster`: Define a imagem de capa do vídeo.
    - `controls`: Exibe os controles do vídeo, como botões de play, pause e volume.
    - `autoplay`: Faz com que o vídeo seja reproduzido automaticamente ao carregar a página.
    - `loop`: Faz com que o vídeo seja reproduzido novamente ao final.

---

## 📑 Tabela de formatos compatíveis 

| Navegador | Formatos |
| :-------: | :------: |
| Microsoft | .mp4 .m4v |
| Apple Safari | .mp4 .m4v |
| Google Chrome | .mp4 .m4v .webm .ogv |
| Mozilla Firefox | .webm .ogv |
| Opera | .webm .ogv |

> VÍDEOS HOSPEDADOS EM SERVIDOR EXTERNO: No próprio YouTube, ao clicar em compartilhar, há uma opção chamada incorporar, que fornece uma tag para colocar no seu HTML.

---

#### 📝 Pratique:

- Como desafio, não vou adicionar um arquivo .html com exemplos de mídias. Portanto, seu desafio será criar seu próprio arquivo com cada um dos formatos de mídia citados na tabela acima. Assim, você poderá adicioná-lo ao seu próprio repositório e mostrar para seus colegas.

---

## ✅ Conclusão

- Nesta aula, vimos diversas tags muito úteis para sites. É uma aula bem importante, então pratique bastante essas tags para aprender melhor.

---
