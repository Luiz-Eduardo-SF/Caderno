# &#x1F5A5;&#xFE0F; Máquinas Virtuais em Ambientes Google Cloud

## &#x1F4BB; O que é uma Máquina Virtual (VM)?

- Uma VM simula um **computador físico**: CPU, memória, armazenamento, rede.
- A diferença: ela é **virtualizada**, ou seja, várias VMs podem rodar no mesmo hardware físico.
- Permite criar **diversas aplicações** e rodar **diferentes sistemas operacionais** no mesmo equipamento.

---

## &#x1F527; Compute Engine: IaaS do Google Cloud

- O Google Cloud oferece VMs como **IaaS (Infrastructure as a Service)**.
- Serviço: **Compute Engine**.
- Permite escolher a VM ideal conforme os **requisitos de recursos**.

---

## &#x1F5C3;&#xFE0F; Estrutura de Classificação

### ✅ **Família de Máquinas**
- Conjuntos otimizados para **cargas de trabalho específicas**.
- Ex.: uso geral, otimização de memória, alta performance.

### ✅ **Série**
- Classificação por **geração**:  
  Ex.: N1 (mais antiga) ➡️ N2 ➡️ N3 (mais nova).

### ✅ **Tipo de Máquina**
- Configurações **predefinidas** dentro da série.  
- Caso não sirvam ➡️ **máquina personalizada**.

---

## &#x1F4CA; Tabela Resumida: Famílias de Máquinas Virtuais

| **Tipo de Uso** | **Família** | **Objetivo** | **Exemplos** |
|-----------------|-------------|--------------|--------------|
| Econômico | E2 | Computação básica, menor custo | Web apps, front-end, bancos de dados pequenos |
| Equilibrado | N2, N2D, N1 | Desempenho e preço balanceados | APIs, microsserviços, streaming |
| Escalabilidade | Tau T2D, T2A | Melhor p/ **escalabilidade horizontal** | Microsserviços em containers, caches |
| Memória Otimizada | M3, M2, M1 | **Ultra memória** | Bancos de dados como MS SQL Server |
| CPU Otimizada | C2, C2D | **Alta performance de CPU** | HPC, games, IA |
| Aceleradores | A2 | **Alto desempenho** | Treinamento de ML, computação paralela |

---

## &#x1F4A1; Exemplo Prático

- Criar uma VM Linux com **8 CPUs** e **4 GB de RAM**.
- Se o servidor em SP falhar (ex.: queda de energia), a responsabilidade ➡️ **Google** (infraestrutura).
- Se a aplicação precisar de **8 GB de RAM**, quem resolve ➡️ **Usuário** (gestão de recursos).

---

## &#x1F4CB; Vantagens das VMs no Google Cloud

- ✅ **Flexibilidade**: cria, deleta, recria rapidamente.
- ✅ **Customização**: instala o que quiser, como quiser.
- ✅ **Eficiência**: adapta os recursos conforme necessidade.
- ✅ **Diversidade**: escolha entre múltiplos tipos e séries.

---

## &#x1F6E0;&#xFE0F; Gerenciamento: Quem cuida de quê?

| **Responsabilidade** | **Google** | **Usuário** |
|----------------------|------------|-------------|
| Hardware | ✅ | ❌ |
| Infraestrutura física | ✅ | ❌ |
| Consumo de recursos | ❌ | ✅ |
| Instalação de software | ❌ | ✅ |
| Segurança física | ✅ | ❌ |
| Segurança do software | ❌ | ✅ |

---

## &#x1F4D6; Conclusão

- VMs são **versáteis**, **eficientes** e **personalizáveis**.
- Google cuida da **infraestrutura física**.
- Usuário cuida da **configuração**, **instalação** e **monitoramento**.

---