# &#x1F4CD; Endereçamento dos Processos (Camada de Transporte)

## &#x1F4AC; O que é?

Quando uma mensagem é enviada de uma aplicação (ex: navegador), **ela precisa chegar na aplicação certa do outro lado** (ex: servidor web).  
➡️ Isso é feito por **endereçamento na camada de transporte**.

---

## &#x1F6E0;&#xFE0F; Como identificar a aplicação de destino?

Através de um **endereço de transporte** conhecido como **porta**.  
➡️ Cada processo em execução em um sistema pode usar uma **porta diferente**.

---

## &#x1F4E6; Porta? Como assim?

### Exemplo:
- IP do servidor = 192.168.1.10
- Porta 80 = Servidor Web (HTTP)
- Porta 25 = Servidor de E-mail (SMTP)

&#x2709;&#xFE0F; Se você manda um e-mail, ele vai para a porta 25.  
&#x1F310; Se acessa um site, vai para a porta 80.

---

## &#x1F5FA;&#xFE0F; Como a aplicação sabe qual porta usar?

### 1. Portas **bem conhecidas** (well-known ports):
- Já estão padronizadas há anos (Ex: HTTP na 80, HTTPS na 443, FTP na 21).
- Os usuários e softwares já sabem disso.

### 2. Usando um **servidor de nomes (name server)**:
- A aplicação pergunta o endereço e porta de um serviço específico.
- O servidor de nomes responde com essa informação.

---

## &#x1F4C4; Cabeçalhos da Camada de Transporte

Os **cabeçalhos** são campos que ficam no início de cada mensagem e dizem:
- Porta de origem
- Porta de destino
- Número de sequência (se for TCP)
- Outros dados importantes

Esses dados **ajudam o protocolo de transporte** (TCP/UDP) a:
- Entregar a mensagem corretamente
- Reorganizar a ordem dos pacotes (TCP)
- Verificar se houve erro (em alguns casos)

---

## &#x1F4A1; Resumo Final

| Termo                  | Explicação                                                                 |
|------------------------|---------------------------------------------------------------------------|
| Porta                  | Número que identifica uma aplicação em execução                           |
| Cabeçalho de transporte| Início da mensagem com dados de controle (ex: porta, sequência, etc.)     |
| Well-known ports       | Portas padronizadas e conhecidas (Ex: 80, 443, 25, 21)                     |
| Servidor de nomes      | Responde qual endereço e porta usar para um determinado serviço            |

> Cada pacote na rede **tem um IP (endereço do host)** e uma **porta (endereço da aplicação)**.

