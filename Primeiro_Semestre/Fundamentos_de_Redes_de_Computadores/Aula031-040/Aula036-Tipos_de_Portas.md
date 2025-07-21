# &#x1F4BB; RESUMO – Tipos de Portas (TCP/UDP)

## &#x1F6E0; O que são portas?

- Uma **porta** identifica **qual aplicação** deve receber os dados dentro de um dispositivo.
- O endereço IP **leva até o computador**. A **porta** diz **qual programa** deve receber o dado.
- São números de **16 bits** (0 a 65535).
  
---

## &#x1F50D; Como saber qual porta usar?

1. A aplicação **se registra** dinamicamente ao iniciar.
2. Ou já se conhece **uma porta fixa e padrão** (porta conhecida).

---

## 🔒 Portas conhecidas (well-known ports)

- Portas padronizadas por serviços comuns.
- Listadas na **RFC 3232**.
- Estão entre os números **0 e 1023**.
- Permitem que o cliente saiba **de antemão** em qual porta conversar com o servidor.

---

## 🔢 Exemplos de portas conhecidas:

| Porta | Aplicação   |
|-------|-------------|
| 7     | echo        |
| 20    | ftp-data    |
| 21    | ftp         |
| 22    | ssh         |
| 23    | telnet      |
| 25    | smtp        |
| 53    | domain (DNS)|
| 69    | tftp        |
| 80    | http        |
| 110   | pop-3       |
| 119   | nntp        |
| 161   | snmp        |
| 162   | snmp-trap   |
| 443   | https       |

---

## &#x1F4AD; Curiosidade

- O repositório oficial das portas está em:  
  **Service Name and Transport Protocol Port Number Registry**  
  (mantido pela IANA – Internet Assigned Numbers Authority).

---
