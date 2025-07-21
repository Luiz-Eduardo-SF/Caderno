## 📦 Perda de Pacotes em Redes &#x1F4A9;

### 🚨 Quando ocorre perda de pacotes?

- Se o tráfego está **baixo**, quase nenhum pacote chega ao mesmo tempo → **não forma fila** → praticamente **sem perda**.
- Se o tráfego **aumenta e se aproxima da capacidade da rede**, começa a formar fila, e o **atraso de fila aumenta**.
- Se a **fila (buffer)** enche, **não tem mais espaço** → pacotes **são descartados**.

> 🧠 Um pacote é considerado "perdido" quando entra na rede mas **nunca chega ao destino**. É como se ele tivesse desaparecido no meio do caminho.

---

### 🎯 Impacto da perda nas aplicações

| Tipo de Aplicação           | Tolera Perda? | Impacto da Perda                         |
|----------------------------|---------------|------------------------------------------|
| Transferência de Arquivos  | ❌ Não         | Arquivo corrompido ou incompleto         |
| Streaming (vídeo, áudio)   | ✅ Sim         | Só perde alguns pixels ou frames, suave  |

> No caso de **transferência de arquivos**, o ideal é **retransmitir o pacote perdido**.
> Já em **streaming**, se um pacotinho se perder, o usuário provavelmente **nem percebe**.

---

### 🤔 O dev precisa programar a correção da perda?

**Não precisa!** 😎  
Usando a API certa (tipo um socket TCP), **a própria infraestrutura da rede cuida disso** pra você.

---

## ⏱️ Atraso Fim a Fim &#x1F50C;

Antes a gente viu os atrasos isoladamente (de nó pra nó), mas agora vamos juntar tudo:

> **Atraso fim a fim = soma de todos os atrasos entre a origem e o destino.**

Se os atrasos de fila forem **pequenos**, a aplicação roda de boa.  
Se forem **grandes**, aí começa o problema — principalmente em apps **sensíveis ao tempo** (tipo chamadas, jogos, etc.).

---

### 🛰️ Ferramenta útil: Traceroute (ou `tracert` no Windows) &#x1F5A5;

Serve pra ver:
- **Tempo entre cada salto (roteador)**,
- **Tempo total até o destino**,
- E até quais **roteadores** foram usados no caminho.

#### Como funciona?
1. Você manda pacotes pro destino.
2. Cada roteador pelo qual o pacote passa responde com:
   - Seu nome
   - Endereço IP
   - Tempo de ida e volta (round-trip time)

#### Exemplo:
Roteador 5 (`200.244.19.75`) → tempos de ida e volta: **17ms**, **20ms**, **16ms**

> Esse tempo inclui:
> - Processamento
> - Fila
> - Transmissão
> - Propagação

🎲 Como o atraso de fila é **aleatório**, às vezes o pacote que vai mais longe chega **mais rápido** que um que foi pra um roteador mais próximo.

---

## 📊 Vazão Fim a Fim &#x1F4CA;

- Imagina que o host A está mandando um arquivo **grande** pro host B.
- A **vazão instantânea** é a taxa (em bits/s) em que B está recebendo.
- Se o arquivo tem `F` bits e levou `T` segundos, a **vazão média** é:  
  \[
  \text{Vazão média} = \frac{F}{T} \text{ bits/s}
  \]

---

### 🧠 Comentário:
| Tipo de Aplicação           | Desejo Principal                    |
|----------------------------|-------------------------------------|
| Voz/Chamadas via Internet  | Atraso **baixo** e vazão **mínima** |
| Transferência de Arquivo   | **Alta** vazão, atraso não importa  |

> ⚠️ Mesmo que o cabo tenha alta taxa de transmissão, se **outras pessoas estiverem usando ao mesmo tempo**, a vazão pode cair.

Por exemplo: um **cabo submarino** com vazão alta pode ser o **gargalo** se estiver muito congestionado por vários downloads simultâneos.

---

Próximo tópico, quer que eu faça também nesse estilo? &#x1F9EE;
