# &#x1F4BB; Resumo - Encaminhamento de Pacotes e Roteamento

## &#x1F4CA; Função da Camada de Rede
- Levar pacotes do **hospedeiro origem** até o **hospedeiro destino**.
- Pode envolver **vários roteadores** até chegar no destino final.
- Usa **algoritmos de roteamento** para decidir a melhor saída pra cada pacote.

---

## &#x1F6E0;&#xFE0F; Tipos de Redes
- **Datagrama**: decisão de rota é tomada para *cada pacote*.
- **Circuito virtual**: decisão de rota feita *só no início da conexão*.

---

## &#x1F4A1; Princípio da Otimização de Bellman (1957)
> Se B está no caminho ótimo entre A e C, então o caminho de B a C também é ótimo.
- Com isso, podemos montar uma **árvore de escoamento** (*sink tree*), com o **destino como raiz**.

---

## &#x1F6A7; Roteamento pelo Caminho Mais Curto
- Representamos a rede como um **grafo**.
- Cada **nó = roteador** e cada **arco = enlace**.

### Unidades métricas para calcular o “melhor caminho”:
- **Saltos (hops)**: quantidade de enlaces.
- **Distância geográfica**.
- **Tráfego** ou **tempo de resposta**.
- **Custo** (largura de banda, filas, atrasos etc.).

---

## &#x1F522; Algoritmo de Dijkstra (1959)
> Encontra o menor caminho de um ponto para todos os outros da rede.

### Funcionamento passo a passo:
1. Marcar o **nó inicial como permanente**.
2. Calcular os **custos até os vizinhos**.
3. Marcar o **vizinho de menor custo como permanente**.
4. Repetir até todos os nós serem permanentes.
5. Atualizar os caminhos se encontrar um mais barato durante o processo.

### Exemplo importante:
- Se um nó já tinha um custo X, mas ao passar por outro nó o custo total fica menor, ele é **recalculado** e atualizado.

---

## &#x1F4CB; Conclusão
- O roteamento precisa ser inteligente pra garantir que os pacotes cheguem rápido, com segurança e sem desperdício de recursos.
- Dijkstra é um algoritmo **eficiente e confiável** pra redes onde se busca o melhor caminho de forma **determinística**.
