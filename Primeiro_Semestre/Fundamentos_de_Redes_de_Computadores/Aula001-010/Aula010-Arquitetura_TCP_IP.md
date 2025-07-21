# 🌐 Modelo TCP/IP (Arquitetura Internet) &#x1F310;

## 📌 OSI x TCP/IP: Qual é a diferença?

- **OSI** = modelo **teórico**, usado pra estudar e entender.
- **TCP/IP** = **arquitetura real**, usada na prática.
- A internet funciona com a **pilha de protocolos TCP/IP**.

---

## 🧱 Camadas da arquitetura TCP/IP (modelo de 5 camadas)

| Camada | Função | Exemplos |
|-------|--------|----------|
| **Aplicação** | Interface com o usuário | HTTP, DNS, SMTP |
| **Transporte** | Garante envio confiável (ou rápido) | TCP, UDP |
| **Rede** | Roteamento entre redes | IP |
| **Enlace** | Comunicação dentro da mesma rede | Ethernet, Wi-Fi, Bluetooth |
| **Física** | Transmissão dos bits pelo meio físico | Cabos, ondas, luz, etc. |

---

## 🔁 Por que “arquitetura” no TCP/IP e “modelo” no OSI?

- **OSI** não define protocolos.
- **TCP/IP** define protocolos reais usados em cada camada.

---

## 🧑‍💻 Camada de Aplicação

➡️ Fica com as funções de:
- Aplicação
- Apresentação
- Sessão (do modelo OSI)

🎯 Exemplos:
- **HTTP** = navegação web &#x1F310;
- **DNS** = traduz nomes pra IP &#x1F50D;
- **SMTP** = envia e-mails &#x2709;&#xFE0F;

---

## 🚚 Camada de Transporte

📦 Garante que os dados cheguem direitinho.

### 🔐 TCP (Transmission Control Protocol)
- Confiável
- Garante entrega, ordem, controle de fluxo/congestionamento

➡️ Ex: Acessar um site, transferir arquivos, enviar e-mail.

### ⚡ UDP (User Datagram Protocol)
- Mais rápido, porém sem garantias
- Sem controle de fluxo ou congestionamento

➡️ Ex: Transmissão ao vivo, jogos online, chamadas de voz.

---

## 🌍 Camada de Rede

- Cuida dos endereços IP
- Decide pra onde os pacotes vão (roteamento)

➡️ Ex: Quando você acessa um site, o IP do servidor é usado pra enviar o pacote até lá.

---

## 🔗 Camadas de Enlace e Física

### 🧩 Enlace
- Define como os dispositivos se comunicam na mesma rede.

🎯 Exemplos:
- **Ethernet**
- **Wi-Fi**
- **Bluetooth**

### 🧷 Física
- Manda os bits pelo meio físico.

🎯 Exemplos:
- Cabos de rede
- Fibras óticas
- Ondas de rádio

---

## ✅ Resumo Curto:
> O **modelo OSI** serve pra estudar. A **arquitetura TCP/IP** é o que roda de verdade na internet. Ela tem 5 camadas que se comunicam entre si usando protocolos reais como **TCP**, **IP**, **HTTP** e **Ethernet**. &#x1F5A5;

