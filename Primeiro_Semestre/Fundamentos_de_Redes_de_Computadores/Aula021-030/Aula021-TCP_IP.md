# Arquitetura e Evolução do Protocolo TCP/IP

O protocolo TCP/IP desempenhou um papel central na construção da internet como conhecemos hoje.

Criada em 1974 por Vinton Cerf e Robert Kahn (CERF; KAHN, 1974), a arquitetura TCP/IP recebeu esse nome pelos seus dois principais protocolos: **Transmission Control Protocol (TCP)** e **Internet Protocol (IP)**. O objetivo era simples e ambicioso: interligar redes diferentes de forma transparente, criando uma arquitetura robusta e flexível. O TCP/IP acabou se tornando o padrão de fato da comunidade internet.

## Estrutura da Arquitetura TCP/IP

A arquitetura original do TCP/IP foi definida em **quatro camadas**:

1. **Aplicação**
2. **Transporte**
3. **Internet** (também chamada de Rede ou Inter-rede)
4. **Acesso à Rede** (também conhecida como Camada de Enlace, Host-Rede, Intrarrede ou Host-Network)

Ao reduzir o número de camadas em relação ao modelo OSI, algumas funções foram acumuladas:

- As funções de **apresentação** e **sessão** foram incorporadas à **camada de aplicação**.
- As funções de **enlace** e **física** ficaram sob a responsabilidade da **camada de acesso à rede**.

## Relação entre TCP/IP e Modelo OSI

- **Modelo OSI:**  
  Estruturado com foco nas **funcionalidades de cada camada**.

- **Arquitetura TCP/IP:**  
  Focada no **desenvolvimento de protocolos** relativamente **independentes e hierárquicos**, onde protocolos superiores são sustentados pelos inferiores.

A tabela abaixo resume a correspondência:

| Modelo OSI | Arquitetura TCP/IP |
|------------|--------------------|
| Aplicação, Apresentação, Sessão | Aplicação |
| Transporte | Transporte |
| Rede | Internet |
| Enlace, Física | Acesso à Rede |

## Pilha de Protocolos TCP/IP

A expressão **pilha TCP/IP** refere-se ao conjunto de todos os protocolos implementados nesta arquitetura. Esses protocolos são muitos e variados.

A maior parte dos padrões abertos da Internet foi desenvolvida pelo **IETF (Internet Engineering Task Force)**, uma organização internacional aberta, composta por projetistas de rede, operadores, fornecedores e pesquisadores, dedicada à evolução contínua da internet.

