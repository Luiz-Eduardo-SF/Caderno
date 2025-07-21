# Camadas de Enlace e Física

## Enlace

A camada de enlace garante a **comunicação confiável ponto a ponto** (hop to hop) entre dispositivos adjacentes. Ela atua corrigindo erros que possam ter surgido durante a transmissão e entregando um serviço aparentemente livre de falhas para a camada de rede.

### Funções da Camada de Enlace

- **Controle de erros**  
  Detecta e corrige erros introduzidos pelo meio físico.

- **Controle de acesso ao meio**  
  Coordena quais dispositivos podem transmitir quando o meio é compartilhado.

- **Endereçamento físico**  
  Identifica o próximo nó (dispositivo) no caminho até o destino.

- **Controle de fluxo**  
  Impede que um nó sobrecarregue o outro durante a transmissão.

- **Enquadramento**  
  Encapsula os dados da camada de rede em quadros, delimitando início e fim para correta interpretação.

**Resumo:** a camada de enlace é responsável pela transmissão confiável de dados entre dispositivos adjacentes, nó a nó.

---

## Física

A camada física cuida da **transmissão real dos bits** pelo meio físico, convertendo-os em sinais elétricos, ópticos ou de rádio, conforme o meio utilizado.

### Funções da Camada Física

- **Representação dos bits**  
  Define como os bits são fisicamente representados no meio (ex.: pulsos de luz ou sinais elétricos).

- **Taxa de dados**  
  Estabelece a velocidade de transmissão (ex.: megabits por segundo).

- **Sincronização dos bits**  
  Garante que transmissor e receptor operem na mesma frequência para correta interpretação dos bits.

- **Topologia física**  
  Determina a estrutura de conexão entre os nós (ponto a ponto ou ponto-multiponto).

- **Modo de transmissão**  
  Define se a comunicação será:
  - **Simplex** (um sentido)
  - **Half duplex** (dois sentidos, alternadamente)
  - **Full duplex** (dois sentidos simultaneamente)

---

# Resumo Geral

Ao transmitir informações, os dados percorrem todas as camadas do modelo OSI:

1. **Aplicação** – Interação com o usuário.
2. **Apresentação** – Tradução, compressão e criptografia.
3. **Sessão** – Estabelecimento, gerenciamento e encerramento de sessões.
4. **Transporte** – Entrega de dados entre processos.
5. **Rede** – Entrega de dados entre máquinas.
6. **Enlace** – Entrega de dados entre nós adjacentes.
7. **Física** – Transmissão de bits pelo meio físico.

Cada camada realiza um conjunto de tarefas específicas para garantir a comunicação eficiente e confiável entre dispositivos.