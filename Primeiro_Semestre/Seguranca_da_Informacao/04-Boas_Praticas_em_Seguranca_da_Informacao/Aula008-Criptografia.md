# &#x1F4BB; Criptografia 

Criptografia = Ato de codificar dados para que só pessoas autorizadas tenham acesso.

Segundo Stallings (2008), três tipos principais:

1. **Chave Simétrica**
2. **Função Hash**
3. **Chave Assimétrica**

---

## &#x1F511; Criptografia de Chave Simétrica

**AKA**: Chave privada ou secreta.  
**Como funciona**:  
- Uma única chave é usada para criptografar e descriptografar.
- Tanto quem envia quanto quem recebe **usam a mesma chave**.

**Algoritmos comuns**:  
- AES (Advanced Encryption System)  
- Block cipher  
- DES (Data Encryption System)  
- RC2  
- IDEA  
- Blowfish  
- Stream cipher

**Prós**:  
✅ Rápida  
✅ Menos complexa  

**Contras**:  
❌ Se a chave for comprometida → perda total.

---

## &#x1F5DD; Criptografia de Chave Assimétrica

**AKA**: Chave pública.  
**Como funciona**:  
- Usa **duas chaves**: uma pública (compartilhada) e uma privada (secreta).  
- A mensagem é criptografada com uma e descriptografada com a outra.

**Algoritmos comuns**:  
- RSA  
- DAS  
- PKCs  
- Técnicas de curva elíptica

**Prós**:  
✅ Mais segura  
✅ Permite troca de chaves, autenticação e não-repúdio  

**Contras**:  
❌ Mais lenta  
❌ Mais complexa  

---

## &#x1F4DD; Função Hash

**Como funciona**:  
- Usa uma **função matemática** que transforma os dados em uma impressão digital irreversível.  
- **Não usa chave**.  

**Objetivo**:  
✅ Garantir a integridade da mensagem → qualquer alteração altera o hash.

**Algoritmos comuns**:  
- MD5 (Message Digest 5)  
- RIPEMD  
- Whirlpool  
- SHA (Secure Hash Algorithm)

**Prós**:  
✅ Integridade confiável  
✅ Impossível (ou altamente improvável) duas mensagens terem o mesmo hash  

**Contras**:  
❌ Não garante confidencialidade nem autenticação.

---

## &#x1F4CA; Quando usar cada tipo?

| Objetivo | Tipo Ideal |
|----------|------------|
| **Integridade dos dados** | Função Hash |
| **Privacidade e confidencialidade** | Chave Simétrica |
| **Troca de chaves / Autenticação / Não-repúdio** | Chave Assimétrica |

---

## &#x1F9D0; Comparativo direto entre os métodos

| Característica | Chave Simétrica | Chave Assimétrica | Função Hash |
|----------------|-----------------|-------------------|-------------|
| Chaves | Uma única chave | Par de chaves | Não usa chave |
| Velocidade | Mais rápida | Mais lenta | Média |
| Segurança | Menos confiável | Mais confiável | Alta integridade |
| Complexidade | Menor | Maior | Média |
| Vulnerabilidade | Se chave comprometida, perda total | Se chave comprometida, só o dono perde | Não há chave para comprometer |
| Aplicação | Criptografar mensagens | Troca de chaves, autenticação | Garantir integridade |

---

## &#x1F680; Reflexão final

➡️ **Por que vários tipos?**  
Porque **cada um é otimizado** para uma função específica. Não existe bala de prata em criptografia.  

➡️ **O futuro?**  
Maior aprimoramento, mais segurança, padrões mais confiáveis para proteger dados pessoais e corporativos.  

➡️ **Boas práticas?**  
- Sempre criptografar arquivos e e-mails importantes.  
- Combinar técnicas para segurança robusta.  

---