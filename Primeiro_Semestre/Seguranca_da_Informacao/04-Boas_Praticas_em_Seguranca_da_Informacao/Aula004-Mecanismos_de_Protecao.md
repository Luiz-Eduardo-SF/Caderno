# &#x1F512; Mecanismos de Proteção

Conjunto de ações e recursos que visam proteger sistemas e organizações. A segurança é pensada sob dois pontos de vista:

---

## &#x1F4BC; Do ponto de vista da organização

➡️ Restrições físicas e comportamentais:  
- Portas  
- Fechaduras  
- Chaves  
- Paredes  

**Objetivo:** limitar ações de membros e possíveis atacantes.

---

## &#x1F5A5;&#xFE0F; Do ponto de vista dos sistemas

➡️ Restrições lógicas de funções e fluxo:  
- Controle de acesso a sistemas e dados  
- Barreiras contra programas maliciosos e pessoas não autorizadas  

---

# &#x1F4DD; Princípios dos Mecanismos de Proteção

## 1. &#x1F528; Economia de mecanismo (objetividade)

**Regra:** sistemas devem ser simples e pequenos.  
**Por quê?**  
- Mais fácil de analisar, testar e validar  
- Menos riscos de falhas ocultas que permitem acessos indesejados  

> ⚠️ Falhas aparecem onde menos se espera, tipo aquele bug que só dá na apresentação!

---

## 2. &#x1F6E1;&#xFE0F; Padrões à prova de falhas

**Regra:** o padrão é **não ter acesso**.  
**Permissão só quando explicitamente concedida!**  

**Exemplo:**  
- Apache `.htaccess`: se faltar um parâmetro, o acesso deve ser bloqueado, não liberado.  

> ⚠️ Nunca baseie segurança em "não permitir algumas coisas". Baseie em "só permitir o que for necessário".

---

## 3. &#x1F511; Mediação completa

**Regra:** todo acesso (direto ou indireto) deve ser verificado pelos mecanismos de segurança.

**Implicações:**  
- Sem brechas para contornar o sistema  
- Controle total desde o início até a manutenção  

**Exemplo:**  
- Cada requisição deve ter a fonte identificada  
- Mudanças de acesso devem ser imediatamente atualizadas  

---

## 4. &#x1F4DC; Projeto aberto

**Regra:** segurança não depende de segredo, mas de:  
- Chaves criptográficas  
- Senhas  

**Vantagens:**  
- Revisão pública sem comprometer a segurança  
- Usuário pode verificar se o sistema é confiável  
- Impossível manter sistemas amplamente distribuídos em segredo  

> 🧐 Segurança por obscuridade? Só funciona em filme ruim!

---

## 5. &#x1F5DD;&#xFE0F; Separação de privilégios

**Regra:** use múltiplas chaves para acesso — mais robustez e flexibilidade.

**Por quê?**  
- Reduz risco de falhas ou traições  
- Responsabilidades divididas entre programas, organizações ou indivíduos  

**Exemplos:**  
- Cofres de banco  
- Sistemas nucleares: duas pessoas precisam autorizar  

**Em sistemas:**  
- Situações onde múltiplas condições precisam ser satisfeitas antes de liberar o acesso  

---

## 6. &#x1F7E2; Privilégio mínimo

**Regra:** usuários e programas devem operar com o menor conjunto de privilégios possível.  

**Vantagens:**  
- Limita danos causados por erros ou falhas  
- Facilita auditoria e investigação  

**Exemplo:**  
- `GRANT` no SQL: define permissões específicas para usuários ou grupos  

> 🎯 Menos poderes = menos problemas!

---

## 7. &#x1F512; Compartilhamento mínimo

**Regra:** minimizar recursos compartilhados entre programas.  

**Por quê?**  
- Um programa que corrompe um recurso compartilhado pode afetar outros programas.  

**Exemplo:**  
- Preferir funções de biblioteca a system calls quando possível: menos compartilhamento, menos risco.  

---

## 8. &#x1F9D1;&#x200D;&#x1F4BB; Aceitação psicológica

**Regra:** a interface do sistema deve ser fácil de usar para que os mecanismos de proteção sejam aplicados automaticamente.  

**Por quê?**  
- Usuários que não entendem ou acham complicado vão burlar ou negligenciar a segurança.  

**Exemplo:**  
- Senhas complexas demais = usuários anotam em post-its = falha de segurança!  

> &#x1F4A9; Segurança difícil = segurança quebrada.

---

# &#x1F4CA; Resumo Geral

| Princípio                  | Essência                                    |
| ------------------------- | ------------------------------------------ |
| Economia de mecanismo     | Simplicidade evita falhas ocultas           |
| Padrões à prova de falhas | Padrão é bloquear, liberar só com permissão |
| Mediação completa         | Verificação total de acessos                |
| Projeto aberto            | Segurança baseada em chaves, não em segredos|
| Separação de privilégios  | Múltiplos requisitos para acesso seguro     |
| Privilégio mínimo         | Menor poder possível para menor risco       |
| Compartilhamento mínimo   | Menos recursos compartilhados, menos perigo |
| Aceitação psicológica     | Interface intuitiva favorece segurança      |

---

&#x1F4BB; **Segurança não é sobre confiar — é sobre garantir!**  
