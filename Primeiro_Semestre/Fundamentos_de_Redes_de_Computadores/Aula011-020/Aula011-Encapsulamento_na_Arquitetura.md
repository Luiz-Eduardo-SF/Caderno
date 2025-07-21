# 📦 Encapsulamento na arquitetura TCP/IP &#x1F4E6;

## 🧠 O que é encapsulamento?

É o processo de **empacotar os dados** à medida que eles descem pelas camadas da pilha de protocolos. Cada camada adiciona um **cabeçalho** com informações úteis pra sua função.

---

## 🎯 Exemplo prático

Imagina que você quer **enviar uma mensagem por e-mail**:

1. ✉️ **Aplicação** (escreve o e-mail)
2. 📦 **Transporte (TCP)**: adiciona cabeçalho com número de porta e controle de entrega → vira **segmento**
3. 🌍 **Rede (IP)**: adiciona endereços IP de origem/destino → vira **datagrama**
4. 🔗 **Enlace (Ethernet)**: adiciona MAC de origem/destino → vira **quadro (frame)**
5. 📡 **Física**: transforma tudo em bits e envia pelo meio físico

---

## 🔁 Desencapsulamento

No destino, o processo é **invertido**:

- A camada física recebe os bits 🧬
- O enlace monta o quadro e passa pra rede 📦
- A rede entrega o datagrama pra transporte 🌐
- O transporte monta o segmento e entrega pra aplicação 💬

Cada camada **remove o seu cabeçalho** e entrega só o necessário pra camada de cima.

---

## 🧱 Cada camada, uma PDU (Protocol Data Unit)

| Camada      | PDU         |
|-------------|-------------|
| Aplicação   | Dados       |
| Transporte  | Segmento    |
| Rede        | Datagrama   |
| Enlace      | Quadro      |
| Física      | Bits        |

---

## 💡 Observação sobre roteadores e switches

- **Hospedeiros (PCs, servidores)** = implementam todas as 5 camadas
- **Roteadores** = operam até a camada 3 (IP)
- **Switches** = operam até a camada 2 (enlace)

---

## ✅ Resumo
> Encapsulamento é como passar um presente: cada camada **embrulha os dados com um cabeçalho próprio**. No destino, cada camada **desembrulha**. Isso garante que a mensagem chegue direitinho. &#x1F381;
