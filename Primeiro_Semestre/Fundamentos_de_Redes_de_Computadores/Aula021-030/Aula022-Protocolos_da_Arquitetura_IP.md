# Protocolos da Arquitetura TCP/IP

## Camada de Aplicação

Engloba os serviços das camadas de Aplicação, Apresentação e Sessão do modelo OSI.

### Principais Serviços e Protocolos

| Serviço                     | Protocolo           |
|------------------------------|---------------------|
| Web                          | HTTP, HTTPS         |
| Correio Eletrônico           | SMTP, POP, IMAP     |
| Serviço de Nomes             | DNS                 |
| Transferência de Arquivos    | FTP, TFTP           |
| Áudio/Vídeo em Tempo Real    | RTP                 |
| Configuração Automática      | DHCP                |

### Arquiteturas

- **Cliente-Servidor:** Cliente requisita serviços do servidor (ex.: navegador acessando site).
- **Peer-to-Peer (P2P):** Comunicação direta entre dispositivos (ex.: compartilhamento de arquivos).

> Na camada de aplicação, os processos trocam **mensagens** (PDU da aplicação).

---

## Camada de Transporte

Responsável pela entrega de dados processo a processo.

### Protocolos Principais

- **TCP (Transmission Control Protocol):**
  - Orientado à conexão.
  - Controle de erro, fluxo e congestionamento.
  - Reordena segmentos.
  - Alta confiabilidade.

- **UDP (User Datagram Protocol):**
  - Sem conexão.
  - Sem controle de erros ou reordenação.
  - Ideal para aplicações que toleram perdas e exigem rapidez (ex.: videoconferência).

---

## Camada Internet (ou Camada de Rede)

Objetivo: Entregar dados de máquina a máquina através da rede.

### Protocolo Principal

- **IP (Internet Protocol)**  
  Define endereços lógicos (IP) e roteamento de pacotes (datagramas).

### Características do Serviço

- **Melhor esforço:** Não garante entrega, ordem ou ausência de erros.  
  A responsabilidade de correção é das camadas superiores.

### Outros Protocolos Importantes

- **ICMP:** Sinalização e mensagens de erro (ex.: ping).
- **ARP:** Tradução de endereços IP para endereços físicos (MAC).
- **IGMP:** Gerenciamento de grupos multicast.

---

## Camada de Acesso à Rede

Responsável por conectar dispositivos físicos ao meio de transmissão.

- Integra funções das camadas de Enlace e Física do modelo OSI.
- A arquitetura TCP/IP **não especifica protocolos** para essa camada.
- **IEEE 802** define os padrões usados aqui (ex.: Ethernet, WiFi).

---

# Comparação Modelo OSI x Arquitetura TCP/IP

| Modelo OSI                  | Arquitetura TCP/IP       |
|-------------------------------|--------------------------|
| Aplicação, Apresentação, Sessão| Aplicação               |
| Transporte                   | Transporte               |
| Rede                         | Internet                 |
| Enlace, Física               | Acesso à Rede            |

---

# Evolução dos Protocolos TCP/IP

- **Antes:** Protocolos focados em texto, baixo volume de dados (ex.: Web textual de Tim Berners-Lee).
- **Hoje:** Protocolos robustos, suporte a vídeo, segurança, transações financeiras.  
  O HTTP, por exemplo, evoluiu para HTTPS binário, aumentando eficiência e segurança.

---
