# 🛡️ Serviço de Monitoramento e Auditoria na Nuvem

## 📌 O que é?
➡️ Conjunto de atividades que **registram** e **monitoram** eventos no ambiente de nuvem, fundamentais para garantir **segurança** e **rastreabilidade**.

---

## 🎯 Principais funções:

## 📝 1. Monitoramento
➡️ Registro de eventos como:  
✅ **Login de usuários** (sucesso e falha).  
✅ **Ações realizadas** (quem, o quê, quando e resultado).  

➡️ **Geração de alertas** com base em regras pré-configuradas.  
Exemplo: Alertar **somente** quando a conta **root** ou **admin** fizer login com sucesso.

---

## 🔍 2. Auditoria
➡️ Registro completo e documentado das ações realizadas ➡️ conhecido como **trilha de auditoria**.  
➡️ Esses registros devem ser armazenados em:  
✅ **Repositório central de logs**.  
✅ Acesso **limitado** ➡️ baseado no **princípio da necessidade de conhecimento**.

---

## ⚠️ Atenção:
➡️ Todos os serviços da nuvem **devem enviar** seus logs para um **serviço central**.  
➡️ Importante realizar:  
✅ **Análise de risco** ➡️ nem sempre compensa armazenar **todos os eventos** devido ao **alto custo** e consumo de recursos.

---

## 🛠️ Ferramentas e práticas recomendadas:

## 🚨 1. Sistema de Alerta
➡️ Configuração de regras para acionar alertas somente em casos **realmente críticos**.  
➡️ Evita **falsos positivos** e reduz consumo desnecessário de recursos.

---

## 🛠️ 2. SIEM (Security Information and Event Management)
➡️ Classe de produtos para soluções complexas de monitoramento.  
➡️ Faz a **correlação de eventos** entre diferentes serviços ➡️ detecta riscos combinados.

**Exemplo:**  
➡️ Evento **A** em um serviço e evento **B** em outro ➡️ isolados não indicam risco, mas juntos podem representar uma **ameaça séria**.

➡️ SIEM dispara **alertas somente quando a combinação representa alto risco**, evitando:  
✅ Consumo excessivo de recursos.  
✅ Ações incorretas devido a **falsos positivos**.

---

## 💡 Resumo rápido:
➡️ Monitoramento ➡️ registrar atividades e gerar alertas.  
➡️ Auditoria ➡️ trilha de auditoria em repositório central, com acesso restrito.  
➡️ SIEM ➡️ correlaciona eventos para **detectar ameaças complexas** e economiza recursos.
