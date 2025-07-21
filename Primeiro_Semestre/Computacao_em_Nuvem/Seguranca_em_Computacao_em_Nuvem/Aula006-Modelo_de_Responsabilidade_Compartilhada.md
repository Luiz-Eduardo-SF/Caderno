# ✅ Modelo de Responsabilidade Compartilhada

## &#x1F512; Conceito
- Responsabilidade de segurança: **não binária**.
- Dividida entre **provedor** e **cliente** conforme o **modelo de serviço**.
- Modelo conhecido como **Shared Responsibility Model**.
- Cliente pode ser até um **usuário individual**.

---

## &#x1F4C9; Modelos de Serviço e Responsabilidades

### SaaS (Software as a Service)
- **Provedor**: cuida da infraestrutura, aplicativos e dados gerados.
- **Cliente**: protege **credenciais** e previne **phishing**.
- **Exemplos**: Dropbox, Zoom, Microsoft 365, Google Workspace.

---

### PaaS (Platform as a Service)
- **Provedor**: garante segurança da plataforma, OS e middleware.
- **Cliente**: responsável pelo **código**, **dados** e **conteúdos produzidos**.
- **Exemplos**: Azure App Service, AWS Elastic Beanstalk, Google Kubernetes Engine, Red Hat OpenShift.

---

### IaaS (Infrastructure as a Service)
- **Provedor**: segurança da infraestrutura física e virtual (rede, disco, virtualização).
- **Cliente**: segurança do **sistema operacional**, **aplicações** e **dados**.
- **Exemplos**: Microsoft Azure, AWS, Google Compute Engine.

---

## &#x26A1; Observações Importantes
- Quanto **mais próximo de IaaS**, **maior** a responsabilidade do cliente.
- Quanto **mais próximo de SaaS**, **maior** a responsabilidade do provedor.
- PaaS fica no **meio-termo**.

---

## &#x1F4AC; Organizações de Referência
- **Cloud Standards Customer Council**: responsabilidade aumenta de SaaS → PaaS → IaaS.
- **Cloud Security Alliance (CSA)**: promove boas práticas e confirma a divisão acima.

---

## &#x1F9ED; Estrutura em Camadas
- Modelo baseado em **camadas**: infraestrutura → plataforma → aplicação → dados.
- Cada camada tem uma **linha de corte** de responsabilidades conforme o serviço.

---

## &#x1F4CB; Exemplos Práticos

### IaaS
- Cliente: escolhe SO, instala apps, gerencia permissões.
- Provedor: cuida da infraestrutura física e virtual.

### PaaS
- Cliente: desenvolve e gerencia **aplicações** e **dados**.
- Provedor: gerencia plataforma e infraestrutura.

### SaaS
- Cliente: apenas gerencia **acesso** aos seus dados.
- Provedor: cuida de **tudo mais**.

---

## &#x1F6A8; Conclusão
- Modelo **não padronizado**: cada contrato define as fronteiras.
- Benefícios: clareza nas **responsabilidades**, redução de **riscos**.
- **Nuvem pública**: maior delegação ao provedor.

