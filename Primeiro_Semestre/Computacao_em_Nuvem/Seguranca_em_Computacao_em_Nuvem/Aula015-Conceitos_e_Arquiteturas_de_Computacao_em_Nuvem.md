# 🏗️ Conceitos e Arquiteturas de Computação em Nuvem — CSA

## 📚 Estrutura conceitual:
➡️ Define computação em nuvem como:  
✅ "Novo modelo operacional e conjunto de tecnologias para gerenciar **conjuntos de recursos compartilhados**".

➡️ Envolve:  
✅ **Tecnologias**  
✅ **Modelos de operação**  
✅ **Modelos de negócio**  
✅ **Paradigmas**

➡️ Base prática:  
✅ Conjunto de **processadores** e **memórias** operando juntos (resource pooling) via **virtualização**.

---

## 🗣️ Definições importantes:  
➡️ **Usuário (cliente):** quem requisita e usa recursos.  
➡️ **Provedor:** quem entrega os recursos.  
(*Conforme NIST*)

---

## 🔑 Técnicas-chave:  
✅ **Abstração:** separa recursos físicos → pool virtual.  
✅ **Orquestração:** monta e entrega o pool ao cliente.  

➡️ Evolução da virtualização → antes: só abstração, agora: abstração + orquestração.  

---

## 🧱 Conceitos críticos:

➡️ **Segregação:** divide recursos entre grupos.  
➡️ **Isolamento:** impede que grupos vejam/modifiquem ativos uns dos outros.  
➡️ **Multilocação:** combinação de segregação + isolamento → não apenas entre empresas, mas também dentro de uma mesma organização.

---

## 🌍 Modelagem da CSA:  
➡️ Adota modelo do **NIST** e da **ISO/IEC 17788:2014**.  
➡️ Cria **fundamentos** para decisões seguras e entendimento de modelos complexos.  
➡️ Serve como **metamodelo** para provedores adaptarem seus serviços.

---

# 🏗️ Arquitetura lógica — Camadas:

## ⚙️ 1. Infraestrutura  
➡️ Componentes físicos: **computação**, **rede**, **armazenamento**.  
➡️ Base do sistema.

## 🔗 2. Metaestrutura  
➡️ **Protocolos** e **mecanismos** que ligam a infraestrutura ao resto.  
➡️ Permite gerenciamento e configuração.

## 🛠️ 3. Appliestrutura  
➡️ Aplicativos e **serviços de plataforma** (PaaS, filas, IA, notificações).  
➡️ Nível mais **abstrato**.

## 📁 4. Infoestrutura  
➡️ Dados e informações armazenadas: **banco de dados**, **arquivos** etc.

---

# 🛡️ Segurança nas camadas:  

➡️ Varia conforme a camada, mas sempre com foco em:  
✅ **Confidencialidade**  
✅ **Integridade**  
✅ **Disponibilidade**  

➡️ **Metaestrutura** → maior diferença entre computação tradicional e nuvem → inclui mecanismos de **gerenciamento**.  
➡️ **Multilocação** → característica diferenciadora na infraestrutura da nuvem.

---

# 📊 Modelos de segurança recomendados pela CSA:  

✅ **CSA Enterprise Architecture**  
✅ **CSA Cloud Controls Matrix**  
✅ **NIST SP 500-299** → Cloud Computing Security Reference Architecture  
✅ **ISO/IEC FDIS 27017** → Código de práticas para segurança em serviços de nuvem

---

# 📝 Processo de gestão de segurança na nuvem — CSA:

1️⃣ **Identificar** requisitos de segurança e conformidade.  
2️⃣ **Selecionar** provedor, serviço e modelo de implantação.  
3️⃣ **Definir** a arquitetura.  
4️⃣ **Avaliar** controles de segurança.  
5️⃣ **Identificar** lacunas de controle.  
6️⃣ **Projetar** e **implementar** controles para fechar as lacunas.  
7️⃣ **Gerenciar** mudanças ao longo do tempo.

---

# 🗂️ Classificação dos demais domínios:

➡️ **Governança:**  
✅ Questões **estratégicas** e **políticas**.

➡️ **Operação:**  
✅ Questões **táticas** e de **implementação** na arquitetura.

---

## ✅ Resumo rápido:
➡️ Estrutura → baseada em **camadas**: Infra, Meta, Appliestrutura e Info.  
➡️ **Multilocação** → central para segurança.  
➡️ Processo claro de **gestão de segurança**.  
➡️ CSA → segue e recomenda normas **NIST** e **ISO**.
