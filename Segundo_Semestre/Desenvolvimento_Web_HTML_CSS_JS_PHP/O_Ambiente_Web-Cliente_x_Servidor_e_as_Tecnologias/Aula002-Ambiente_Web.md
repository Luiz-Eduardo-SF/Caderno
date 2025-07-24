# 🌐 Ambiente WEB

## 🎤 Entrevista - Marcelo Perantoni

### 🏗️ Como a arquitetura de duas camadas evoluiu para um modelo de quatro camadas?

---

- A Internet surgiu na década de 60.
- Foi evoluindo na conectividade por redes.
- Vieram os mainframes.
- **Surgiu o modelo de duas camadas:**
    - Servidor de Banco de Dados
    - Cliente

    &rarr; Se houvesse alguma alteração, os clientes tinham que atualizar os softwares (uma responsabilidade a mais para os clientes).

---

- **Modelo de três camadas:**
    - Servidor de Banco de Dados
    - Servidor de Aplicações
    - Cliente

    &rarr; Retira dos clientes essa responsabilidade. Porém, ainda é necessário cuidar da interface.

---

- **Modelo de quatro camadas:**
    - Servidor de Dados
    - Servidor de Aplicações
    - Servidor Web
    - Cliente

    &rarr; Resolve essa questão por conta dos navegadores.

---

<br>

### 🧩 Quais são as quatro camadas na arquitetura Web, e quais são suas funções principais?

---

- **Servidor de Banco de Dados**
    - Cuida dos dados, que são o mais importante (na atualidade, são tratados como petróleo).

- **Servidor de Aplicação**
    - Contempla a lógica de negócios, entre outros recursos.

- **Servidor Web**
    - Lida com a interface de usuário.

- **Clientes**
    - Fazem as requisições por meio dos navegadores, que normalmente já vêm instalados no dispositivo (eliminando a necessidade de instalação de softwares adicionais).

---

<br>

### 🛡️ De que forma o modelo cliente x servidor de 4 camadas contribui para o aumento da robustez e da portabilidade das aplicações web?

---

> Por se tratar de um formato onde se depende menos do cliente, qualquer alteração pode ser feita a partir dos servidores. E como temos diversos servidores, cada um com uma função, isso facilita na hora de realizar alguma mudança.<br>Com essa menor dependência dos clientes, a segurança também aumenta.

> **Trecho escrito a partir da minha compreensão do que foi dito por Marcelo Perantoni**<br>Por isso está em um formato de texto diferente.

---

<br>

### 🔗 Como ocorre a comunicação entre cliente e servidor no ambiente web?

---

- De modo resumido, essa comunicação ocorre via protocolos de comunicação por meio da Internet.<br>**Exemplo do Marcelo:** Assim como a língua que usamos para nos comunicar e entender (português), os protocolos são o equivalente para clientes e servidores.

---

<br>

### 🖥️ Qual é o significado das expressões **Client Side** e **Server Side**?

---

> - **Client Side:** O lado do cliente, que lida com a interface de usuário, ou seja, os navegadores.

> - **Server Side:** O lado dos servidores, que lida com questões de segurança, dados, lógica de negócios e outros aspectos.

> Obs: Em vez de se dizer cliente e servidor, é mais adequado falar clientes e servidores (no plural).

---