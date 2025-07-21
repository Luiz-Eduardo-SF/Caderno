# 🌐 Protocolo IPv4 (Internet Protocol version 4)

## 📄 Definição
- IPv4 é o protocolo da **camada de rede** usado para enviar pacotes (datagramas) entre dispositivos.
- Definido pela **RFC 791**, com atualizações nas RFCs **1349**, **2474** e **6864**.
- Cada pacote é **independente** dos outros (sem conexão).
- Pacotes com mesma origem/destino podem seguir por **rotas diferentes**.

## 📦 Datagramas IP
- É a **unidade de transmissão de dados** do IP.
- Composto por:
  - **Cabeçalho** (header): contém dados como IP de origem/destino, TTL, protocolo, etc.
  - **Dados (payload)**: informação a ser entregue à camada de transporte (ex: TCP/UDP).
- Cabeçalho:
  - **Parte fixa**: 20 bytes.
  - **Parte opcional**: tamanho variável.

## 🧩 Fragmentação
- Às vezes o datagrama IP é **grande demais** pra passar por uma rede física.
- Cada rede tem um **MTU (Maximum Transmission Unit)** que define o **tamanho máximo** do pacote.
- Se ultrapassar, o pacote será **fragmentado**.
  - Cada **fragmento vira um novo datagrama** com seu próprio cabeçalho.
  - Fragmentação pode acontecer **em qualquer roteador** no caminho.
  - A **remontagem** dos fragmentos ocorre **somente no destino**.

## 📌 Importante
- Fragmentar = dividir o datagrama pra caber no MTU da rede.
- MTU é **diferente de rede pra rede**.
- Fragmentos **não são entregues separados**, o IP do destino precisa **reconstruir** o datagrama.

## ✅ Resumo Final
- IPv4 é o motor de entrega dos dados pela Internet.
- Usa datagramas independentes, que podem ser fragmentados e seguir rotas diferentes.
- Cabe ao destino remontar os dados &#x1F4E6;

