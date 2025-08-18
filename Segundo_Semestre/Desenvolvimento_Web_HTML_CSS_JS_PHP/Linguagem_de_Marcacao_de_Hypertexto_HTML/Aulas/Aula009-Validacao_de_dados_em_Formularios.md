# ✅ Validação de dados em formulários

## 🛠️ Elementos Práticos

- Validação de dados e como funciona
- Muitos dados seguem um padrão, por exemplo: CPF, CEP e numeração de placas de veículos
- Atualmente, está cada vez mais comum a área de ETL (Extrair, Transformar e Carregar dados).
- Quando os dados são confiáveis, é mais fácil extrair valor deles.

## 📝 Validação de dados

- No HTML5 há dois tipos de validação possíveis:
    - Verificar se os dados inseridos em um campo são consistentes com seu tipo e/ou padrão (pattern)
    - Verificar se um campo obrigatório foi preenchido.

### 🔢 Exemplos de REGEX

---

O REGEX é uma sequência de caracteres usada para buscar, validar ou manipular padrões em textos. Com REGEX, você pode verificar se as informações estão no formato correto.

- O REGEX de CPF é: `^\d{3}.?\d{3}.?\d{3}-?\d{2}$`
- O REGEX de CEP é: `^\d{5}-?\d{3}$`
- O REGEX de Gmail é: `^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$`

### 📖 O que cada código significa?

| Comando | Significado |
|:---:|:----:|
| ^ | Indica o início da expressão regular |
| $ | Indica o fim da expressão regular |
| \d | Indica um dígito |
| ? | O caractere anterior é opcional |
| [a-z] | Indica uma letra minúscula |
| [a-z0-9] | Indica uma letra minúscula ou um dígito |
| [a-z0-9._%+-] | Indica uma letra minúscula, um dígito ou caractere especial |
| \. | Indica um ponto |

> Veja mais sobre Regex: [w3schools](https://www.w3schools.com/jsref/jsref_obj_regexp.asp)

## ⚙️ Como funciona a validação?

- Além da validação pelo tipo de dado, há também a validação de campos obrigatórios.
- Quando precisamos que determinados campos sejam obrigatórios, usamos o atributo `required` no campo.

---

### ⚠️ Atenção

O comportamento padrão do HTML5 é validar os dados quando ocorre o envio do formulário.

Entretanto, é possível desativar essa funcionalidade. Para isso, deve ser atribuído o atributo `novalidate` à tag `<form>`. (Não recomendado.)

---

## 🏁 Conclusão

- Com a validação de dados, conseguimos garantir que os dados inseridos no formulário sejam consistentes com o padrão.
- O comportamento padrão do HTML5 é validar os dados quando ocorre o envio do formulário.

---