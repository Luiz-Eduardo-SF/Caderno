# &#x1F510; Criptografia

## &#x1F4A1; O que é?

Criptografia é a técnica usada para **esconder o significado de uma mensagem**. Ela transforma a mensagem original em algo ilegível (texto cifrado), protegendo dados e garantindo propriedades de segurança como:

- &#x1F512; **Confidencialidade**
- &#x1F4BE; **Integridade**
- &#x2705; **Autenticidade**

---

## ⚙️ Funções Criptográficas

| Função        | O que faz                                                   |
|---------------|-------------------------------------------------------------|
| **Ciframento** | Transforma o texto original (claro) em texto cifrado        |
| **Deciframento** | Reverte o texto cifrado para o original (legível)          |

> 🔐 A criptografia moderna depende de dois elementos principais:
> - **Algoritmo**: Método usado para cifrar/decifrar
> - **Chave**: Segredo usado no processo (é ela quem precisa ser protegida)

---

## 🗝️ Tipos de Criptografia

### 1. Chave **Simétrica** (ou **Privada**)

- Usa a **mesma chave** para cifrar e decifrar 🔁
- Rápida e eficiente para grandes volumes de dados
- Exige cuidado no **compartilhamento da chave**

**Exemplos**:  
AES, DES, 3DES, RC4, Blowfish, IDEA

🧠 **Resumo**:
> ✔️ Boa para **confidencialidade**  
> ❗ Risco se a chave for interceptada

---

### 2. Chave **Assimétrica** (ou **Pública**)

- Usa **duas chaves distintas**:
  - 🔓 **Chave pública** → para cifrar
  - 🔐 **Chave privada** → para decifrar

> A segurança está no fato de que **uma não pode substituir a outra**.

**Exemplo famoso**:  
RSA (usado em bancos, e-commerces, e governos)

🧠 **Resumo de uso**:

| Ordem de uso            | O que garante         |
|--------------------------|------------------------|
| Pública → Privada        | &#x1F512; **Confidencialidade** |
| Privada → Pública        | ✅ **Autenticidade** (assinatura digital) |

---

## &#x1F4AC; Exemplo prático

### Cenário 1: Enviar mensagem sigilosa
- Alice cifra com a **chave pública de Bob**
- Só Bob pode decifrar, pois **só ele tem a chave privada**

✔️ **Garante confidencialidade**

### Cenário 2: Assinar um documento
- Alice cifra com **sua chave privada**
- Qualquer um com a **chave pública de Alice** pode verificar

✔️ **Garante autenticidade** (foi Alice quem escreveu)

---

## 📌 Conclusão

Criptografia é um pilar fundamental da segurança da informação. Seu uso correto:
- Protege comunicações sensíveis
- Garante a identidade de usuários
- Impede acessos não autorizados

> Sempre combine criptografia com outros mecanismos como autenticação forte e controle de acesso para uma defesa sólida &#x1F6E1;&#xFE0F;

