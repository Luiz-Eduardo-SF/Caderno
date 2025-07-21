# &#x1F4BB; Aplicações para Ambientes de Nuvem - Google Cloud

## &#x1F680; Desenvolvimento de Aplicações na Nuvem

- Várias tecnologias podem ser usadas ➡️ depende dos **requisitos**.
- O ambiente impacta diretamente: recursos, custo, arquitetura.
- **Na nuvem** ➡️ pagar pelo que consome = necessidade de eficiência.

---

## &#x1F4C8; Aplicativo Nativo da Nuvem (Cloud Native Application)

- Software que usa **recursos como serviço**.
- Arquitetura **desacoplada** ➡️ componentes independentes.
- Benefícios:
  - ✅ Maior agilidade no desenvolvimento.
  - ✅ Adoção de melhores práticas.
  - ✅ Facilita a escalabilidade.

---

## &#x1F4A1; Consumo eficiente na nuvem

- Cobrança: conforme **CPU** e **memória** utilizados.
- Aplicações devem ser:
  - ✅ **Eficientes**: menos consumo.
  - ✅ **Estáveis**: garantir operação contínua.

---

## &#x1F4DD; Arquiteturas de Aplicações

### ✅ **Stateful (com estado)**

- Armazena **dados e lógica** juntos.
- Problemas:
  - ❌ Duplicação complexa ➡️ risco de **inconsistência**.
  - ❌ Dificuldade para escalar ou desligar sem perder dados.
- Exemplo: bancos de dados tradicionais.

---

### ✅ **Stateless (sem estado)**

- Armazena **dados externamente**.
- Apenas cuida da **lógica e processamento**.
- Vantagens:
  - ✅ **Escalabilidade elástica** ➡️ mais cópias sob demanda.
  - ✅ Possibilidade de **escala para zero** ➡️ não gera custo se não for usado.
- Aplicação ideal para ambientes **serverless**.

---

## &#x1F527; Estratégia Serverless

- Não significa **sem servidor**, mas sim:
  - ✅ Infraestrutura **elástica e automatizada**.
  - ✅ Escala automática ➡️ inclusive para **zero**.
  - ✅ Pagamento apenas pelo que for **executado**.
- Requisitos:
  - ✅ **Respostas rápidas** ➡️ ligar o app rapidamente.
  - ✅ **Leveza e portabilidade**.
- Problemas com **stateful**:
  - ❌ Mais pesado.
  - ❌ Tempo de inicialização maior.

---

## &#x1F4E6; Solução Serverless do Google Cloud

- **Cloud Run**: PaaS (Platform as a Service).
- Suporte a várias linguagens:
  - Node.js
  - Python
  - Java
  - Go
- Benefícios:
  - ✅ Foco total na **lógica** da aplicação.
  - ✅ Menos preocupação com a infraestrutura.
  - ✅ **Produtividade** e **agilidade** aumentadas.

---

## &#x1F4CD; Para Aplicações com Estado

- Opções recomendadas no Google Cloud:
  - ✅ **Compute Engine** ➡️ máquinas virtuais.
  - ✅ **Contêineres**.
  - ✅ **Kubernetes** ➡️ automação e orquestração.

---

## &#x1F91D; Resumo Final

| **Arquitetura** | **Vantagens** | **Desvantagens** |
|-----------------|---------------|------------------|
| Stateful | Mantém dados junto com lógica | Difícil escalar, risco de inconsistência |
| Stateless | Escalabilidade, eficiência, portabilidade | Depende de componentes externos para dados |

---

## &#x1F4CA; Impacto no Desenvolvimento

- Aplicações devem ser:
  - ✅ **Preparadas para escalar**.
  - ✅ **Eficientes no consumo**.
  - ✅ **Alinhadas com o negócio**.
- A escolha entre **stateful** ou **stateless** define:
  - ✅ Complexidade.
  - ✅ Custos.
  - ✅ Resiliência.

---

