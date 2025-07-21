# 🧠 Tema: Camada de Rede na Internet

## 🌐 Visão Geral
- A Internet é formada por vários **Sistemas Autônomos (SA)** interligados.
- Esses SAs se conectam por meio de **backbones**, redes regionais e locais.
- O protocolo que une tudo isso é o **IP (Internet Protocol)**.

## 📦 O que faz o IP?
- Leva datagramas IP da origem até o destino, mesmo passando por várias redes.
- Funciona como o "carteiro da Internet", mas **sem garantir que a carta chegue inteira**.
- Se preocupa **apenas com o transporte**, não com a confiabilidade (isso é da camada de transporte).

## 📤 Upload de Arquivo (exemplo)
1. O arquivo é quebrado em **segmentos** pela camada de transporte (ex: TCP).
2. Cada segmento é enviado para a camada de rede, que os coloca em **datagramas IP**.
3. Esses datagramas viajam por várias redes, podendo ser **fragmentados** no caminho.
4. No destino:
   - A camada de rede **remonta os datagramas** (se estavam fragmentados).
   - A camada de transporte **reconstrói o fluxo de dados** original.

## 🧩 Fragmentação
- Acontece quando o datagrama IP é **maior que o tamanho máximo permitido (MTU)** da rede.
- **Fragmentação** pode ocorrer em vários pontos no caminho.
- **Remontagem** só acontece **no destino final**.

## ✅ Resumo Final
- IP é o protocolo da camada de rede da Internet.
- Ele **transporta datagramas**, mesmo se tiver que **fragmentar e remontar**.
- É uma camada que **não garante confiabilidade**, apenas faz o possível para entregar.

