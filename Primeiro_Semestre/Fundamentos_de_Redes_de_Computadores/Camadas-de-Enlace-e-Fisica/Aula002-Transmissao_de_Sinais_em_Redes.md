# &#x1F4E1; Transmissão de Sinais em Redes

## &#x1F4AC; Informação precisa virar sinal para ser transmitida

- Info = sinal transmitido de **transmissor → canal → receptor**
- Sinal pode ser:
  - **Analógico**: variação suave da amplitude ao longo do tempo 🌊
  - **Digital**: mudanças bruscas de nível, como um degrau ⬛⬜

---

## &#x1F501; Sinal Periódico

- Se repete após certo tempo **T** → **f = 1 / T**
- T: período (em segundos)
- f: frequência (em Hz)
- Quanto **menor o T**, **maior a f** 🔁

### Propriedades:

- **Amplitude (A)**: pico máximo &#x2B06;&#xFE0F;
- **Fase (Φ)**: deslocamento no tempo &#x23F3;

➡️ Info pode ser codificada variando **f**, **A** e **Φ**

---

## &#x1F39B;&#xFE0F; Domínio da Frequência

- Sinais podem ser analisados por suas **componentes senoidais**
- Ex: senoide simples → tem 1 frequência (f)
- **Análise de Fourier**: qualquer sinal pode ser "quebrado" em várias senoides

---

## &#x1F50C; Banda Passante

- Faixa de frequências que **o canal transmite bem**
- Frequências fora da faixa → **são atenuadas ou cortadas**
- Canal funciona como um **filtro de frequência** &#x1F50A;

> Ex: Canal com banda de 0,5f a 2,5f elimina um sinal de 3f

➡️ Quanto **maior a banda passante**, melhor a preservação do sinal original

---

## &#x1F4F6; Efeitos da Banda Passante

- **Sinais digitais** têm componentes de frequência muito altas &#x1F50A;
- Canal com banda estreita = mais distorção ❌
- Canal com banda larga = menos distorção ✅

---

## &#x1F4C8; Taxa de Transmissão (Bit Rate)

- Quantidade de **bits por segundo (bps)** transmitidos
  - Kbps, Mbps, Gbps &#x1F4E2;
- O canal limita a taxa com base em:
  - Banda passante
  - Ruído
  - Atenuação

---

## &#x1F505; Atenuação

- Perda de potência do sinal com a distância 📉
- Fórmula (em espaço livre):  
  **Pr / Pt ∝ 1 / d²**
  - Pr = potência recebida  
  - Pt = potência transmitida  
  - d = distância entre os dispositivos

➡️ Sinal fraco = mais suscetível a **ruídos**

---

## &#x1F3A4; Ruído

- **Sinais indesejados** que distorcem o sinal principal
- Tipos de ruído:
  - **Térmico (branco)**: gerado pela agitação dos elétrons &#x1F525;
  - Outros tipos (interferência externa, ruído impulsivo, etc.)

> O ruído térmico **não pode ser eliminado**, limita a capacidade do canal

---

## &#x1F6AB; Problemas na Transmissão

- O que é transmitido **≠** o que é recebido
- Degradações:
  - Atenuação
  - Ruído
  - Banda passante limitada
- Isso gera:
  - **Erros na interpretação dos bits** no receptor ❌

---

# ✅ Conclusão

- Transmitir bits é mais complexo do que parece.
- O sinal passa por **vários obstáculos físicos**.
- Conhecer **sinais, frequência, ruído e banda passante** é essencial pra entender as **limitações reais das redes**.

---
