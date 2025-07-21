## 🧠 Tema 2: Manipulação Singular de Dados

### 📌 O que é?

- "Manipulação singular de dados" = alterar **um único dado por vez** (neste caso: **um pixel**).
- Usamos isso quando **não temos recursos** para processar vários dados de forma eficiente ao mesmo tempo.
- É o primeiro passo para entender **como o computador lida com imagens**, pixel por pixel.

---

### 🖼️ Exemplo prático: Imagem `circulo.bmp`

- Tamanho: 10x10 pixels.
- Formato: BMP (Bitmap).
- Visual: fundo branco + círculo preto central.
- Pequena de propósito — o objetivo é **forçar você a ampliar** a imagem com código.

---

### 🧪 Código de Ampliação com JavaScript

#### ✅ Passos:

| Linha | Código                                        | Função                                                       |
|------:|----------------------------------------------|--------------------------------------------------------------|
| 1     | `img = new SimpleImage("circulo.bmp");`      | Carrega a imagem para a memória                              |
| 2     | `img.setZoom(20);`                           | Amplia a imagem 20 vezes                                     |
| 3     | `print(img);`                                | Exibe a imagem na tela                                       |

#### 🔁 Experimente:

- Use `setZoom(10)` → imagem menor.
- Use `setZoom(30)` → imagem maior.

---

### 📍 Conclusão

- Esse tipo de manipulação é **singular** porque mexe em **um pixel por vez**, mesmo que o efeito pareça visualmente em toda a imagem.
- Pequenas instruções, mas com grande impacto: você controla **como o computador exibe imagens**.

---

### 💡 Dica:

> Teste diferentes valores de zoom. O erro faz parte do processo. Aprender código é explorar!

---

### 🧮 Pensamento Computacional Aplicado

- Toda imagem é uma **matriz de pixels**.
- Cada pixel tem cor definida por valores **RGB**.
- Quando manipulamos a imagem, estamos **manipulando números**.
