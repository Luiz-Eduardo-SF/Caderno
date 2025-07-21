# &#x1F4BB; Tipos de Serviço de Nuvem e Modelo de Responsabilidade Compartilhada

---

## &#x1F5A5;&#xFE0F; **1. IaaS — Infraestrutura como Serviço**

### ✅ **Características:**
- **Mais flexível**: máximo controle sobre recursos.
- Cliente gerencia:
  - Sistema Operacional.
  - Aplicações.
  - Patches e atualizações.
  - Configuração de rede.
  - Banco de dados e armazenamento.

- Provedor gerencia:
  - Hardware (servidores físicos).
  - Conectividade de rede.
  - Segurança física.

### ➡️ **Responsabilidade**:
- **Provedor**: infraestrutura física.
- **Cliente**: toda a camada de software e configuração.

---

## &#x1F4BB; **2. PaaS — Plataforma como Serviço**

### ✅ **Características:**
- **Meio termo** entre IaaS e SaaS.
- Fornece ambiente completo de desenvolvimento.
- Cliente não se preocupa com:
  - Licenças.
  - Atualizações de sistema.
  - Manutenção de banco de dados.

- Provedor gerencia:
  - Infraestrutura física.
  - Sistema Operacional.
  - Ferramentas de desenvolvimento.
  - Serviços de Business Intelligence.

- Cliente gerencia:
  - Aplicações.
  - Dados.
  - Configuração de segurança da aplicação.
  - Dependendo da configuração: conectividade e segurança da rede.

### ➡️ **Responsabilidade**:
- **Provedor**: infraestrutura + plataforma.
- **Cliente**: código da aplicação + segurança de dados.

---

## &#x1F4BB; **3. SaaS — Software como Serviço**

### ✅ **Características:**
- **Menos flexível**, porém **mais simples**.
- Aplicações prontas para uso.
- Não exige conhecimento técnico profundo.

- Provedor gerencia:
  - Desenvolvimento da aplicação.
  - Manutenção e atualizações.
  - Segurança física.
  - Infraestrutura.
  - Patches.

- Cliente gerencia:
  - Dados inseridos.
  - Dispositivos conectados.
  - Gerenciamento de usuários e acessos.

### ➡️ **Responsabilidade**:
- **Provedor**: praticamente tudo.
- **Cliente**: apenas dados e controle de acesso.

---

## &#x1F4A1; **Resumo Comparativo:**

| **Modelo** | **Provedor Gerencia**                                        | **Cliente Gerencia**                         |
|------------|-------------------------------------------------------------|---------------------------------------------|
| **IaaS**   | Hardware, rede, segurança física                             | Sistema, aplicações, dados, segurança lógica |
| **PaaS**   | Infraestrutura, SO, plataforma, atualizações                 | Aplicações, dados, segurança de aplicação    |
| **SaaS**   | Tudo: infraestrutura, plataforma, aplicação, atualizações    | Dados, dispositivos, contas de usuários      |

---

## &#x1F680; **Resumo Final**:
- **Quanto mais "as a Service" → menos responsabilidade do cliente**.
- **IaaS** → liberdade máxima, responsabilidade máxima.
- **PaaS** → equilíbrio.
- **SaaS** → simplicidade máxima, responsabilidade mínima.

---
