# 📦 Encapsulamento

## 🤔 Como ocorre a comunicação horizontal?

- A comunicação **horizontal** é **virtual**.
- A camada 2 da origem **não envia** dados diretamente para a camada 2 do destino.
- Em vez disso, ela **prepara** o dado, adicionando informações específicas chamadas **cabeçalhos**.

---

## 🧩 O que é o processo de encapsulamento?

- **Encapsulamento** = Adicionar um **cabeçalho** a cada passagem por uma camada.
- Cada camada:
  - Recebe o dado da camada superior pela **interface**.
  - **Adiciona seu próprio cabeçalho**.
  - Encaminha para a camada inferior.

Exemplo prático:
1. Camada 4 (transporte) recebe o dado da camada 5 (aplicação), adiciona seu cabeçalho.
2. Camada 3 (rede) recebe o pacote da camada 4, adiciona **outro** cabeçalho.
3. Camada 2 (enlace) faz o mesmo.
4. Camada 1 (física) transmite os bits pelo meio físico.

---

## 🔄 Processo inverso: Desencapsulamento

- No **destino**, o processo é **revertido**:
  - Camada 1 lê os bits e repassa o dado para cima.
  - Cada camada **remove** o seu próprio cabeçalho.
  - Até que o dado original chegue à aplicação do usuário.

---

## ⚡ Atenção: Criação da PDU

- Quando ocorre o encapsulamento, é criada uma **PDU** (*Protocol Data Unit*).
- **PDU** = Dados recebidos da camada superior + Cabeçalho da camada atual.

Tabela exemplo:

| Camada | Nome da PDU | Exemplo |
|:------|:------------|:--------|
| Aplicação | Dados | HTTP, FTP |
| Transporte | Segmento | TCP, UDP |
| Rede | Pacote | IP |
| Enlace | Quadro (Frame) | Ethernet |
| Física | Bits | 0 e 1 |

---

## 📚 Entendendo na prática

- **Desvantagem**:
  - Cada cabeçalho adicionado **aumenta** o tamanho do dado.
  - Resultado: **Maior tráfego** na rede.

- **Vantagens**:
  - **Modularização**: Facilita o desenvolvimento e manutenção.
  - **Atualização de protocolos**: Pode mudar um protocolo sem alterar toda a pilha.
  - **Evolução da tecnologia de redes**: Sem modularização, a internet como conhecemos **não existiria**.

---
