# Camadas de Aplicação, Apresentação e Sessão

## Aplicação

A camada de aplicação é a mais próxima do usuário. Alguns serviços fornecidos por ela são:

- Serviço web
- Serviço de correio eletrônico
- Serviço de transferência de arquivos
- Serviço de streaming de áudio e vídeo
- Serviço de compartilhamento de arquivos

Esses serviços são executados por processos de usuários ativos em seus dispositivos.

Além disso, essa camada também realiza tarefas como:
- Tradução de dados
- Criptografia
- Compressão de dados

**Organização** é a palavra-chave da camada de aplicação.

---

## Apresentação

A camada de apresentação garante a **interoperabilidade** entre sistemas heterogêneos, permitindo a comunicação entre dispositivos diferentes (PCs, smartphones, TVs, carros etc.) e sistemas operacionais diversos (Windows, iOS, Linux, etc.).

Funções principais:
- **Conversão de formatos** (tradução dos dados)
- **Compressão de dados**
- **Criptografia**

Essa camada atua como o **tradutor da rede**.

---

## Sessão

Responsável por **organizar a comunicação** entre dispositivos, a camada de sessão permite o estabelecimento, gerenciamento e encerramento de sessões.

Ela fornece dois serviços básicos:

### Controle de Diálogo
- Define quem pode transmitir e quando.
- Pode ser:
  - **Full duplex** (comunicação simultânea nos dois sentidos)
  - **Half duplex** (transmissão alternada)

### Sincronização
- Estabelece **pontos de controle** no fluxo de dados.
- Se ocorrer uma falha na comunicação, o processo de transmissão pode ser retomado a partir do último ponto de controle, não do início.

---
