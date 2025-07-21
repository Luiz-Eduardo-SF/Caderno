# ☁️ Opções de Computação na AWS

## 🖥️ 1. Máquinas Virtuais (Amazon EC2)

➡️ **O que é?**  
✅ Virtualização de um servidor físico.  
✅ Total controle sobre SO, rede, armazenamento.  
✅ Possui imagens pré-configuradas (AMIs).  

➡️ **Quando usar?**  
✅ Aplicações que:  
- Precisam de **armazenamento local**.  
- Dependem fortemente do **sistema operacional**.  
- São **monolíticas** e não escalam facilmente.  

➡️ **Serviço:**  
✅ Amazon Elastic Compute Cloud (**EC2**).  

➡️ **Modelo:**  
✅ **Infraestrutura como Serviço (IaaS)**.

---

## 📦 2. Containers (Amazon ECS / EKS)

➡️ **O que é?**  
✅ Empacotamento de código + dependências → executa em qualquer ambiente.  
✅ Rápido provisionamento e portabilidade.  

➡️ **Quando usar?**  
✅ Equipes que:  
- Dominam **Docker** ou **Kubernetes**.  
- Trabalham com **microsserviços**.  
- Usam **armazenamento de rede ou objetos**.  

➡️ **Serviços:**  
✅ Amazon Elastic Container Service (**ECS**).  
✅ Amazon Elastic Kubernetes Service (**EKS**).  

➡️ **Modelo:**  
✅ **Container como Serviço (CaaS)**.

---

## ⚡ 3. Computação Sem Servidor (AWS Lambda)

➡️ **O que é?**  
✅ Código executado sem necessidade de gerenciar servidores.  
✅ Abstração total: infraestrutura, SO e stack.  
✅ Paga **apenas** pelo tempo de execução.  

➡️ **Quando usar?**  
✅ Aplicações que:  
- Processam tarefas rapidamente (< 15 minutos).  
- Não precisam de **armazenamento local**.  
- Devem **escalar automaticamente**.  
✅ Ideal para times focados em **desenvolvimento**, sem interesse em gerenciar infraestrutura.  

➡️ **Serviço:**  
✅ **AWS Lambda**.  

➡️ **Modelo:**  
✅ **Função como Serviço (FaaS)**.

---

# 🆚 Tabela Comparativa

| **Serviço** | **EC2** | **ECS** | **Lambda** |
|-------------|---------|---------|------------|
| Tipo de Computação | Instância (**IaaS**) | Container (**CaaS**) | Função (**FaaS**) |
| Caso de uso | Controle total; apps monolíticas, dependência de SO, armazenamento local | Microsserviços com Docker/Kubernetes, execução >15min | Pequenas aplicações, tarefas rápidas (<15min), sem infra |
| Disponibilidade | SLA: **99.99%** | SLA: **99.99%** | SLA: **99.95%** |
| Escalabilidade | **Auto Scaling Groups** | Nativa via métricas do **cluster** | **Automática** |
| Tempo limite | **Sem limite** | **Sem limite** | **15 minutos (300s)** |
| Preço | Depende do tipo, tempo e compra | - ECS no EC2: igual EC2  
- ECS no Fargate: vCPU, memória e tempo | Por número de requisições e tempo de execução |

---

# ✅ Resumo rápido:

➡️ **EC2** → quando quer **controle total** e infraestrutura tradicional.  
➡️ **ECS/EKS** → para quem domina **containers** e busca portabilidade.  
➡️ **Lambda** → foco em **código**, tarefas rápidas, sem infra.

