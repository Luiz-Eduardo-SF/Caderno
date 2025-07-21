# &#x1F4E6; Cabeçalho TCP

Cada **segmento TCP** começa com um **cabeçalho fixo de 20 bytes** (pode aumentar com opções). Após o cabeçalho, é possível incluir **até 65.515 bytes** de dados.

> Segmentos **sem dados** também são válidos e usados para **controle e confirmações**.

---

## &#x1F4DD; Estrutura do Cabeçalho (Formato de 32 bits)

```txt
| Porta origem (16) | Porta destino (16) |
| Número de sequência (32 bits)         |
| Número de confirmação (32 bits)       |
| HLEN (4) | Reservado (6) | Flags (6) | Tamanho da Janela (16) |
| Soma de verificação (16) | Ponteiro urgente (16) |
| Opções (variável)                     |
| Dados (0 até 65.515 bytes)           |
```
## &#x1F4C1; Campos e Funções

### &#x1F6E0;&#xFE0F; Porta Origem & Porta Destino
- Identificam os **processos** de envio e recepção.
- Usadas para **multiplexação/demultiplexação**, igual ao UDP.

### &#x1F522; Número de Sequência
- Define a **posição do primeiro byte** dos dados no fluxo TCP.

### &#x1F503; Número de Confirmação
- Indica o **próximo byte esperado** do outro lado.
- Implicitamente confirma que **todos os anteriores foram recebidos**.

### 🧮 HLEN (Header Length)
- Tamanho do cabeçalho em **palavras de 32 bits**.
- Mínimo: 5 palavras (20 bytes), sem opções.

### ⚠️ Reservado
- Campo ignorado, reservado para uso futuro.

---

## &#x1F3C1; Flags (cada uma tem 1 bit)

| Flag | Nome | Função |
|------|------|--------|
| **URG** | Urgent | Ativa o campo "ponteiro urgente" |
| **ACK** | Acknowledgement | Informa que o campo de confirmação é válido |
| **PSH** | Push | Solicita que os dados sejam entregues imediatamente |
| **RST** | Reset | Encerra conexão corrompida ou rejeita conexão |
| **SYN** | Synchronize | Estabelece conexão TCP (handshake) |
| **FIN** | Finish | Solicita encerramento de conexão |

---

## &#x1F5A5;&#xFE0F; Tamanho da Janela
- Indica quantos bytes **o receptor está pronto para receber**.
- Usado no **controle de fluxo (janela deslizante)**.

### ✅ Soma de Verificação (Checksum)
- Verifica **erros no cabeçalho e nos dados**.
- Segmentos com erro **são descartados** (retransmissão ocorre).

### &#x1F9EA; Ponteiro Urgente
- Mostra a posição até onde os **dados urgentes** se estendem.
- Só é válido se o flag **URG = 1**.

### &#x1F527; Opções
- Campo variável usado para recursos extras:
  - **Tamanho máximo de segmento (MSS)**
  - **Timestamp**
  - **Janela escalável** etc.

---

## &#x1F4BE; Dados
- São os **dados reais da aplicação** (ex: HTML, email, arquivo).
- Vão da camada de transporte para a de aplicação no destino.

---

## &#x1F4A1; Dica Visual para Handshake (3-Way)

```txt
[Cliente] ---- SYN ----> [Servidor]
[Cliente] <--- SYN/ACK -- [Servidor]
[Cliente] ---- ACK ----> [Servidor]
``` 
## &#127919; Conclusão

O cabeçalho TCP é **cheio de controles e funcionalidades**, o que permite ao protocolo:
- **"Manter a ordem dos dados"**
- **"Garantir entrega"**
- **"Controlar fluxo e congestionamento"**
- **"Identificar falhas e se recuperar"**

> &#x2705; Ideal para quando **confiança na entrega** é mais importante que velocidade!