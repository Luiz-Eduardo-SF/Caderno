# &#x1F4BB; Governança e Conformidade no Azure

## ✅ Azure Policy

- **O que é?**  
  Serviço do Azure para **criar, atribuir e gerenciar políticas** que controlam ou auditam recursos, garantindo a conformidade com padrões corporativos.

- **Funcionalidades:**  
  - Impõe **regras e configurações** nos recursos.  
  - Garante que recursos estejam em **conformidade** com normas internas.  
  - Permite criar:  
    - **Políticas individuais**.  
    - **Iniciativas** (grupos de políticas relacionadas).  
  - **Avalia** recursos, destacando os **não conformes**.  
  - Pode **impedir a criação** de recursos fora das normas.

## ⚠️ Importante
- Azure Policy não apenas **audita**, mas também pode **bloquear** ações que não estejam em conformidade.

---

## &#x1F512; Bloqueio de Recursos (Locks)

Ferramenta essencial na **governança** para controlar alterações e exclusões.

### ➡️ Tipos de bloqueios:

| Tipo       | O que faz? |
|------------|------------|
| **Exclusão** | Usuários podem **ler e modificar**, mas **não excluir** o recurso. |
| **ReadOnly** | Usuários podem apenas **ler**. Não podem **alterar nem excluir**. Equivalente ao papel de **Leitor**.|

### ✅ Aplicações práticas:
- Evita **exclusão acidental** de recursos críticos.
- Garante **segurança** e **estabilidade** na infraestrutura.

---

## &#x1F6C8; Portal de Confiança do Serviço (Service Trust)

### ➡️ O que é?
Portal oficial da Microsoft que fornece **documentação**, **ferramentas** e **recursos** sobre:

- **Segurança**  
- **Privacidade**  
- **Conformidade**

### ➡️ Por que usar?
- Para acessar documentos de **conformidade legal** com órgãos reguladores.  
- Essencial para comprovar que o Azure atende a normas como:  
  - **NIST** (National Institute of Standards and Technology)  
  - **ISO 27001** (norma internacional de segurança da informação)

---

## &#x1F4DA; Resumo Rápido

| Recurso/Ferramenta | Finalidade |
|--------------------|------------|
| **Azure Policy** | Criar, atribuir e gerenciar políticas que impõem padrões corporativos. |
| **Bloqueio de Recursos (Locks)** | Impedir exclusões ou alterações não autorizadas. |
| **Portal de Confiança do Serviço** | Acessar documentação oficial sobre conformidade e segurança.|

---

## &#x1F680; Dica de Ouro:
Quer governança séria? Combine **Azure Policy** para definir as regras, **Locks** para proteger os recursos e o **Portal de Confiança** para provar que está tudo em dia com a lei! &#x1F4BC;
