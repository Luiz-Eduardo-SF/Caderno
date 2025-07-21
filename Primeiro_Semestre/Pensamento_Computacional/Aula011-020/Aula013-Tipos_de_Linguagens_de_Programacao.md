# Tipos de Linguagens de Programação

A classificação de linguagens de programação pode ser mais detalhada, mas para simplicidade, vamos agrupá-las nas seguintes categorias:

---

## Linguagem Compilada

- **Definição**: São linguagens em que o código-fonte é traduzido para código de máquina **antes** da execução, criando um arquivo **executável**.

### Vantagens:
- **Alta performance**: O código compilado é otimizado para a arquitetura do processador.
- **Específico para o tipo de processador**: O código gerado é ajustado para rodar em uma máquina específica.

### Exemplo de Linguagem Compilada: C++
- **Código-fonte (em C++)**:
    ```cpp
    a = "Bom dia";
    b = a + "!";
    ```

- **Como funciona**:
    1. O programador escreve o código-fonte.
    2. Um **compilador** traduz esse código para **código de máquina** (binário).
    3. O **arquivo executável** gerado pode ser rodado em computadores com o mesmo tipo de processador.

- **Firefox como Exemplo**:
    O Firefox, por exemplo, é escrito em C++. O código-fonte é compilado e gerado como um arquivo executável, como `Firefox.exe`, que é distribuído para os usuários.

- **Nota Importante**: 
    A compilação é feita **uma única vez** pelos desenvolvedores. Depois disso, o arquivo executável pode ser distribuído para os usuários finais, que não precisam do código-fonte nem do compilador.

---

## Linguagem Dinâmica ou Interpretada

- **Definição**: As linguagens dinâmicas são executadas no **tempo de execução**, usando **interpretadores** para processar o código linha por linha.

### Exemplo de Linguagens Dinâmicas:
- **JavaScript, Python, Java**: São exemplos de linguagens interpretadas.

### Funcionamento:
- O **interpretador** lê e executa o código-fonte linha por linha.
  
#### Exemplo com JavaScript:
- **Código JavaScript**:
    ```javascript
    a = 1;
    b = a + 1;
    ```
- **Como funciona**: 
    1. O interpretador executa a linha `a = 1;`.
    2. Em seguida, executa `b = a + 1;`, com o valor de `a` sendo `1`.

- **Onde são usados**:
    Navegadores de internet como **Chrome, Firefox, Edge** possuem interpretadores de JavaScript, que processam código JavaScript diretamente nas páginas da web.

---

## Diferença entre Compilada e Interpretada

- **Compilada**:
  - O código é traduzido para máquina **antes** da execução.
  - Resulta em **arquivos executáveis**.
  
- **Interpretada**:
  - O código é traduzido e executado **linha por linha** durante a execução.

&#x1F4BB; **Dica**: Linguagens compiladas são mais rápidas, mas as dinâmicas oferecem maior flexibilidade durante o desenvolvimento.

---

# > Conceito

- Em sistemas computacionais modernos, **é extremamente raro** escrever código de máquina manualmente.
- **Por quê?**  
  Porque o código de máquina é composto de **instruções muito simples e numerosas**, o que dificulta o trabalho humano.
  
---

# Como é feito hoje?

- O programador escreve em **linguagens de alto nível**, que possuem **recursos mais poderosos** e **mais fáceis de entender** do que o código de máquina.

---

# Exemplos de estruturas de alto nível:

- Variáveis
- Laços (loops)
- Condições (`if/else`)
- Funções
- Estruturas de dados (listas, vetores, mapas etc.)

---

# Observação importante

> Nenhum desses recursos de alto nível existe **naturalmente** no código de máquina de baixo nível.  
> Eles são "inventados" pelas linguagens de programação, como:

- JavaScript
- Java
- Python
- C
- C++

&#x1F4BB; Programar hoje é **dar ordens em linguagem de gente**, e depois o computador traduz pra linguagem de máquina.
