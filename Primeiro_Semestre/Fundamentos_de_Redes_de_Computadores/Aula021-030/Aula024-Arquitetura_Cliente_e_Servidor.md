# &#x1F4BB; Arquitetura Cliente-Servidor

## &#x1F4E1; O que é?

Na arquitetura **Cliente-Servidor**, temos duas entidades básicas:
- **Cliente**: envia solicitações.
- **Servidor**: processa essas solicitações e envia respostas.

### Como funciona?
1. O **cliente** monta uma mensagem pedindo algo (ex: uma página da web).
2. Essa mensagem é enviada ao **servidor** via rede (internet).
3. O servidor **processa** a solicitação e responde ao cliente.

> O servidor sempre fica esperando alguém pedir algo. Ele é passivo, só age quando recebe requisição.

---

## &#x1F5A5;&#xFE0F; Comportamento do Servidor

Quando chega uma solicitação, o servidor pode:
- ✅ Atender imediatamente (se estiver livre)
- &#x1F9F0; Criar um **processo-filho**
- &#x1F4E5; **Enfileirar** a requisição pra depois
- &#x1F9D1;&#x200D;&#x1F4BB; Criar uma **thread** pra tratar a solicitação

No final, o servidor SEMPRE envia uma resposta pro cliente.

---

## &#x1F35D; Exemplo: Site de Receitas

1. Você acessa um site de receitas e clica em um prato.
2. O **navegador (cliente)** envia uma mensagem ao **servidor web**.
3. O servidor **processa** a requisição e devolve a receita.

➡️ Isso é uma aplicação real do modelo Cliente-Servidor!

---

## &#x1F4DD; Dicas importantes

- &#x1F4D6; **"Cliente" e "Servidor" são papéis do software, não do equipamento**.
  - Um PC pode ser servidor se estiver rodando um software com esse papel.
- &#x1F527; **Servidores reais** usam hardware parrudo: redundância, alta disponibilidade e alto MTBF.

---

## &#x1F4DA; Quando um servidor vira cliente?

Às vezes, o **servidor web** precisa consultar um **banco de dados** para responder ao cliente final. Nesse momento:
- O servidor web se comporta como **cliente do banco de dados**.
- O banco de dados age como **servidor**.

&#x1F440; Ou seja: um software pode ser cliente e servidor ao mesmo tempo, dependendo da situação.

---

## &#x1F9D1;&#x200D;&#x1F4BB; Conclusão

- Arquitetura Cliente-Servidor é **essencial em aplicações web**.
- O **cliente faz o pedido**, o **servidor responde**.
- **Papéis são definidos pelo software**, não pelo hardware.
- Um processo pode **mudar de papel** conforme a necessidade (cliente de um lado, servidor de outro).

