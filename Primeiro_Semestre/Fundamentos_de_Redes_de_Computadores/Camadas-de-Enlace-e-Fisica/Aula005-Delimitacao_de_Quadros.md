# 🧱 Enquadramento (Delimitação de Quadros)

## 📦 Por que usar quadros?
- Enviar um bloco gigante de dados sem dividir = 💥 erro → precisa repetir **tudo**.
- Enviar dados em **quadros menores** → se der erro, só repete o quadro com problema.
- Garante **eficiência** no controle de erros e melhor desempenho.

---

## 🧰 Técnicas de Enquadramento

### 1. 🧮 Contagem de Caracteres
- O quadro começa com um campo que **indica o número de caracteres**.
- 🧠 O receptor usa esse número pra saber onde termina o quadro.
- 🚨 Problema: se esse campo der erro, perde o sincronismo.

---

### 2. 🔡 Enquadramento por Caractere
- Usa **STX (start)** e **ETX (end)** pra marcar início e fim do quadro.
- Campos extras: `SYN`, `HEADER`, `CRC`.

#### 🧩 Problema:
- Se o **campo de dados** tiver um ETX real (como dado), o receptor se confunde.

#### 💡 Solução: **Caracter Stuffing**
- Usa `DLE` como aviso: `DLE STX` (início) e `DLE ETX` (fim).
- Se encontrar um `DLE` nos dados → duplica: `DLE DLE`.
- O receptor detecta e remove os `DLE` duplicados.

---

### 3. 🧠 Enquadramento por Bit
- Usa flag: `01111110` no **início e fim** do quadro.
- Se o receptor perder a sincronia, é só procurar pela flag.

#### 🔧 Bit Stuffing
- Se achar 5 bits "1" seguidos nos dados → insere um `0` logo depois.
- O receptor remove esse `0` se for stuffing ou interpreta como flag se for `1`.

---

### 4. ⚡ Violação de Código do Nível Físico
- Usa **variações proibidas do sinal** como marcador de quadros.
- Exemplo: Codificação **Manchester**:
  - `1`: transição alto → baixo
  - `0`: transição baixo → alto
  - 🧨 Transições **alto → alto** e **baixo → baixo** não são usadas → servem como delimitadores.

---

## ✅ Resumo Rápido

| Técnica                 | Vantagem                                  | Problema/Desvantagem                      |
|------------------------|-------------------------------------------|-------------------------------------------|
| Contagem de caractere  | Simples                                    | Sincronismo se campo de contagem falhar   |
| Por caractere          | Fácil de interpretar                      | Conflito com dados do usuário             |
| Por bit                | Não depende de caractere, só bits         | Precisa de stuffing                       |
| Violação do código     | Aproveita padrões não usados no sinal     | Depende da codificação usada              |

---

