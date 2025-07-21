# &#x1F4BB; RESUMO – Comutação na Camada de Rede

## &#x1F4E6; Comutação de pacotes (Store and Forward)

- Quando um **pacote sai da origem**, ele **vai até o roteador mais próximo**.
- O roteador:
  1. **Recebe o pacote inteiro**.
  2. **Verifica e processa**.
  3. **Encaminha para o próximo salto**.
- Esse modelo é chamado de **store and forward** ("armazenar e depois encaminhar").

---

## 🔁 Repasse vs Roteamento

### ➤ Repasse (Forwarding)
- É **local**, feito pelo roteador.
- Ao receber um pacote, ele:
  - Verifica o **endereço de destino**.
  - Consulta a **tabela de repasse**.
  - Decide por **qual interface enviar**.
- ⚠️ É rápido e direto: pacote chegou ➝ decide ➝ envia.

### ➤ Roteamento (Routing)
- É **global**, feito entre roteadores.
- Roteadores trocam informações de rede e:
  - Calculam o **melhor caminho**.
  - Criam as **tabelas de repasse**.
- Usa **algoritmos de roteamento** (ex: RIP, OSPF).

---

## &#x1F310; Relação entre repasse e roteamento

- O **roteamento monta** as tabelas.
- O **repasse usa** as tabelas.
- Pacote chegou ➝ repasse consulta a rota ➝ envia via interface correta.

---

## &#x1F4CD; Circuitos Virtuais vs Datagramas

### &#x1F4C1; Circuitos Virtuais (com conexão)
- Cria uma **conexão lógica entre dois hospedeiros**.
- Pacotes seguem sempre o **mesmo caminho**.
- Exige um "setup" antes da troca de dados.
- Mais confiável, mas menos flexível.

### &#x1F4C2; Datagramas (sem conexão)
- Cada pacote pode seguir um **caminho diferente**.
- **Não há conexão prévia**.
- Mais flexível e rápido, mas sujeito a:
  - Perda de pacotes.
  - Chegada fora de ordem.

---

## &#x1F4C9; Diferença entre as camadas:

| Camada         | Conexão entre...      | Tipo de serviço               |
|----------------|-----------------------|-------------------------------|
| Transporte     | Aplicação a aplicação | TCP (com conexão), UDP (sem) |
| Rede           | Hospedeiro a hospedeiro | Circuito virtual, datagrama |

---
