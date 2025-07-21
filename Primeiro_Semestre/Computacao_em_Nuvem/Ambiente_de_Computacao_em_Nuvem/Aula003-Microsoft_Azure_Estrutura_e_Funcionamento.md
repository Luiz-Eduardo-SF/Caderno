# &#x1F4BB; Microsoft Azure: Estrutura e Funcionamento

---

## &#x1F4A1; **O que é Microsoft Azure?**

- Nuvem da Microsoft: conjunto de serviços em expansão.
- Solução para criar, gerenciar e implantar aplicativos globalmente.
- Suporte a ferramentas e frameworks diversos.

---

## &#x1F4B3; **Contas e Assinaturas no Azure**

### ✅ **Assinatura**:
- Limite lógico e financeiro da conta.
- Recursos são alocados dentro de assinaturas.
- Um diretório pode ter **várias assinaturas**.
- Exemplo: uma empresa pode ter uma assinatura por setor.

### ✅ **Criação de Conta**:
- Ao criar a conta → automaticamente cria-se:
  - Um diretório.
  - A primeira assinatura.

---

## &#x1F4B0; **Conta Gratuita do Azure**

- **12 meses** de produtos populares **gratuitos**.
- Crédito de **US$ 100** para uso em até **30 dias**.
- Acesso a **25+ produtos sempre gratuitos**.

---

## &#x1F4C0; **Infraestrutura Física do Azure**

### ✅ **Datacenters**:
- Base da infraestrutura.
- Redundância e poder computacional.
- Organização: racks com servidores, switches, refrigeração, energia.

---

## &#x1F30F; **Regiões do Azure**

- Área geográfica com pelo menos um datacenter.
- Vários datacenters próximos → **baixa latência**.
- Garante a **residência dos dados**.
  
**Exemplo:**  
- VM criada no **Brasil Sul** → dados permanecem no Brasil.

---

## &#x1F5FA; **Zonas de Disponibilidade**

- Datacenters **fisicamente separados**, mas interligados.
- Cada zona → até **3 datacenters** independentes:
  - Energia.
  - Refrigeração.
  - Rede.
  
**➡️ Proteção contra falhas locais**.

---

## &#x1F310; **Pares de Regiões**

- Reduzem risco de **desastres naturais**, **interrupções** ou **conflitos**.
- Regiões são emparelhadas:
  - Geralmente na mesma geografia.
  - Distância mínima: **480 km**.

**Exemplo:**  
- Falha no **Leste dos EUA** → serviço migra para **Oeste dos EUA** automaticamente.

---

## &#x1F4E6; **Recursos e Grupos de Recursos**

### ✅ **Recurso**:
- Entidade gerenciável: VM, banco de dados, rede virtual etc.

### ✅ **Grupo de Recursos**:
- Container obrigatório para recursos.
- **Um recurso pertence a apenas um grupo**.
- É possível **mover** recursos entre grupos.
- Não permite **aninhamento** (não pode ter grupo dentro de grupo).

**Função:**  
- Organização: por setor, região ou aplicação.
- Aplicação de políticas: ação no grupo afeta todos os recursos dentro dele.

---

## &#x1F4CA; **Assinaturas do Azure**

- **Papel fundamental** no gerenciamento:
  - Organização lógica de recursos.
  - **Cobrança** (billing) individualizada.
  - Controle de acesso.

- **Sem assinatura → não é possível criar recursos**.

### ✅ **Ligação com Azure AD**:
- Assinatura associada à conta → identidade no **Azure Active Directory**.

### ✅ **Limites de Assinatura**:

| **Tipo**                  | **Descrição**                                                                 |
|--------------------------|-------------------------------------------------------------------------------|
| **Limite de Cobrança**    | Define custos conforme tipo/quantidade de uso.                                |
| **Limite de Acesso**      | Políticas de gerenciamento no nível da assinatura; separação organizacional.  |

---

## &#x1F680; **Resumo Final:**

- Azure é uma **plataforma completa** de nuvem global.
- Estruturado em:
  - **Contas** → **Assinaturas** → **Grupos de Recursos** → **Recursos**.
- Infraestrutura robusta: **Datacenters**, **Regiões**, **Zonas de Disponibilidade** e **Pares de Regiões**.
- Modelo que favorece **resiliência** e **disponibilidade**.

---
