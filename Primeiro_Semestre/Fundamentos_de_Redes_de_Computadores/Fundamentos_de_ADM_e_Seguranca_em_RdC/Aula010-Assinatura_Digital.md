# ✍️ Assinatura Digital

## 🧠 O que é?

A **assinatura digital** garante:

- &#x2705; Autenticidade (quem assinou foi realmente quem disse ser)  
- &#x2705; Integridade (o conteúdo não foi alterado)  
- &#x2705; Não repúdio (não dá pra negar que foi você quem assinou)  
- &#x2705; Validade jurídica dos documentos eletrônicos &#x1F4C4;&#x1F512;

---

## 🔐 Como funciona?

A assinatura digital **combina**:

- Criptografia assimétrica &#x1F510;  
- Função de hash (resumo da mensagem) &#x23AF;&#xFE0F;

---

## 🧾 Processo de assinatura (emissor)

1. Calcula o **hash da mensagem**  
2. Cifra o hash com a **chave privada** do emissor  
3. Envia:
   - A mensagem original
   - O hash cifrado (que é a assinatura digital)

---

## 📨 Processo de verificação (receptor)

1. Calcula o **hash da mensagem recebida**  
2. **Decifra** o hash cifrado usando a **chave pública do emissor**  
3. **Compara os dois hashes**:

**Se forem iguais:**  
&#x2705; Mensagem íntegra e autor confirmado

**Se forem diferentes:**  
&#x274C; Mensagem adulterada ou assinatura inválida

---

## 💡 Resumo do fluxo (sem código)

**Emissor:**  
Mensagem ➜ Gera hash ➜ Cifra com chave privada ➜ Envia mensagem + assinatura

**Receptor:**  
Mensagem ➜ Gera novo hash ➜ Decifra assinatura com chave pública ➜ Compara os hashes

---

## ⚠️ Lembretes importantes

- Se os hashes **não coincidirem**, o documento **não é confiável**  
- O processo garante:
  - Que o conteúdo **não foi alterado**
  - Que foi **realmente assinado** por quem detém a chave privada

---

> &#x1F4BB; A assinatura digital é essencial para contratos, e-mails, NFs-e, e qualquer documento onde confiança digital é exigida.
