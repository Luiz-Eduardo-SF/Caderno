# &#x1F4E1; Camada de Transporte na Internet

## &#x1F4AC; Pra que serve a camada de transporte?

A camada de transporte tem uma missão clara: garantir que **os dados saiam de uma aplicação no host de origem** e **cheguem até a aplicação certa no host de destino** – com **confiabilidade**, mesmo que as redes físicas sejam diferentes.

---

## &#x1F4C8; Função na arquitetura TCP/IP

- Fornece **serviços para a camada de aplicação**
- Usa os serviços da **camada de rede**
- Em TCP/IP **não existe camada de sessão nem de apresentação**

---

## &#x1F527; Tipos de serviço de transporte

### 1. &#x1F4E9; **Serviço orientado à conexão (TCP)**

- Tem **três fases**: estabelecimento, transferência e encerramento da conexão
- Garante:
  - Entrega ordenada dos pacotes
  - Verificação de erros
  - Retransmissão se necessário
- Ideal para:
  - Transferência de arquivos
  - E-mails
  - Aplicações que **não podem perder dados**

### 2. &#x1F4E4; **Serviço sem conexão (UDP)**

- Não controla erro, ordem ou perda
- É **mais rápido** e com menos overhead
- Ideal para:
  - Jogos online
  - Telefonia IP (VoIP)
  - Streaming de áudio e vídeo
- Nessas aplicações, **atraso é pior que perda de pacote**

---

## &#x2753; Mas por que usar um serviço “menos confiável”?

- **Desempenho!** &#x26A1;&#xFE0F;
- TCP (orientado à conexão) exige verificação e controle → mais lento
- UDP (sem conexão) é simples e leve → mais rápido, menos atraso

---

## &#x1F3AF; Resumo Final

| Tipo de Serviço    | Confiável? | Ordem garantida? | Retransmissão? | Indicado para...             |
|-------------------|------------|------------------|----------------|------------------------------|
| TCP (com conexão) | ✅ Sim     | ✅ Sim           | ✅ Sim         | E-mail, FTP, web, etc.       |
| UDP (sem conexão) | ❌ Não     | ❌ Não           | ❌ Não         | Voz, vídeo, jogos online     |

> ⚠️ A aplicação escolhe o tipo de serviço com base na **prioridade: confiabilidade ou desempenho**

