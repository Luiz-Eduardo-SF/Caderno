## 🏗️ Arquitetura de Camadas &#x1F4C1;

### 📡 O que é um protocolo?

- Um **protocolo** define:
  - O **formato** das mensagens 📬
  - A **ordem** de envio/recebimento
  - E as **ações** tomadas em cada evento de comunicação

> Exemplo humano: quando você encontra alguém, primeiro **cumprimenta** (oi!) e **depois** faz a pergunta.  
> Em redes de computadores, é a mesma lógica — só funciona se ambos **seguirem o mesmo protocolo**.

---

### 🧱 Por que usar camadas?

Pra facilitar a vida dos desenvolvedores e engenheiros. Separar as funções em **camadas** ajuda a:

- Organizar melhor os **protocolos**
- Evoluir sistemas sem bagunçar o todo
- Reutilizar serviços entre partes diferentes da rede

> Isso vale tanto pro **software** quanto pro **hardware** das redes.

---

### 🔗 Como funciona esse modelo?

- Cada **protocolo** atua em **uma camada específica**.
- Cada camada:
  - **Oferece serviços** pra camada acima ⬆️
  - **Usa os serviços** da camada abaixo ⬇️
  - Faz isso tudo através de uma **interface** que liga uma camada à outra

> Pense nas camadas como **andares de um prédio**. O elevador (interface) conecta os andares e permite comunicação entre eles, mas cada andar tem sua **função própria**.

---
