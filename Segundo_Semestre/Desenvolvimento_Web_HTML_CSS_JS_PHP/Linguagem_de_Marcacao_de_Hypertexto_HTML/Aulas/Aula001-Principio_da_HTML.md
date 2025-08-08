# 📝 A Linguagem HTML

## ❓ O que é HTML? (Resumido)

- &rarr; É a linguagem padrão para a criação de páginas web
- &rarr; Foi introduzida em 1990 por Tim Berners-Lee, que é considerado o inventor da World Wide Web
- &rarr; É baseada em tags, que permitem a criação de estrutura de seções, parágrafos e links usando elementos HTML

## 📈 A evolução da HTML: Versões

| Ano | Versão | Detalhes |
| :---: | :---: |:---:|
| 1991 | HTML | Tim Berners-Lee cria HTML |
| 1995 | HTML2 | Grupo de trabalho HTML define HTML 2.0 |
| 1997 | HTML3.2 | W3C publica a Recomendação HTML 3.2 |
| 1999 | HTML4.01 | W3C publica a Recomendação HTML 4.01 |
| 2000 | XHTML | W3C publica a Recomendação XHTML |
| 2014 | HTML5 | W3C publica a Recomendação HTML 5 |
| 2016 | HTML5.1 | W3C candidata a recomendação HTML 5.1 |
| 2017 | HTML5.1 | W3C publica a Recomendação HTML 5.1 2ª edição |
| 2017 | HTML5.2 | W3C publica a Recomendação HTML 5.2 |

## 📄 Document Type Definition (DTD)

- O propósito de um **DTD** é definir a estrutura e os elementos legais e atributos de um documento. 
---

Exemplo:
--- 
```
<!DOCTYPE note
    [
        <!ELEMENT note (title, content)>
        <!ELEMENT title (#PCDATA)>
        <!ELEMENT content (#PCDATA)>
    ]
>
```
---

Pontos Importantes:
-   **!DOCTYPE note:** O elemento raiz do documento é note.
-   **!ELEMENT note:** O elemento note deve conter os elementos: "title" e "content".
-   **!ELEMENT title:** "title" deve ser do tipo "#PCDATA" 
-   **!ELEMENT content:** "content" deve ser do tipo "#PCDATA" 

## 🛠️ Utilizando Doctypes

- A declaração DOCTYPE garante que o documento seja renderizado no modo correto e que o navegador ou analisador siga as regras apropriadas para analisar e renderizar a marcação

Uso prático do DTD:
---
```html
<note>
    <to>Leitores</to>
    <from>Escritor</from>
    <heading>Exemplo</heading>
    <body>Conteúdo</body>
    <footer>Escrito por: Luiz Eduardo</footer>
</note>
```
---