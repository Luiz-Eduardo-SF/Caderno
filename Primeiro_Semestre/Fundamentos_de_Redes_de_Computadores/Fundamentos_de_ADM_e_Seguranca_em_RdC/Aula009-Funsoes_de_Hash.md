# 🔒 Funções de Hash

## 🧠 O que são?
Funções de **hash** (ou resumo de mensagem) transformam **qualquer conteúdo** (texto, arquivo, senha etc.) em uma **sequência fixa de caracteres**.

- Objetivo: **garantir integridade** da informação.
- Se qualquer parte da informação for alterada, o hash gerado será totalmente diferente.

---

## ⚙️ Exemplo de uso

Arquivo: `aula.doc`  
Comando MD5:
> md5sum aula.doc

Exemplo de saída:
> 595f44fec1e92a71d3e9e77456ba80d1

✅ Se o hash for igual ao original → Arquivo íntegro  
❌ Se o hash for diferente → Arquivo foi alterado

---

## 🔐 Uso em senhas

1. Ao cadastrar uma senha, o sistema **salva apenas o hash**.
2. No login, o hash da senha digitada é comparado com o salvo.

✅ A senha real nunca é armazenada nem transmitida.

---

## ⚠️ Riscos do uso isolado

Se usado sozinho, o hash pode sofrer **ataques de reprodução (replay attack)**:

- Um atacante pode capturar o hash e reutilizá-lo para se autenticar.

➡️ Por isso, é ideal usar junto com técnicas como **salt** ou **HMAC**.

---

## ✅ Propriedades desejadas

- **Determinística**: mesma entrada = mesmo hash
- **Efeito avalanche**: pequena mudança → hash totalmente diferente
- **Não reversível**: impossível descobrir a entrada original
- **Sem colisões**: entradas diferentes não devem gerar mesmo hash

---

## 🔢 Principais algoritmos de hash

| Algoritmo | Estado atual        |
|-----------|---------------------|
| MD5       | ⚠️ Obsoleto, inseguro |
| SHA-1     | ⚠️ Obsoleto          |
| SHA-2     | ✅ Seguro e atual     |
| SHA-3     | ✅ Novo padrão seguro |

---

## 🧠 Conclusão

Funções de hash são fundamentais para:

- Validar integridade de arquivos 📁
- Proteger senhas sem armazená-las diretamente 🔐
- Detectar alterações em dados 📉

> 💡 Nunca confie apenas no hash. Use sempre em conjunto com outros mecanismos de segurança! 🛡️
