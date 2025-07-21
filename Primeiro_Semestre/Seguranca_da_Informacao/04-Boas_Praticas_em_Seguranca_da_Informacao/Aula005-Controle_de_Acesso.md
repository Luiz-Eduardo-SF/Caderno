# &#x1F4BB; Controle de Acesso 
## &#x1F512; O que é Controle de Acesso?
É um **método de limitar o acesso** a sistemas físicos ou virtuais, garantindo que **somente usuários autorizados** acessem determinados recursos. 

- Usuários devem apresentar **credenciais**: senhas, biometria, cartões, etc.
- Existem **3 tipos principais** de controle.

---

## &#x1F4CA; Tipos de Controle de Acesso

### 1. **Controle de Acesso Discricionário (DAC)**
- **Responsável:** Proprietário ou administrador.
- **Como funciona:** O dono decide quem acessa o quê.
- **Prós:** Controle individual total.
- **Contras:** 
  - Risco de propagação de permissões sem controle.
  - Facilita a execução de **malware** sem que o usuário saiba.

---

### 2. **Controle de Acesso Obrigatório (MAC)**
- **Responsável:** Sistema, com base em **rótulos e categorias**.
- **Como funciona:** O sistema define quem pode acessar, baseado em **atributos de segurança**.
- **Prós:** Segurança robusta e padronizada.
- **Contras:** Menos flexível.

**Exemplo de componentes:**
| Elemento | Descrição |
|---|---|
| Sujeitos | Processos ou threads |
| Objetos | Arquivos, diretórios, portas, etc. |

---

### 3. **Controle de Acesso Baseado em Função (RBAC)**
- **Responsável:** Definição de **funções de negócios**.
- **Como funciona:** Usuário acessa **somente** o necessário para sua função.
- **Prós:** Organização e segurança.
- **Contras:** Requer gestão clara de funções.

---

## &#x1F6E1;&#xFE0F; Por que proteger os recursos?

### &#x1F4F1; Aplicativos
- Alterações maliciosas podem comprometer **transações financeiras**.
- Risco de fraude.

### &#x1F4C1; Arquivos de Dados
- Alteração/exclusão só por **usuários credenciados**.
- Necessário **rastreabilidade**: saber **quem fez o quê**.

### ⚙️ Utilitários e Sistema Operacional
- Acesso deve ser **restrito**.
- Se comprometido → toda a segurança da rede está em risco!

### &#x1F511; Arquivos de Senha
- **Proteção essencial** para evitar comprometimento geral.

### &#x1F4D1; Arquivos de Log
- Importantes para **auditoria e rastreabilidade**.
- Ataques podem envolver apagar ou modificar logs.

---

## &#x1F6A7; Objetivos do Controle de Acesso

- ✅ Garantir que só **usuários autorizados** acessem.
- ✅ Compatibilizar recursos e atividades.
- ✅ Monitorar e **restringir acesso** a recursos críticos.
- ✅ Garantir que usuários façam apenas transações adequadas às suas funções.

---

## &#x1F50F; Componentes do Controle de Acesso

### 1. **Identificação e Autenticação**
- **Identificação:** Quem é o usuário? (login)
- **Autenticação:** É mesmo ele? (senha, biometria, etc.)

---

### 2. **Alocação, Gerência e Monitoramento de Privilégios**
- Definir **quem pode o quê**.
- Monitorar atividades e revisar permissões.

---

### 3. **Limitação e Prevenção**
- Restringir acesso.
- **Desabilitar** tentativas não autorizadas.

---

### 4. **Prevenção de Acessos Não Autorizados**
- **Políticas rígidas** de segurança.
- Sistema deve ser **inteligente** e **prevenir invasões**.

---

## &#x1F4DD; Boas Práticas no Processo de Logon

| Procedimento | Deve ser feito? | Por quê? |
|---|---|---|
| Informar que o sistema é só para autorizados | ✅ | Avisa que há controle e monitoramento. |
| Mostrar dados do sistema antes do logon | ❌ | Pode ajudar invasores. |
| Fornecer mensagens de ajuda no logon | ❌ | Facilita ataques. |
| Validar dados só no fim do logon | ✅ | Não dá dicas sobre o que está incorreto. |
| Limitar tentativas | ✅ | Ex.: 3 tentativas para bloquear ataque de força bruta. |
| Guardar tentativas inválidas | ✅ | Para auditoria futura. |
| Forçar tempo de espera após erros | ✅ | Dificulta ataques automatizados. |
| Encerrar conexões após inatividade | ✅ | Evita sessões abertas vulneráveis. |
| Mostrar data/hora do último acesso | ✅ | Usuário percebe se houve acesso indevido. |

---

## &#x1F91D; Exemplo prático de mensagens de logon

| Mensagem | Válida? | Justificativa |
|---|---|---|
| "A sua senha está incorreta." | ❌ | Não deve indicar qual parte está errada. |
| "Seus dados de logon estão incorretos. Você tem mais duas tentativas." | ✅ | Limita tentativas e informa o usuário. |
| "Este sistema pode ser acessado por qualquer pessoa." | ❌ | Deve restringir e alertar que só autorizados podem acessar. |

---

## &#x1F4A1; Resumo Final

- Controle de acesso é a **linha de defesa** das empresas.
- Fundamental para evitar **fraudes, vazamentos e invasões**.
- Combina políticas, práticas e tecnologia para garantir **segurança total**.

---

**&#x1F680; Dica visionária:**  
Controle de acesso **não é opcional**. É como o cinto de segurança: você só percebe sua importância quando já é tarde demais!

