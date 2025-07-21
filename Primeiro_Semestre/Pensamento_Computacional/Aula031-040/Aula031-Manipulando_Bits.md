# 🧠 Tema 2: Manipulando Cada Bit (Pixel)

## 🧩 Objetivo

- Modificar **um pixel específico** da imagem, alterando **cor diretamente** via código.
- Neste caso: mudar o pixel (4,4) da imagem `circulo.bmp` para ficar **vermelho**.

---

### 🧪 Novo Código com Manipulação Direta

| Passo | Instrução                             | O que faz                                                 |
|------:|---------------------------------------|-----------------------------------------------------------|
| 1     | `img = new SimpleImage("circulo.bmp");` | Carrega a imagem na variável `img`.                       |
| 2     | `img.setZoom(20);`                    | Amplia a imagem 20 vezes (zoom in).                       |
| 3     | `pixel = img.getPixel(4,4);`          | Seleciona o pixel na posição (4,4) e salva em `pixel`.    |
| 4     | `pixel.setRed(255);`                  | Define o canal vermelho do pixel como **255** (máximo).   |
| 5     | `print(img);`                         | Exibe a imagem na tela.                                   |

---

## 🎯 Resultado

- O pixel na posição (4,4) ficará **totalmente vermelho**.
- Lembrando: `(0,0)` é o canto superior esquerdo da imagem.
- Valores RGB variam de **0 a 255**:
  - `setRed(255)` → vermelho total.
  - `setRed(0)` → sem vermelho.

---

## ❓ Pergunta: Qual é a primeira instrução nova?

**Resposta:**  
➡️ `pixel = img.getPixel(4,4);`  
Ela busca um pixel específico da imagem e permite que você o modifique individualmente.

---

## 🧠 Pensamento Computacional Aplicado

- Cada pixel é **um objeto com propriedades numéricas (RGB)**.
- Manipular imagem = **alterar dados numéricos**.
- Aqui, você acessa a imagem como uma **matriz 2D** de objetos mutáveis.

---

## 💡 Dica

> Você pode alterar também os outros canais:  
> `pixel.setGreen(255);` ou `pixel.setBlue(255);`  
> Combine para criar qualquer cor que quiser!

## Manipulação de Pixels com Expressões em JavaScript

```javascript
img = new SimpleImage("img/flores.jpg");
for(pixel: img){
    // Tornar a imagem mais alaranjada (reduzindo o verde)
    pixel.setGreen(pixel.getGreen() * 0.7);

    // --- OU ---

    // Converter para escala de cinza:
    // let avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    // pixel.setRed(avg);
    // pixel.setGreen(avg);
    // pixel.setBlue(avg);
}
print(img);
```

## Manipulação de Pixels Utilizando Condicionais 

```javascript

img = new SimpleImage("img/calcada.jpg");

for (pixel : img) {
    let media = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;

    if (pixel.getRed() > media && pixel.getGreen() > media) {
        pixel.setRed(media);
        pixel.setGreen(media);
        pixel.setBlue(media);
    }
}

print(img);


// Nesse código nós calculamos uma escala para aplicar o cinza, e após criarmos o cinza,
// nós vamos aplicar nos pixels que tiverem um valor de Vermelho e Verde acima da media
// Consequentemente os pixels amarelos da imagem ficarão cinzas
```
