# 🛡️ Controle de Erros (Codificação)

## 🎯 Objetivo:
Evitar que **erros na transmissão** passem despercebidos e garantir que os dados cheguem **corretos** ao receptor.

---

## 🔁 Estratégias

### 1. 🔓 Open Loop (Malha Aberta)
- **Sem canal de retorno**. O transmissor **não espera confirmação**.
- O receptor **corrige o erro sozinho**, usando códigos especiais chamados **FEC (Forward Error Correction)**.
  
#### ✅ Vantagens:
- Funciona mesmo **sem canal de retorno**.

#### ❌ Desvantagens:
- Precisa inserir **muita informação redundante** no quadro.
- Mais complexo e pesado.

#### 🧪 Exemplo: **Código de Hamming**
- Detecta e corrige **erros simples** automaticamente.

---

### 2. 🔁 Feedback (Malha Fechada)
- **Com canal de retorno**.
- Usa códigos de **detecção** (não correção).
- Se o receptor detectar erro → **pede retransmissão**.

#### 🧩 Exemplo: **Bit de Paridade**
- Usa **paridade par** ou ímpar.
- Se a paridade **não bater**, receptor solicita **nova transmissão**.

⚠️ Limitação: se **2 bits forem alterados**, a paridade pode **enganar o receptor**.

---

### 💥 Solução Mais Robusta: **CRC (Cyclic Redundancy Check)**
- Detecção muito mais confiável.
- Usa uma operação matemática com **polinômios binários**.
- Padrão em redes por ser leve e eficaz.

---

## 🧱 Resumo Rápido

| Estratégia     | Detecta Erros | Corrige Erros | Precisa de Retorno? | Exemplo       |
|----------------|----------------|----------------|----------------------|----------------|
| Open Loop      | ✅              | ✅              | ❌                   | Código Hamming |
| Feedback       | ✅              | ❌              | ✅                   | Bit de Paridade / CRC |

---
