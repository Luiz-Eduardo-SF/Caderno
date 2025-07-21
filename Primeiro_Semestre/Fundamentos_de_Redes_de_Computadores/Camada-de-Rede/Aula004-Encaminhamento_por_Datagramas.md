# &#x1F4BB; RESUMO – Encaminhamento por Datagramas

## &#x1F4E6; O que são Datagramas?

- Pacotes **independentes**, enviados **sem conexão prévia**.
- Cada pacote pode seguir **caminhos diferentes** até o destino.
- Usado em redes como a **Internet**.

---

## &#x1F310; Funcionamento:

- Cada roteador **analisa o endereço de destino** e decide o **próximo salto** (repasse).
- A decisão é feita com base em **tabelas de repasse** atualizadas dinamicamente.
- **Não há reserva de rota fixa**, como nos circuitos virtuais.

---

## &#x1F3A5; Exemplo prático:

Você assiste um filme (90 min) via streaming:  
- A rede escolhe caminhos com **melhor tráfego em tempo real**.
- Durante o filme, **a rota pode mudar**.
- Pacotes podem **chegar fora de ordem** ou até **se perderem**.

---

## &#x2753; Por que a rota muda?

- Uma rota pode ficar **congestionada**.
- Roteadores encontram **alternativas mais rápidas**.
- Resultado: os pacotes seguem novos caminhos, e a ordem original pode ser afetada.

---

## &#x26A0;&#xFE0F; Problemas em redes de datagramas:

1. &#x274C; **Perda de pacotes**
2. &#x1F6AB; **Pacotes com erro**
3. &#x1F504; **Chegada fora de ordem**
4. &#x1F5D2;&#xFE0F; **Pacotes duplicados**

&#x1F4AC; *Esses problemas são tratados por camadas superiores (como a camada de transporte).*

---

## 🧠 Comparação Rápida com Circuitos Virtuais

| Característica        | Datagramas                 | Circuitos Virtuais         |
|-----------------------|----------------------------|-----------------------------|
| Tipo de serviço       | Sem conexão                | Com conexão                |
| Ordem de entrega      | Não garantida              | Garantida                  |
| Caminho dos pacotes   | Pode variar                | Fixo                       |
| Flexibilidade         | Alta                       | Baixa                      |
| Exemplo do mundo real | Internet (IP)              | Redes ATM / MPLS           |

---

## &#x1F50C; Protocolo ARP (spoiler)

➡️ **ARP (Address Resolution Protocol)** é usado para **descobrir o endereço físico (MAC)** de um host a partir de um endereço IP em redes locais.

🔜 Mais detalhes sobre ARP virão depois.
