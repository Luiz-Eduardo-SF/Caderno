# &#x1F4C4; Certificado Digital

## &#x1F512; O que é?

É um documento eletrônico que **vincula uma chave pública** a uma entidade (pessoa, empresa, sistema etc).  
Essa chave é **assinada digitalmente por uma terceira parte confiável**: a **Autoridade Certificadora (AC)**.

---

## 🎯 Função principal

Evitar ataques como o **MITM - Man In The Middle** (Homem no Meio), em que o invasor intercepta a comunicação e se passa por um dos lados.

---

## &#x1F4AC; Exemplo de ataque MITM

1. **Alice** quer enviar um documento para **Bob**.
2. Ela pede a chave pública de Bob.
3. **Darth** intercepta o pedido e:
   - Envia a **chave pública dele mesmo** pra Alice.
   - Pede a **chave de Bob**, fingindo ser Alice.
4. Alice cifra a mensagem com a chave de Darth (achando que é a de Bob).
5. Darth lê a mensagem, **viola a confidencialidade**, e depois:
   - Reencaminha pra Bob cifrando com a chave pública dele.
6. Bob, sem saber de nada, recebe a mensagem "normalmente".

---

## &#x26A0;&#xFE0F; Como o certificado digital resolve isso?

- **Alice solicita à AC** o certificado digital de Bob.
- A **AC responde com o certificado assinado digitalmente**.
- Alice **verifica a assinatura da AC**:
  - Se for válida, ela confia que a chave pública é mesmo de Bob.
- Isso **impede a troca da chave pública** por um invasor.

---

## &#x1F5C4;&#xFE0F; Como o usuário pega o certificado da AC?

- Acessa o site da AC e faz o **download do certificado raiz**.
- Garante assim que está usando a **chave pública real da AC**.

---

## &#x1F4C5; No Brasil

As ACs fazem parte da **ICP-Brasil (Infraestrutura de Chaves Públicas Brasileira)**:  
Uma **cadeia hierárquica de confiança** que valida juridicamente a identidade digital de pessoas e instituições.

---

## &#x1F9D1;&#x200D;&#x1F4BB; Resumo

- **Certificado digital** = chave pública + assinatura da AC
- Impede ataques do tipo MITM
- Assegura **confiança nas comunicações**
- Fundamenta a segurança de **assinaturas digitais e conexões seguras**

