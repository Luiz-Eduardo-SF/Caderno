# &#x1F6E0;&#xFE0F; Protocolo TCP (Transmission Control Protocol)

## &#x1F4CB; Visão Geral

- TCP é **orientado à conexão**.
- Indicado para **aplicações que precisam de confiabilidade** (ex: web, e-mail).
- Funciona sobre redes **não confiáveis**, como a Internet.
- Utiliza **temporizadores**, **confirmações**, **retransmissões** e **controle de ordem**.

---

## &#x1F4F6; Modelo de Serviço TCP

| Característica     | Explicação |
|--------------------|-----------|
| **Confiável**      | Detecta e corrige perdas ou erros |
| **Orientado à conexão** | Antes de transferir dados, abre-se uma conexão |
| **Full-duplex**    | Envia e recebe dados simultaneamente |
| **Ponto a ponto**  | Comunicação direta entre 2 hosts |
| **Baseado em fluxo** | Os dados são vistos como um fluxo contínuo, não mensagens isoladas |

---

## &#x1F4E1; Como o TCP Transmite?

- **Divide** os dados da aplicação em **segmentos** (máx. ~64KB cada).
- **Envia via datagramas IP**, cada um com cabeçalho e número de sequência.
- **Reorganiza** os segmentos recebidos fora de ordem no destino.
- Se um segmento se perder ou der erro, ele é **retransmitido**.

---

## &#x1F4C4; Cabeçalho TCP

- Tamanho mínimo: **20 bytes**
- Campos importantes:
  - **Porta de origem e destino** (quem está se comunicando)
  - **Número de sequência** (posição no fluxo de dados)
  - **Número de confirmação (ACK)** (confirma recebimento)
  - **Flags de controle** (SYN, ACK, FIN, RST etc.)
  - **Janela** (controle de fluxo)
  - **Checksum** (verificação de erro)

---

## &#x1F50D; Janela Deslizante (Sliding Window)

- Permite **enviar múltiplos segmentos sem esperar ACK** de todos.
- Aumenta a eficiência da transmissão.
- A **janela desliza** conforme os ACKs vão chegando.
- Usado com os algoritmos:

### &#x1F501; Go-Back-N
- Envia vários segmentos.
- Se um falhar, **volta tudo desde o erro**.

### &#x1F504; Selective Repeat
- Mais inteligente.
- Retransmite **apenas os segmentos com erro ou perdidos**.

---

## &#x1F6D1; Erros e Retransmissão

- TCP usa **checksum** para detectar erro.
- Se erro detectado: **segmento é descartado**.
- Sem ACK → TCP **reenvia** o segmento após timeout.

---

## &#x1F4CA; Comparativo com UDP

| Propriedade       | TCP ✅                       | UDP ❌                      |
|------------------|-----------------------------|----------------------------|
| Confiabilidade    | Sim                         | Não                        |
| Orientado à conexão | Sim                      | Não                        |
| Full-duplex       | Sim                         | Depende da aplicação       |
| Controle de fluxo | Sim (janela deslizante)     | Não                        |
| Reordenação       | Sim                         | Não                        |
| Checksum          | Sim                         | Sim                        |
| Exemplo de uso    | HTTP, FTP, E-mail           | DNS, VoIP, jogos online    |

---

## &#x1F4D6; RFCs Importantes

- **RFC 793**: Definição do protocolo TCP
- **RFC 1122**: Requisitos para host com TCP/IP
- **RFC 2018**: Acknowledgement seletivo
- **RFC 2581**: Controle de congestionamento
- **RFC 1323**: Extensões para alta performance

---

## &#x1F4A1; Resumo Final

> O TCP é o protocolo que **garante a entrega correta e ordenada dos dados**, mesmo que o IP, por baixo, seja falho.  
> Tem overhead, mas é a base da **Internet moderna confiável**.  
> Se precisa de controle, segurança e dados certos no destino: **vai de TCP** &#x2705;
