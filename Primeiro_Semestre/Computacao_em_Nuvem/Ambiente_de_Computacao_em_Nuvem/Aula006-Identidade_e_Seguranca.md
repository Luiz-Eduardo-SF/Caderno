# &#x1F4BB; Identidade e Segurança no Azure

## &#x1F512; Serviços de Diretório do Azure

### Azure AD (Azure Active Directory)
- Serviço de diretório **baseado em nuvem** da Microsoft.
- Permite acessar:
  - Aplicativos de nuvem da Microsoft.
  - Aplicativos de nuvem que você desenvolve.
- Mantém integração com o **Active Directory local**.

### Comparativo: Azure AD x Active Directory Local
| Característica | Active Directory Local | Azure AD |
| --- | --- | --- |
| Localização | On-premises (servidores locais) | Nuvem |
| Gestão | Organização | Microsoft |
| Segurança | A empresa monitora tentativas | A Microsoft ajuda a detectar tentativas suspeitas |
| Benefício | Controle total | Alta disponibilidade global e proteção inteligente |

---

## &#x1F510; Benefícios e Serviços do Azure AD

### 1. Autenticação
- **Verificação de identidade** para acessar apps e recursos.
- Recursos:
  - Redefinição de senha por autoatendimento.
  - Autenticação multifatorial (MFA).
  - Lista personalizada de senhas banidas.
  - Serviços de bloqueio inteligente.

### 2. Logon Único (SSO - Single Sign-On)
- Lembre de **um único usuário e senha** para vários aplicativos.
- Simplifica o modelo de segurança.

### 3. Gerenciamento de Aplicativos
- Gerencia apps locais e de nuvem.
- Recursos:
  - Proxy de aplicativo.
  - Integração com SaaS.
  - Portal "Meus Aplicativos".
  - Login único (SSO).

### 4. Gerenciamento de Dispositivo
- **Registro de dispositivos** para controle via ferramentas como Microsoft Intune.
- **Políticas de acesso condicional** baseadas no dispositivo.

---

## &#x1F5C3;&#xFE0F; Controle de Acesso Baseado em Função (RBAC)

### O que é?
- Sistema de **autorização refinada**.
- Baseado no **Azure Resource Manager**.
- Define **quem** tem acesso, **o que** pode fazer e **onde**.

### Exemplo prático:
- Dois grupos de recursos:
  - **Marketing** → Acesso exclusivo aos recursos de marketing.
  - **Financeiro** → Acesso exclusivo aos recursos financeiros.
- Cada usuário acessa apenas o **setor correspondente**.
- Isso é chamado de **segmentação de gerenciamento de recursos**.

---

## &#x1F6E1;&#xFE0F; Defesa em Profundidade

### Conceito:
- Modelo de segurança com **múltiplas camadas**.
- Protege os **dados centrais** com várias barreiras.

### Camadas da Defesa:
1. **Segurança física** → Controle de acesso aos datacenters.
2. **Identidade** → Autenticação e autorização.
3. **Perímetro** → Firewalls e barreiras externas.
4. **Rede** → Segmentação e proteção interna.
5. **Computação** → Proteção de VMs e workloads.
6. **Aplicativo** → Segurança no código e execução.
7. **Dados** → Criptografia e controle de acesso.

---

## &#x1F4CC; Resumo da Ópera
- Azure AD = **Gestão moderna de identidades** na nuvem.
- RBAC = **Acesso segmentado**, controlado e seguro.
- Defesa em profundidade = **Camadas sobre camadas** — como uma cebola protegendo seus dados. &#x1F952;

**Simples, seguro e escalável** — bem ao estilo da Microsoft.

