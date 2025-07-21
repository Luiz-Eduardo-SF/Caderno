# &#x2709;&#xFE0F; Serviço de Correio Eletrônico (E-mail)

## &#x1F4DA; História e Evolução

- Os primeiros e-mails eram só **textos simples**, com o destinatário na primeira linha.
- Em **1982**, na época da ARPANET, surgiram as RFCs:
  - **RFC 821**: Protocolo SMTP para envio.
  - **RFC 822**: Formato da mensagem.
- Porém, essas RFCs **só aceitavam ASCII**, o que impedia:
  - Envio de áudios, vídeos, arquivos.
  - Caracteres especiais ou acentos.
  - Idiomas não latinos.
  
### &#x1F3ED; Solução: MIME
- **MIME (Multipurpose Internet Mail Extensions)** resolveu isso, permitindo:
  - Envio de arquivos multimídia.
  - Uso de diferentes alfabetos.
  - Manutenção de compatibilidade com protocolos existentes.

---

## &#x2699;&#xFE0F; Arquitetura do E-mail

Dividida em **dois tipos de agentes**:

### 1️⃣ Agente do Usuário (UA)
Programas usados pelos usuários para enviar, ler e gerenciar e-mails:

- Exemplos:
  - Mozilla Thunderbird
  - Microsoft Outlook
  - Webmail (acesso via navegador)

Funções:
- Escrever e-mails &#x270D;&#xFE0F;
- Ler mensagens recebidas &#x1F4E5;
- Enviar e-mails &#x1F4E4;
- Anexar arquivos &#x1F4CE;
- Organizar e arquivar &#x1F4C1;

---

### 2️⃣ Agente de Transferência de Mensagens (MTA)
Responsável por **entregar as mensagens** até o servidor do destinatário.

- Exemplos:
  - Postfix
  - Zimbra
  - Exchange

---

## &#x1F4E8; Funcionamento (exemplo prático)

1. **Orlando escreve** um e-mail para Maria no seu agente de usuário.
2. O e-mail vai para o **servidor SMTP** de Orlando (MTA).
3. O servidor **entrega o e-mail** para o servidor de Maria (MTA).
4. O e-mail fica armazenado na **mailbox** da Maria.
5. Maria usa seu agente (UA) para **acessar a mensagem**.

---

## &#x1F4AC; Protocolos envolvidos

### &#x1F4E4; SMTP – Simple Mail Transfer Protocol
- Envia mensagens até o servidor do destinatário.
- Usa **TCP** para garantir entrega confiável.
- Porta padrão: **25**
- Definido na **RFC 5321**

Etapas:
- Cliente se conecta ao servidor SMTP.
- Informa remetente e destinatário.
- Envia a mensagem.
- Servidor confirma o recebimento.

⚠️ **SMTP não faz a entrega final ao usuário**, só até o servidor.

---

### &#x1F4E5; POP3 – Post Office Protocol v3
- **Baixa as mensagens** do servidor para o PC local.
- Após download, pode **apagar do servidor**.
- Útil para leitura offline.
- Definido na **RFC 1939**
- Porta padrão: **110**

---

### &#x1F4F1; IMAP – Internet Message Access Protocol
- **Acessa as mensagens diretamente no servidor**.
- Ideal para quem usa **vários dispositivos**.
- Permite:
  - Organizar e-mails em pastas.
  - Acessar sem precisar baixar.
- Definido na **RFC 3501**
- Porta padrão: **143** (ou **993** com SSL)

---

## &#x1F5A5;&#xFE0F; Webmail

- **Não é um protocolo**, e sim uma **interface via navegador** para acessar e-mails.
- Exemplo: Gmail, Outlook.com, Yahoo Mail.
- Funciona **parecido com IMAP**.
- Basta acessar uma página web, fazer login e pronto!

---

## &#x1F4D6; Conclusão

| Protocolo | Função | Porta padrão |
|----------|--------|--------------|
| SMTP     | Envio de e-mails      | 25         |
| POP3     | Baixar e-mails (local) | 110        |
| IMAP     | Acessar e-mails (servidor) | 143/993   |

> &#x1F4A1; O sistema de e-mail moderno é construído sobre **vários protocolos cooperando** pra garantir que você consiga mandar, receber e acessar suas mensagens de forma eficiente e segura.

