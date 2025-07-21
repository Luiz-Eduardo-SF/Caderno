# &#x1F4E8; Multiplexação e Demultiplexação (Camada de Transporte)

## &#x1F4CB; Conceito Geral

A camada de transporte tem a missão de **ligar várias aplicações da camada de aplicação à rede**, tanto para enviar quanto para receber dados.

- **Multiplexação** = envio de dados de **várias aplicações** para a rede.
- **Demultiplexação** = recebimento dos dados da rede e envio para a **aplicação correta**.

---

## &#x1F4E6; Como isso funciona na prática?

Cada aplicação usa um **endereço de transporte (porta)**.

➡️ Quando um pacote chega no host, o TCP/UDP olha o **número da porta** no cabeçalho para saber qual processo deve receber os dados.

---

## &#x1F5A7; Exemplo real com o Eduardo:

Eduardo está:
- Navegando com o browser
- Acessando o e-mail
- Baixando arquivos

Todos esses apps usam o **TCP** ao mesmo tempo!

### Portas em uso:
| Aplicação              | Porta de origem |
|------------------------|------------------|
| Navegador web          | 11278            |
| Cliente de e-mail      | 25786            |
| Programa de download   | 3709             |

➡️ Cada vez que o TCP recebe dados, ele **sabe qual processo enviar**, pois os segmentos trazem a **porta de destino** no cabeçalho.

---

## &#x1F4C1; Etapas explicadas

### &#x1F4E4; Multiplexação (Hospedeiro de origem)
1. Várias aplicações enviam dados para o TCP.
2. TCP adiciona o **número da porta de origem**.
3. Os dados são enviados encapsulados como segmentos para a rede.

### &#x1F4E5; Demultiplexação (Hospedeiro de destino)
1. Segmentos chegam da rede.
2. TCP examina a **porta de destino** no cabeçalho.
3. Entrega os dados para o processo correto registrado naquela porta.

---

## &#x1F5D2;&#xFE0F; Por que isso é importante?

- Permite **múltiplas aplicações** funcionando ao mesmo tempo na mesma máquina.
- Torna o uso da Internet mais eficiente e escalável.
- Cada app continua funcionando de forma **independente**, mesmo compartilhando a rede.

---

## &#x1F4A1; Resumo da Ópera

| Termo             | Definição                                                                 |
|------------------|---------------------------------------------------------------------------|
| Multiplexação     | Envio de dados de várias apps para a rede (com marcação de porta)         |
| Demultiplexação   | Entrega dos dados recebidos para a app correta (com base na porta destino)|
| Porta             | Endereço de transporte que identifica uma aplicação específica            |
| Cabeçalho         | Contém a porta de origem e destino, entre outros dados                    |

> Sem multiplexação/demultiplexação, não daria pra rodar vários apps conectados ao mesmo tempo!

