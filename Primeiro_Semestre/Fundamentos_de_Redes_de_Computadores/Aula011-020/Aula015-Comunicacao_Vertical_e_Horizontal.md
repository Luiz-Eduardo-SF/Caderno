# 🔀 Comunicações Horizontal e Vertical

## 📥 Comunicação Vertical (Origem)

- O dado **desce** pelas camadas, do topo até a **camada 1**.
- A **camada 1** se conecta ao **meio físico** (fibra óptica, cabo de rede, ar).
- Esse processo é **vertical** porque o dado atravessa as camadas de cima para baixo.

## 📤 Comunicação Vertical (Destino)

- No computador de destino, o dado **sobe** pelas camadas até o nível mais alto.
- A comunicação vertical está associada ao **uso dos serviços** das camadas.

---

## 🛠️ O papel das camadas no preparo dos dados

- Cada camada, ao receber o dado, **prepara**-o para o serviço que implementa.
- Exemplo:
  - A **camada 2** na origem adiciona informações de **verificação de erro**.
  - A **camada 2** no destino lê essas informações e verifica se o dado chegou **corretamente**.

---

## 📡 Comunicação Horizontal

- Ocorre entre **camadas de mesmo nível** em **dispositivos diferentes**.
- Exemplo:
  - Camada 2 do computador A **conversa** com a camada 2 do computador B.
- Essa comunicação é **virtual**, feita através dos **protocolos** que regem cada camada.

---

## 🔥 Resumão

| Comunicação | Definição | Exemplo |
|:-----------|:---------|:--------|
| **Vertical** | Dado passando entre camadas no mesmo dispositivo | Dado descendo da camada 5 para a camada 1 |
| **Horizontal** | Comunicação entre camadas iguais em dispositivos diferentes | Camada 2 de A conversando com camada 2 de B |

---