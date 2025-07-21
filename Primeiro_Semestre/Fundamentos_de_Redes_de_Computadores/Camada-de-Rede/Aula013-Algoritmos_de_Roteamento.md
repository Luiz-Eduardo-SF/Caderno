## &#x1F4BB; Redes de Computadores - Algoritmos de Roteamento

### &#x1F4C1; Conceito Geral

Roteadores usam **algoritmos de roteamento** para montar as **tabelas de repasse**, que indicam o melhor caminho para enviar pacotes pela rede. Esses algoritmos compartilham informações sobre o estado da rede e constroem a **árvore de escoamento** (sink tree) com base nesses dados.

---

### &#x1F4C4; Tipos de Algoritmos de Roteamento

#### &#x1F7E2; Não Adaptativos (Estáticos)
- Definidos na inicialização da rede.
- Não consideram mudanças na topologia ou tráfego.
- Exemplo: **Roteamento por caminho mais curto (Dijkstra)**.

#### &#x1F7E1; Adaptativos (Dinâmicos)
- Atualizam rotas em tempo real com base no tráfego e falhas.
- A tabela de rotas muda conforme o estado da rede.
- Exemplo: **RIP, OSPF**.

---

### &#x1F4CA; Classificações Adicionais

#### &#x1F310; Global
- O roteador conhece toda a topologia da rede.
- Usa estado de enlace (link-state).
- Exemplo: **OSPF**.

#### &#x1F46F; Descentralizado
- O roteador só conhece seus vizinhos.
- Usa vetor de distância (distance-vector).
- Exemplo: **RIP**.

---

### 📐 Roteamento por Caminho Mais Curto (Dijkstra)
- Mede o menor caminho com base em alguma **métrica** (saltos, largura de banda, tráfego, etc).
- Utiliza um **grafo** da rede.
- Cada nó representa um roteador.
- Cálculo local por cada roteador com base em dados globais.

---

### 🔁 Roteamento por Vetor de Distância (RIP)

- Cada roteador mantém uma **tabela de distância** com o melhor caminho conhecido.
- Tabelas são atualizadas por trocas com os **vizinhos**.
- O algoritmo é iterativo e converge com o tempo.
- Fórmula:

  dx(y) = minv{c(x,v) + dv(y)}

- Baseado no **Princípio da Otimização de Bellman**.

---

### ⚖️ Roteamento por Estado de Enlace (OSPF)

1. Roteador **descobre seus vizinhos** (pacote HELLO).
2. **Mede o custo** das conexões (ex: pacotes ICMP ECHO).
3. **Gera um pacote** com seus estados de enlace.
4. **Inunda a rede** com esse pacote.
5. Cada roteador **reconstrói o grafo completo**.
6. Executa localmente o **algoritmo de Dijkstra**.

Controle com:
- Número de sequência 🆔
- Idade do pacote ⏳

---

### 🗺️ Roteamento Hierárquico

- Divide a rede em **regiões**.
- Cada roteador conhece:
  - Toda a sua região 🏠
  - Apenas rotas gerais para as outras 🌍
- Reduz o tamanho das tabelas de roteamento.
- Pode aumentar a rota em alguns casos.

Exemplo:
- Tabela completa: 16 entradas 📄
- Tabela hierárquica: 7 entradas 🧾

---

### 🖥️ Protocolos Associados

| Protocolo | Tipo | RFC |
|----------|------|-----|
| **RIP**  | Vetor de distância | RFC 1058 / 2453 |
| **OSPF** | Estado de enlace   | RFC 2328 |
| **BGP**  | Roteamento hierárquico (externo) | RFC 4271 |

---

### ✅ Conclusão

- 🔄 Algoritmos dinâmicos são essenciais para redes modernas.
- 🧠 Cada tipo resolve um problema específico.
- 🚀 OSPF é mais eficiente, mas mais complexo que RIP.
- 🌐 BGP é crucial para o funcionamento da **Internet global**.

---
