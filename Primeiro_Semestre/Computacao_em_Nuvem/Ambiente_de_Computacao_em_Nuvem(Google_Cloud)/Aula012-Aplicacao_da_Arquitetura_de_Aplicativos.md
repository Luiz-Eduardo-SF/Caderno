# &#x1F4BB; Aplicação da Arquitetura de Aplicativos na Google Cloud

## &#x1F3E0; Conceito: Arquitetura Nativa de Nuvem

- ✅ **Cloud Native Architecture**: arquitetura adaptada às tecnologias oferecidas como serviço (SaaS, PaaS, etc.).
- ➡️ **Objetivos**:
  - Melhor desempenho.
  - Escalabilidade automática.
  - Agilidade no desenvolvimento.

---

## &#x1F6D2; Cenário: E-commerce

### ➡️ Componentes principais:

| **Função**               | **Desafios**                                  | **Solução**                            |
|-------------------------|-----------------------------------------------|----------------------------------------|
| Página do Produto       | Alta demanda e consistência de dados          | Cloud SQL (Banco de Dados gerenciado) |
| Finalização da Compra   | Integração com múltiplos sistemas externos     | Comunicação assíncrona com Pub/Sub    |

---

## &#x1F4D6; **1. Página do Produto**

- ✅ Exibe: Nome, descrição, preço, estoque.
- **Problemas**:
  - Alta demanda simultânea ➡️ risco de **indisponibilidade**.
  - **Inconsistência** de dados.
  
➡️ **Solução**:
- Banco de dados **escalável e gerenciado**.
- **Google Cloud SQL**:
  - Banco relacional.
  - Alta disponibilidade.
  - Dispensa gerenciamento manual da infraestrutura.

---

## &#x1F4B3; **2. Finalização de Compras (Checkout)**

- ✅ Processo crucial para o negócio.
- **Dependências**:
  - Notificação a sistemas financeiros.
  - Baixa de estoque.
  - Dados para entrega.
  - Emissão de nota fiscal pública.

➡️ **Problemas**:
- Comunicação **síncrona** → depende que todos os sistemas estejam **ativos simultaneamente**.
- Caso algum falhe → **impacta** diretamente a **experiência do cliente**.

---

## &#x1F4E2; **Solução: Comunicação Assíncrona**

- ✅ Utiliza **intermediário** para gerenciar a comunicação entre sistemas.
- Não depende de execução simultânea.
- Se um sistema estiver indisponível → a mensagem é **armazenada** e processada posteriormente.

➡️ **Tecnologia: Google Cloud Pub/Sub**
- Mensageria assíncrona **gerenciada**.
- **Desacopla** serviços → melhora a **resiliência**.
- Ideal para processos como checkout.

---

### &#x1F4C8; Como funciona:

1. Cliente finaliza compra.
2. Sistema dispara mensagem → **Pub/Sub**.
3. Pub/Sub distribui para:
   - Sistema de emissão de nota fiscal.
   - Sistema de entrega.
   - Sistema de estoque.

➡️ Caso algum sistema esteja **indisponível**, o Pub/Sub **armazena** a mensagem e reenvia quando possível.

---

## &#x1F6E0;&#xFE0F; **Benefícios da Arquitetura Assíncrona:**

- ✅ **Desacoplamento** dos sistemas.
- ✅ **Escalabilidade**.
- ✅ **Resiliência** a falhas.
- ✅ Melhor **experiência do usuário**.

---

## &#x1F47E; **Serverless na Google Cloud**

- **Arquitetura Serverless** = não se preocupa com a infraestrutura → foco total no **código**.
- Exemplo: Usar **Cloud Functions** para executar pequenas partes do processo automaticamente.
- Utilizada quando:
  - Queremos **escala automática**.
  - Precisamos **reduzir custos**.
  - Desejamos **agilidade** no desenvolvimento.

---

## &#x1F4FD;&#xFE0F; No vídeo:

- ✅ Diferença entre **comunicação síncrona** e **assíncrona**.
- ✅ Quando e como aplicar **arquitetura serverless**.

---

## &#x1F4A1; Resumo:

| **Tecnologia** | **Função** |
|----------------|------------|
| Cloud SQL      | Banco de dados gerenciado e escalável |
| Pub/Sub        | Mensageria assíncrona e desacoplamento |
| Serverless     | Execução sem gerenciar infraestrutura |

---