# &#x1F6E0;&#xFE0F; Protocolo UDP (User Datagram Protocol)

## &#x1F4CB; Visão Geral

- **UDP** é um protocolo de transporte **leve e rápido**, descrito na **RFC 768**.
- É **sem conexão** e **sem estado** (não rastreia o que já enviou).
- É o mais simples possível: só pega os dados e envia.
- **Multiplexação e demultiplexação** são suportadas.
- Oferece **verificação de erro com checksum (CRC)**, mas **não garante entrega**.

---

## &#x1F4E8; Cabeçalho UDP

### Campos do cabeçalho:
| Campo             | Função                                                                 |
|------------------|------------------------------------------------------------------------|
| Porta de origem  | Identifica quem enviou. Serve para a resposta voltar corretamente.     |
| Porta de destino | Identifica quem deve receber no destino.                              |
| Tamanho          | Tamanho total do segmento UDP (cabeçalho + dados). Máximo: 65.536 B.   |
| Soma de verificação (Checksum) | Verifica se houve erro nos dados. CRC simples.                   |

---

## &#x1F50E; Entrega de dados

- A camada de transporte **usa os campos de porta** para saber **quem envia** e **quem recebe**.
- A entrega correta depende da **porta de destino** no cabeçalho.
- O **receptor pode calcular o CRC** e comparar com o enviado:
  - Se igual → entrega.
  - Se diferente → descarta (ou entrega com aviso, dependendo da implementação).

---

## &#x26A1; Quando usar UDP?

- Quando a **velocidade é mais importante que a confiabilidade**.
- Quando a própria **aplicação implementa controle de erro** (ex: retransmissão no código).
- Quando pequenos pacotes precisam ser enviados sem o peso do TCP.

---

## &#x1F4C4; Protocolos que usam UDP

| Protocolo | Função                                      |
|-----------|---------------------------------------------|
| DNS       | Resolução de nomes                         |
| SNMP      | Gerenciamento de redes                     |
| TFTP      | Transferência de arquivos leve             |
| RPC       | Chamada de procedimento remoto             |

---

## &#x1F4A1; Resumo Final

| Característica            | UDP                         |
|---------------------------|-----------------------------|
| Orientado à conexão       | ❌ Não                      |
| Controle de fluxo/erro    | ❌ (aplicação cuida disso)  |
| Multiplexação/demultiplexação | ✅                        |
| Checksum (CRC)            | ✅                          |
| Overhead                  | Baixo &#x1F44C;               |
| Aplicações típicas        | DNS, SNMP, jogos, voz/vídeo |

> UDP é rápido, leve, sem frescura. Mas se quiser confiabilidade, **o trabalho é seu** (programador).
