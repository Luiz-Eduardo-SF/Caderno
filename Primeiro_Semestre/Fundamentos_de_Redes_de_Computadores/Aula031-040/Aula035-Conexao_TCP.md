# &#x1F4BB; RESUMO – Conexão TCP (Three-Way Handshake)

## 🔌 Estabelecimento da conexão – Three-Way Handshake (3 vias)

1. **Cliente envia SYN**  
   - Envia um segmento TCP com o bit `SYN = 1` e `ACK = 0`.  
   - Diz: "Quero iniciar uma conexão! Aqui está meu número de sequência inicial."

2. **Servidor responde com SYN + ACK**  
   - Se estiver ouvindo na porta destino, responde com `SYN = 1` e `ACK = 1`.  
   - Diz: "Recebi seu pedido! Aqui está meu número de sequência e confirmo o seu."

3. **Cliente responde com ACK**  
   - Envia um segmento com `ACK = 1`, confirmando o recebimento.  
   - Diz: "Confirmei sua resposta. Bora trocar dados!"

✅ A conexão TCP está **estabelecida** após esses três passos.

---

## ❌ Rejeição de conexão

- Se **ninguém estiver ouvindo** na porta destino, o servidor responde com `RST = 1`.  
  - Isso significa que a conexão foi **rejeitada**.

---

## 📈 Política de Transmissão TCP (visão geral)

- O TCP **garante confiabilidade**:
  - Usa **temporizadores** para retransmitir segmentos que não foram confirmados.
  - Organiza segmentos que chegam fora de ordem.
  - Garante entrega **sem erros** via **soma de verificação**.
  - Controla o **fluxo de dados** com a **janela deslizante**.

---

