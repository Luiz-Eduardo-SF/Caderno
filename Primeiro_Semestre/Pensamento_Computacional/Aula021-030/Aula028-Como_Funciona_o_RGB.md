## 🎛️ Esquema de Cores RGB – Como funciona

- O esquema RGB (Red, Green, Blue) permite representar **qualquer cor** ajustando a **intensidade de cada cor base**:
  - 🔴 R: Vermelho
  - 🟢 G: Verde
  - 🔵 B: Azul

- Cada cor tem um **valor de 0 a 255**, onde:
  - 0 = ausência total de luz (nada da cor)
  - 255 = intensidade máxima (cor pura)

---

### 🧪 Experimentos práticos com RGB

| Código RGB        | Cor Resultante             | Explicação                                                                 |
|-------------------|----------------------------|----------------------------------------------------------------------------|
| `(0,0,0)`         | Preto                      | Ausência total de luz                                                     |
| `(255,0,0)`       | Vermelho puro              | Somente vermelho, máximo                                                   |
| `(0,255,0)`       | Verde puro                 | Somente verde, máximo                                                      |
| `(0,0,255)`       | Azul puro                  | Somente azul, máximo                                                       |
| `(50,50,50)`      | Cinza escuro               | Todos os canais iguais, baixa intensidade                                 |
| `(100,100,100)`   | Cinza mais claro           | Todos os canais iguais, mais intensidade                                  |
| `(255,255,255)`   | Branco                     | Máxima intensidade de todas as cores                                      |
| `(255,0,255)`     | Roxo (Magenta)             | Vermelho + Azul, sem verde                                                |
| `(255,255,0)`     | Amarelo                    | Vermelho + Verde, sem azul                                                |
| `(125,125,0)`     | Amarelo escuro             | Vermelho + Verde em intensidade média                                     |
| `(0,255,255)`     | Turquesa (Ciano)           | Verde + Azul, sem vermelho                                                |

---

### 📌 Conclusões Práticas

1. **RGB é um modelo aditivo de luz**: quanto mais você soma, mais claro fica.
2. **Escala de cinza**: ocorre quando R = G = B.
   - Preto: `(0,0,0)`
   - Branco: `(255,255,255)`
   - Cinza intermediário: `(x,x,x)`
3. Cores vibrantes são criadas ao **misturar duas das três cores em alta intensidade**.
4. Cada pixel da imagem é identificado por **coordenadas (x,y)** + **cor RGB**.
5. Um pixel contém **apenas uma cor por vez**, definida pelo seu trio RGB.

---

### ✅ Resumo prático

- RGB representa cores digitalmente com **3 valores** de 0 a 255.
- Você só precisa de **vermelho, verde e azul** para criar **qualquer cor visível em uma tela**.
- Modificar esses valores permite gerar: tons escuros, claros, saturados, mistos e até escala de cinza.
- Cada pixel tem um código RGB que define **sua cor atual na imagem**.

