# 📸 Fundamentos sobre Pixels

- **Imagem digital = conjunto de números**: por dentro do computador, toda imagem é representada por números, já que o computador só entende isso.
- **Zoom revela os pixels**: ao ampliar a imagem, vemos que ela é formada por pequenos quadrados coloridos — os **pixels**.
- **Cada pixel = uma cor**: um pixel só pode conter **uma única cor por vez**.
- **Mais pixels = mais detalhes**: quanto maior a quantidade de pixels, mais realista e suave é a imagem.

## 🎯 Exemplo prático
- Imagem com **800x600 pixels** → possui **480.000 pixels**.
- A imagem do pássaro mostrada tem **3.892 x 3.328 = 12.952.576 pixels** (~13 megapixels).
- Isso explica a aparência “natural” dela.

## 🧵 Comparação com o mundo real
- O conceito é parecido com o bordado **ponto de cruz**, onde cada “x” representa uma cor e todos juntos formam a imagem.

## 📱 Megapixel
- **1 Megapixel = 1.000.000 de pixels**
- Câmeras atuais registram de 5 a 100 megapixels.

## ✅ >> Resumo prático

1. Toda imagem digital é uma grade de quadradinhos coloridos chamados **pixels**.
2. Quanto **mais pixels**, **maior a qualidade** da imagem.
3. Cada pixel armazena **apenas uma cor por vez**.
4. **Megapixel** é a forma moderna de medir a resolução de câmeras — 1 MP = 1 milhão de pixels.
5. Entender pixels é essencial para compreender como o computador exibe fotos, vídeos e jogos.

---

# 🔲 Grade de Pixels

- Imagens digitais são formadas por **grades de pixels** (quadradinhos organizados em linhas e colunas).
- **Cada pixel tem uma única cor por vez.**
- Para o computador identificar um pixel, ele usa **coordenadas (x, y)**:
  - `x` → posição na **coluna** (da esquerda para a direita, começando do 0)
  - `y` → posição na **linha** (de cima para baixo, começando do 0)
- Essa forma de **endereçamento** permite localizar qualquer pixel em qualquer imagem, não importa seu tamanho.

## 🎯 Exemplo:
- Pixel `(5,0)` → 6ª coluna, 1ª linha (azul no exemplo).
- Pixel `(1,1)` → 2ª coluna, 2ª linha (branco).
- Pixel `(2,4)` → 3ª coluna, 5ª linha (amarelo).

---

## ✅ >> Resumo prático

1. Toda imagem é uma **matriz de pixels**, com linhas (y) e colunas (x).
2. Cada pixel tem **coordenadas únicas** que permitem ao computador saber **onde ele está**.
3. O sistema sempre começa a contar do **canto superior esquerdo** da imagem.
4. **(x, y)** é o padrão para endereçar pixels — essencial em edição de imagens, jogos e gráficos.
