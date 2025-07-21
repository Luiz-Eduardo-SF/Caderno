# &#x1F4BB; RESUMO – Camada de Rede (Modelo OSI)

## &#x1F3E0; Onde ela está?

- Fica **acima da camada de enlace** e **abaixo da camada de transporte** no modelo OSI.
- Usa os serviços da camada de enlace (comunicação entre vizinhos) para fazer a **comunicação fim a fim** entre hospedeiros distantes.

---

## &#x1F4CA; Objetivo principal:

➡️ Permitir que **dados cheguem de um hospedeiro até outro**, independentemente da sua localização na rede.

---

## 🧩 Funções principais da camada de rede:

1. **Endereçamento global**:
   - Usa **endereços válidos na rede toda** (como IPs).
2. **Roteamento**:
   - Define o **melhor caminho** para o pacote seguir até o destino.

---

## &#x1F4E6; O que ela manipula?

- A unidade de dados da camada de rede é o **pacote**.
- Pacotes transportam os **segmentos** vindos da camada de transporte.

---

## ✂️ Divisão dos dados:

- Se os dados forem grandes demais, a **camada de transporte** os divide.
- Cada pedaço vai em um **pacote separado** da camada de rede.

---

## 🛣️ Roteamento: como funciona?

- Cada **roteador/hospedeiro intermediário** consulta uma **tabela de roteamento**.
- Ela indica por qual **interface de rede** o pacote deve sair.
- O objetivo é entregar o pacote ao próximo salto (roteador ou destino final).

---

## &#x1F3C1; Quando o pacote chega ao destino:

- A camada de rede verifica o **endereço de destino**.
- Se o destino for aquele hospedeiro:
  - Ela entrega os dados à **camada de transporte**.

---

## 🧠 O que a camada de rede precisa saber?

- A **topologia da rede** (o desenho das conexões).
- As **rotas disponíveis** (evitando congestionamento).
- A forma de **interligar sub-redes diferentes**.

---

## 🧰 Conceitos importantes:

- **Hospedeiro (host)**: qualquer dispositivo conectado à rede (PC, celular, impressora).
- **Sub-rede**: divisão lógica dentro de uma rede maior.
- **Interface de rede**: ponto de conexão à rede (placa de rede, Wi-Fi).
- **Tabela de repasse/roteamento**: define para onde enviar cada pacote baseado no IP destino.

---
