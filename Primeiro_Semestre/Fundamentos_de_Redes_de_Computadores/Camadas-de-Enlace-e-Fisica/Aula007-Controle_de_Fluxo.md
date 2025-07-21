# 🚦 Controle de Fluxo na Camada de Enlace

## 🎯 Qual é a ideia?
Evitar que o **transmissor envie dados rápido demais** e sobrecarregue um **receptor mais lento**. Isso causaria **perda de quadros** e necessidade de **retransmissão**, o que é péssimo para o desempenho. &#x1F615;

---

## 🧠 Como funciona?

Usa os **protocolos ARQ** (retransmissão automática com confirmação) pra ajudar no controle.

### 🧩 Estratégia:
O receptor **controla o ritmo** da comunicação, **segurando os ACKs** (confirmações de recebimento).

- 🔄 Ao **retardar** o envio dos ACKs, o transmissor entende que deve **esperar**.
- 🧱 Se necessário, o receptor **pausa todos os ACKs**, provocando **timeout** no transmissor.
- 🟢 Quando o receptor estiver pronto novamente, ele **envia os ACKs** e a comunicação **recomeça normalmente**.

---

## 📌 Resumo direto:

| Problema | Solução |
|---------|---------|
| Receptor está mais lento que o transmissor | Receptor atrasa ou pausa o envio de ACKs |
| Isso faz o quê? | Transmissor diminui ou pausa o envio de novos quadros |
| Benefício | Evita perda de dados e retransmissões desnecessárias &#x1F4A5; |

---

💡 Esse mecanismo é tipo um **freio inteligente** no transmissor, controlado pelo receptor. &#x1F697;&#x1F6D1;

