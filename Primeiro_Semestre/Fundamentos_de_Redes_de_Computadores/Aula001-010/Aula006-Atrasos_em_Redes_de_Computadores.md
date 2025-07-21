# 🌐 Anotações sobre Atrasos em Redes de Computadores &#x23F3;

## ⚠️ Realidade das redes:
O ideal seria que os dados fossem transferidos **instantaneamente** e **sem perdas** entre os dispositivos finais, né? Mas na real, as redes têm limitações:
- Restrição na quantidade de dados que dá pra transferir,
- Atrasos (latência),
- E ainda podem perder pacotes no caminho.

Além disso, tem o fator físico (distância, tipo de meio, etc.) que **também causa atrasos e perdas**. &#x269B;

---

## 🔍 Por isso, é importante entender e medir:
- **Atraso**
- **Perda de pacotes**
- **Vazão (throughput)**

---

# ⏱️ Tipos de Atraso

Imagina um pacote saindo de um dispositivo, passando pelo roteador A e indo até o roteador B. Esse pacote **só vai ser transmitido se:**
1. O enlace (cabo, fibra, etc.) estiver livre,
2. E se não tiver outros pacotes na frente dele na fila (buffer).

Se tiver fila, ele vai ter que **esperar no buffer do roteador**.

## 🧩 Tipos de atraso que o pacote sofre em cada nó (roteador ou dispositivo):

---

## 1. 🧠 Atraso de Processamento &#x1F4CB;
- Tempo que o roteador gasta pra **olhar o cabeçalho do pacote**
- Decide pra onde encaminhar o pacote
- É um tempo bem curto

---

## 2. 🕓 Atraso de Fila &#x1F4C3;
- Tempo que o pacote **fica esperando na fila** até poder ser transmitido
- Se não tiver fila, esse tempo é **zero**
- Se o tráfego estiver pesado, esse atraso pode ser **bem alto**
- E esse atraso pode **variar bastante de pacote pra pacote** (isso é o tal do *jitter*)

> **Jitter:** variação no atraso de fila entre pacotes diferentes. Afeta MUITO streaming, áudio/vídeo chamadas etc. porque os pacotes chegam em tempos irregulares.

---

## 3. 📤 Atraso de Transmissão &#x1F4E4;
- Tempo pra **empurrar todos os bits** do pacote pro enlace
- Depende de:
  - Tamanho do pacote
  - Taxa de transmissão (largura de banda)
- **Não tem nada a ver com distância**!

---

## 4. 📶 Atraso de Propagação &#x1F30C;
- Tempo que o sinal leva pra ir de um nó até o próximo
- Depende:
  - Da **distância**
  - Do tipo de meio (fibra ótica, cobre, etc.)
- **Não depende** do tamanho do pacote nem da taxa de transmissão

---

## 🧐 Impacto por tipo de aplicação:

| Aplicação                                | Mais sensível a...           |
|------------------------------------------|------------------------------|
| Jogos, chamadas, vídeo em tempo real     | Atraso de propagação         |
| Transferência de arquivos (tipo FTP)     | Atraso de transmissão        |
| Streaming (vídeo, música)                | *Jitter* (variação no atraso)|

---

## 💡 Comentário Final
- O atraso de fila é aleatório e varia com o tempo.
- Quando muitos pacotes chegam juntos, os primeiros passam rápido e os últimos **esperam mais**.
- Isso tudo é essencial pra quem quer entender como otimizar ou programar aplicações de rede. &#x1F4BB;
