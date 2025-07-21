# 🌐 Modelo em Camadas

## Conceito Geral

A **internet** é um conjunto de redes de computadores que permite a troca de informações entre dispositivos.  
Essa troca precisa seguir **regras de comunicação** — os **protocolos de rede** — que garantem:
- Confiabilidade
- Segurança
- Eficiência
- Entrega correta no tempo certo

Resolver tudo isso de uma vez seria insano. Então, os engenheiros antigos aplicaram a técnica de **Dividir para Conquistar**:
- **Dividir** o problema gigante em pequenos problemas
- **Resolver** cada parte separadamente
- **Combinar** as soluções para resolver o todo

## Organização em Camadas

A divisão foi feita empilhando **camadas**, onde:
- Cada camada é responsável por uma função específica
- Camadas são numeradas de baixo (1) para cima (n)
- **Camada superior** usa os serviços da **camada inferior**

Exemplo:
- Camada 3 usa os serviços da camada 2
- Camada 2 oferece serviços para a camada 3

## 🧩 Elementos da Camada

Cada camada é composta por três elementos principais:

### 1. Serviço
- **O que** a camada faz (sem se preocupar com o como).
- Exemplo: verificação de erros, identificação de computadores.

### 2. Protocolo
- **Como** a camada faz.
- É a implementação das regras para oferecer o serviço.
- > "Um conjunto de camadas e protocolos é a arquitetura de rede, e o conjunto de protocolos utilizados por um sistema é uma pilha de protocolos."  
> — (TANENBAUM, 2011, p.38)

### 3. Interface
- É o **ponto de comunicação** entre duas camadas vizinhas.
- Permite que uma camada use os serviços da outra imediatamente inferior.

## 📍 Onde são implementados?

- **Protocolos e interfaces** podem estar:
  - Em **hardware** (ex.: placa de rede)
  - Em **software** (ex.: sistema operacional)

## Conceitos Importantes

### Comunicação Vertical
- Relaciona-se entre camadas diferentes no mesmo dispositivo.
  
### Comunicação Horizontal
- Relaciona-se entre camadas **iguais** em dispositivos **diferentes**.

---
