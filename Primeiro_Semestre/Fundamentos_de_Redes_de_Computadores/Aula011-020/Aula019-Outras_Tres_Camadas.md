# Camadas de Transporte e Rede

## Transporte

A camada de transporte tem como principal objetivo **garantir a entrega correta dos dados entre processos** em execução na camada de aplicação.

Essa responsabilidade torna a camada de transporte uma das mais complexas do modelo OSI. Para cumprir sua função, ela realiza diversas operações:

### Funções da Camada de Transporte

- **Segmentação e remontagem**  
  Divide os dados da camada de sessão em segmentos menores, atribuindo números de sequência para reordenação correta no destino.

- **Controle de erros fim a fim**  
  Detecta e, se possível, corrige erros que possam ocorrer na comunicação entre processos de origem e destino.

- **Controle de fluxo**  
  Evita que o emissor sobrecarregue o receptor enviando dados além da capacidade de processamento.

- **Controle de conexão**  
  Pode operar de forma orientada à conexão (estabelecendo uma conexão antes da transmissão) ou sem conexão.

- **Endereçamento do ponto de acesso ao serviço**  
  Utiliza **endereços de porta** para garantir que os dados sejam entregues ao processo correto dentro do dispositivo.

- **Controle de congestionamento**  
  Monitora a rede para evitar sobrecarga dos dispositivos intermediários, ajustando o envio de dados quando necessário.

**Resumo:** a camada de transporte garante que os pacotes sejam entregues corretamente, da aplicação de origem até a aplicação de destino, gerenciando os fluxos, erros, conexões e congestionamentos.

---

## Rede

A camada de rede é responsável por **determinar o caminho** dos dados desde a origem até o destino, atravessando dispositivos intermediários.

Enquanto a camada de transporte trata de **comunicação processo a processo**, a camada de rede trata de **comunicação máquina a máquina**.

### Funções da Camada de Rede

- **Endereço lógico**  
  Utiliza endereços lógicos (como endereços IP) para identificar a máquina de destino na rede.

- **Roteamento**  
  Estabelece e gerencia o caminho que os dados seguirão, encaminhando-os de dispositivo em dispositivo até chegar ao destino final.

**Resumo:** a camada de rede cuida da movimentação dos dados entre dispositivos físicos diferentes, garantindo que cada pacote chegue ao equipamento correto.

---

# Comparação: Transporte vs. Rede

| Camada | Comunicação        | Endereço usado    | Responsabilidade principal                      |
|:------:|:-------------------:|:-----------------:|:------------------------------------------------:|
| Transporte | Processo a processo | Endereço de porta | Entrega confiável de dados entre aplicações       |
| Rede       | Máquina a máquina   | Endereço lógico   | Movimentação dos dados através da rede física     |
