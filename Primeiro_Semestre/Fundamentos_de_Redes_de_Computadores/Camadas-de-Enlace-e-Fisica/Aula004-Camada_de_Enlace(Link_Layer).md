# 🧩 Camada de Enlace (Link Layer)

## 🧬 Posição na Pilha
- Fica logo **acima da camada física**.
- Trabalha em conjunto com a camada física para garantir a **entrega confiável** dos dados.

---

## ⚠️ Problemas no Meio Físico
- Alguns problemas são **inevitáveis**, como:
  - **Ruído térmico**
  - **Atenuação**
  - **Interferências**
- A camada física **não corrige erros**, apenas transmite sinais.
- ✅ A **camada de enlace** é quem **detecta e trata os erros**.

---

## 🎯 Funções da Camada de Enlace
1. **Delimitação de quadros**  
   → Agrupa os bits em unidades chamadas *quadros (frames)*.
   
2. **Controle de erros**  
   → Detecta e (em alguns casos) corrige erros de transmissão.

3. **Controle de fluxo**  
   → Garante que o transmissor não sobrecarregue o receptor.

4. **Controle de acesso ao meio**  
   → Define como os dispositivos compartilham o meio físico.

---

## 🧱 Subcamadas da Camada de Enlace (IEEE 802)

| Subcamada | Função Principal |
|-----------|------------------|
| **LLC (Logical Link Control)** | Cuida da **delimitação de quadros**, **controle de erros** e **fluxo** |
| **MAC (Medium Access Control)** | Cuida do **acesso ao meio físico** (quem transmite, quando e como) |

---
