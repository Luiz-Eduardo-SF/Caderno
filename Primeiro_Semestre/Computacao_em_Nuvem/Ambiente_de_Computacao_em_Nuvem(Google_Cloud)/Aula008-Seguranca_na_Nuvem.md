# &#x1F512; Segurança na Nuvem

## &#x1F680; Evolução e Desafios

- A computação em nuvem trouxe:
  - ✅ **Facilidade** e **agilidade** para inovação.
  - ✅ **Redução** da responsabilidade direta do usuário sobre segurança.
  
- **Mas ainda é necessário**: 
  - ✅ Garantir segurança de **aplicações**, **dados** e **infraestrutura**.

---

## &#x1F525; Ameaças na Nuvem

- Ataques frequentes e diversos:
  - &#x274C; **Sequestro de dados**.
  - &#x274C; **Indisponibilidade** de serviços.
  - &#x274C; **DDoS** (negação de serviço).

➡️ Impactam diretamente o **negócio** e causam **desestabilização**.

---

## &#x1F6E1;&#xFE0F; O que é "Segurança na Nuvem"?

- Conjunto de **melhores práticas** que envolvem:
  - ✅ **Tecnologias**.
  - ✅ **Políticas**.
  - ✅ **Controles**.
  - ✅ **Serviços**.

➡️ Protegem **dados**, **aplicativos** e **infraestrutura** contra ameaças **externas** e **internas**.

---

## &#x1F4AA; Componentes Essenciais da Segurança na Nuvem

### 1️⃣ **Gestão de Acesso e Identidade (IAM)**

- Controle de **quem acessa** e **o que pode fazer**.
- **Google Cloud IAM**:
  - ✅ Define e limita **permissões**.
  - ✅ Evita **acessos não autorizados**.

**Exemplo**:
- Um **desenvolvedor** pode apenas:
  - &#x2705; **Visualizar** ou **editar** suas configurações.
  - &#x274C; Não pode mexer na **infraestrutura**.

➡️ **MFA** (autenticação multifator):
- Camada extra de segurança: 
  - ✅ **Senha + SMS**.
  - ✅ **Senha + Token físico**.

**Benefício**: 
- Mesmo se a credencial for **roubada**, os **limites** de acesso impedem grandes danos.

---

### 2️⃣ **Segurança Contra Ataques**

- **Google Cloud Armor**:
  - ✅ Proteção baseada em **IA** e **Machine Learning**.
  - ✅ **Detecta** e **mitiga** ameaças automaticamente.
  
**Exemplo**: 
- Bloqueia **ataques DDoS**: excesso de requisições falsas que derrubam sistemas.

- **Google reCAPTCHA**:
  - ✅ Distingue **humanos** de **bots**.
  - ✅ Usa **testes visuais** ou **auditivos**.
  
**Importante**: 
- Bots **maliciosos** estão cada vez mais comuns, explorando **falhas**.

---

### 3️⃣ **Listas de Bloqueio e Permissão**

- **Blocklist** e **Allowlist**:
  - ✅ Define quem **pode** ou **não pode** acessar o sistema.
  - ✅ Baseado em:
    - ✅ **Endereços IP**.
    - ✅ **Regiões geográficas**.

**Exemplo**:
- **Negar** acesso de IPs de **outras regiões**.
- **Bloquear** países inteiros para **evitar ataques globais**.

---

## &#x1F9D1;&#x200D;&#x1F527; Responsabilidades de Segurança na Nuvem

| **Serviço** | **Responsabilidade do Usuário** |
|-------------|--------------------------------|
| IaaS        | Infraestrutura lógica e aplicação |
| PaaS        | Apenas aplicação                |
| SaaS        | Configurações e gestão de dados |

➡️ Segurança na nuvem é **compartilhada**:  
- O **provedor** garante a base.  
- O **cliente** cuida do **uso correto** e **boas práticas**.

---

## &#x1F4CA; Considerações Finais

- A nuvem **facilita** mas não **isenta** a responsabilidade.
- Estratégias como **IAM**, **Cloud Armor**, **reCAPTCHA** e **listas de bloqueio** são **fundamentais**.
- Segurança na nuvem é **proativa**, **estratégica** e **tecnológica**.

---