# 📦 Protocolo DHCP e ICMP – Endereçamento e Controle na Rede &#x1F4E1;

---

## 🔧 DHCP – Dynamic Host Configuration Protocol &#x1F4AC;

### 📌 Objetivo:
Automatizar a configuração de endereços IP e outros parâmetros de rede.

### 🎯 Parâmetros que um hospedeiro precisa:
- Endereço IP 🧾
- Máscara de sub-rede 🪤
- Gateway padrão 🌐
- Servidor DNS 🔍

---

## 🛠️ Tipos de configuração DHCP:

| Tipo | Descrição |
|------|-----------|
| Manual | Admin define IP fixo por dispositivo |
| Automática | IP alocado uma vez e mantido permanentemente |
| Dinâmica | IP é **emprestado por tempo limitado** (mais comum) ⏳ |

---

## 🔁 Funcionamento do DHCP – Etapas do Ciclo:

1. **INICIALIZA** 🛑  
   Cliente envia `DHCPDISCOVER` (broadcast) na porta UDP 67.

2. **SELECIONA** &#x1F50E;  
   Servidores respondem com `DHCPOFFER`.

3. **SOLICITA** &#x1F4E8;  
   Cliente escolhe uma oferta e envia `DHCPREQUEST`.

4. **LIMITE** 🔐  
   Servidor responde com `DHCPACK` e aloca o IP temporariamente.

5. **RENOVA** 🔄  
   Cliente tenta renovar o IP antes do tempo acabar com novo `DHCPREQUEST`.

6. **VINCULA NOVAMENTE** 🪢  
   Se não houver resposta ao renovar, tenta contato com **outros servidores**.

7. **RELEASE** ✂️  
   Se não precisar mais do IP, envia `DHCPRELEASE` e volta ao estado INICIALIZA.

---

## ⏰ Temporizadores (no estado LIMITE):

- **Renovação**: metade do tempo de alocação.
- **Revinculação**: 87,5% do tempo.
- **Fim da alocação**: se passar disso e não renovar ➡️ perde o IP.

---

## ⚠️ ICMP – Internet Control Message Protocol &#x1F6A7;

### 🎯 Objetivo:
Notificar **erros**, **controle de tráfego** e **verificação de acessibilidade**.

### 🚚 Como funciona:
Mensagens ICMP são **transportadas por datagramas IP**. É o protocolo por trás do comando `ping`.

---

## 🧾 Tipos de mensagens ICMP mais comuns:

| Tipo | Descrição |
|------|-----------|
| `Destination Unreachable` 🚫 | Destino inalcançável. IP errado ou rede falhou. |
| `Time Exceeded` ⏳ | TTL expirou. Pode indicar loop ou congestionamento. |
| `Parameter Problem` ⚙️ | Cabeçalho IP inválido. Erro de configuração. |
| `Source Quench` 🧊 | Hospedeiro está enviando dados demais (evitar flood). |
| `Redirect` 🔁 | Roteador alerta que o caminho pode estar errado. |
| `Echo Request` 📢 | Verifica se o host está online (ping). |
| `Echo Reply` 📬 | Resposta ao ping. |
| `Timestamp Request` 🕓 | Solicita hora de envio. |
| `Timestamp Reply` ⏱️ | Resposta com hora de ida e volta. |

---

## 🧠 Resumo Rápido:

- **DHCP** automatiza entrega de IPs e outros configs de rede.
- **ICMP** serve pra avisar sobre problemas e verificar conectividade.
- Ambos são **essenciais para redes modernas** e estão ativos em quase todo ambiente conectado.

---

