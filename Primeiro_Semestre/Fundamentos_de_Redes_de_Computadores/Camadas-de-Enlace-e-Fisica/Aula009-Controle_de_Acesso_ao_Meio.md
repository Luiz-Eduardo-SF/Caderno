# 🎛️ Controle de Acesso ao Meio (Subcamada MAC)

## 🎯 Problema:
Em enlaces **multiponto** (compartilhados), várias estações querem transmitir ao mesmo tempo. Isso causa **colisões** e perda de dados. A solução? Usar **protocolos de controle de acesso ao meio**.

---

## 🧩 Três grupos de soluções:

### 1. 🧊 Alocação Estática

**Divide o canal previamente entre os dispositivos.**
- 🔹 **FDMA (Frequency Division Multiple Access):**
  - Divide a largura de banda em frequências.
  - Cada estação usa uma frequência fixa.
- 🔹 **TDMA (Time Division Multiple Access):**
  - Divide o canal em **slots de tempo**.
  - Cada estação transmite apenas no seu slot.

❗ Problemas:
- Número de estações limitado.
- Desperdício se uma estação não estiver transmitindo.
- Ideal para **voz** (redes telefônicas fixas/celulares).

---

### 2. ⚔️ Protocolos por Contenção

**Não há divisão prévia. Estações disputam o canal.**

- 🔸 **ALOHA (puro):**
  - Transmite quando quiser.
  - Se houver colisão, espera um tempo aleatório e tenta de novo.
  - Desempenho máximo: ~18% &#x1F635;

- 🔸 **S-ALOHA (slotted):**
  - Só transmite no início de slots de tempo.
  - Menos colisões. Desempenho: ~36%.

- 🔸 **CSMA (Carrier Sense Multiple Access):**
  - "Escuta" o canal antes de transmitir.
  - Se estiver livre, transmite.
  - Ainda pode haver colisões se mais de um transmitir ao mesmo tempo.

- 🔸 **CSMA/CD (com detecção de colisão):**
  - Detecta colisão **durante** a transmissão.
  - Para imediatamente ao detectar colisão.
  - Usado no padrão **Ethernet (IEEE 802.3)** &#x1F5A7;

---

### 3. 🪙 Protocolos de Acesso Ordenado

**Organizam a ordem de quem transmite. Sem colisões.**

- 🔸 **Token Ring (IEEE 802.5):**
  - Topologia lógica em **anel**.
  - Um **token (permissão)** circula.
  - Só transmite quem tem o token.

- 🔸 **Token Bus (IEEE 802.4):**
  - Topologia **física em barramento**, mas lógica em anel.
  - Token circula entre estações com base em endereços.
  - Muito usado na indústria.

📌 Esses protocolos não são mais usados em LANs, mas os conceitos são muito utilizados em sistemas modernos de rede.

---

## 📌 Comparação Rápida:

| Tipo de Acesso | Colisão? | Organização | Uso Típico                    |
|----------------|----------|-------------|-------------------------------|
| Estático       | ❌ Não   | Pré-definido| Telefonia, redes antigas       |
| Contenção      | ✅ Sim   | Aleatória   | Wi-Fi, redes sem fio           |
| Ordenado       | ❌ Não   | Por token   | Automação industrial, legado   |

---

## 🧠 Conclusão:
A escolha do protocolo depende do tipo de rede e da necessidade de desempenho. Redes modernas sem fio preferem contenção (com melhorias), enquanto sistemas críticos usam controle mais rigoroso como passagem de permissão.

🧪 Estudar esses protocolos é essencial pra entender como as redes **evitam bagunça e garantem comunicação eficiente**. &#x1F4BB;
