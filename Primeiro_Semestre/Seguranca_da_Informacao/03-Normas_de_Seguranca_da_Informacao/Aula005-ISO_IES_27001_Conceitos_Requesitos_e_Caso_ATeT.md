# Resumo ISO/IEC 27001: Conceitos, Requisitos e Caso AT&T &#x1F4BB;

---

## 1. Conceito da Norma ISO/IEC 27001  
- **ISO/IEC 27001** é um padrão internacional para **gestão de segurança da informação**.  
- Define requisitos para estabelecer, implementar, manter e melhorar continuamente um **Sistema de Gestão de Segurança da Informação (SGSI)**.  
- Foco: proteger a **confidencialidade**, **integridade** e **disponibilidade** da informação.

---

## 2. Requisitos da Norma ISO/IEC 27001  
- Controle de acesso rigoroso (ex: restrição, autenticação).  
- Gestão de riscos envolvendo ativos de informação.  
- Procedimentos para tratamento de incidentes.  
- Avaliação e melhoria contínua do SGSI.  
- Envolvimento da alta direção e responsabilidades claras.

---

## 3. Benefícios da Norma ISO/IEC 27001  
- Aumenta a confiança de clientes e parceiros.  
- Reduz riscos de vazamento e perda de dados.  
- Ajuda a cumprir requisitos legais e regulatórios.  
- Melhora a gestão interna da segurança da informação.  
- Fortalece a cultura organizacional de segurança.

---

## 4. Premissas para Estudo de Caso  
- Analisar apenas o que está descrito, sem suposições extras.  
- Usar as estruturas da norma para enquadrar as ocorrências (ex: tabelas 3 e 4 da norma).  
- Um evento pode se enquadrar em mais de um item.  
- Ignorar o que não estiver previsto na norma.

---

## 5. Estudo de Caso: Ação Judicial da AT&T (Baseado em Notícia)  

### Contexto  
- 25 falsos clientes criaram contas para acessar gravações de voz no banco de dados da AT&T.  
- Objetivo: acessar dados de outras empresas (2.500 clientes impactados).  
- Informações sensíveis e financeiras ficaram protegidas em bancos separados (não acessados).  
- AT&T bloqueou acessos e cancelou contas falsas assim que identificou o problema.  
- Clientes foram notificados.

---

### Itens ISO/IEC 27001 aplicáveis (9.4 Controle de Acesso)  

| Item   | Descrição                                   | Aplicação no caso AT&T                  |
|--------|---------------------------------------------|---------------------------------------|
| 9.4.1  | Restrição de acesso à informação            | Falsos clientes acessaram info indevidamente |
| 9.4.2  | Procedimentos seguros de entrada (log-on)  | Contas falsas sugerem falha na autenticação |
| 9.4.3  | Sistema de gerenciamento de senha           | Possível vulnerabilidade no controle de senhas |
| 9.4.4  | Uso de programas utilitários privilegiados | Não detalhado, mas pode ter sido explorado |
| 9.4.5  | Controle de acesso ao código-fonte           | Não mencionado, mas importante para proteger sistema |

---

### Comentário  
- Como a notícia tem poucos detalhes, assume-se que o ataque explorou qualquer controle da seção 9.4.  
- O caso demonstra a importância da norma para controlar acessos e evitar fraudes internas/externas.

---

# &#x1F4A1; Resumo rápido  
- ISO/IEC 27001 é tipo o manual do **segurança 24/7** para proteger dados.  
- Caso AT&T mostra como falha em **controle de acesso** pode virar dor de cabeça (e processo na justiça).  
- Norma ajuda a bloquear esses golpes antes que causem estrago.

---
