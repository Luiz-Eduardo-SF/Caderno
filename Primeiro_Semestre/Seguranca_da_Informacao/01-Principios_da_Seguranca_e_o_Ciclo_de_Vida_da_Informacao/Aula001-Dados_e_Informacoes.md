# &#x1F5C4;&#xFE0F; Dado e Informação

De maneira simples (porque enrolam bastante na aula):

- **Dados** &rarr; São fatos brutos e sem contexto.
- **Informação** &rarr; É o resultado da interpretação dos dados - dados com significado.

## Exemplos

```  
Dado = 32
Informação = 32 é a temperatura de um local.

Dado = 9,5
Informação = 9,5 é a nota de um aluno no curso de tecnologia.
```

---
<br>

# &#x1F4BE; Ciclo de Vida da Informação

Por conta de a informação ser uma contextualização de um dado, ela possui um *Ciclo de Vida*:

| Etapa     |          Ordem       |
|:---------:|:--------------------:|
|Criação    | 1ª etapa             |
|Transporte | 2ª etapa (mais comum)|
|Manuseio   | 2ª etapa             |
|Descarte   | 3ª etapa             |

Ou seja, após a criação do dado na primeira etapa, ele pode ser manuseado ou transportado, e após isso, ele é descartado.

Durante essas etapas, obviamente, a informação deve ser protegida, pois seu vazamento em qualquer parte do processo pode acarretar um problema muito grave.

---

## &#x1F4A3; Alguns exemplos de como pode ocorrer o vazamento de informações:

- **Transporte Inadequado de Dados**
    - Usar uma transportadora que não realiza todos os procedimentos de segurança adequados.
- **Conserto de Dispositivos**
    - Dispositivos que contêm dados, levados para manutenções não confiáveis sem que os dados estejam protegidos, podem resultar em roubo de dados.
- **Manuseio da Informação sem o devido cuidado**
    - Um exemplo seria o manuseio dos dispositivos que contêm os dados, sem criptografia e sem segurança adequada, o que pode resultar em furtos e vazamentos de dados (*Data Leak*).
- **Venda de Dispositivos sem Precaução**
    - A venda descuidada de dispositivos de armazenamento que já foram utilizados pode resultar em um vazamento de dados, pois o dispositivo ainda pode conter algum tipo de dado/informação.

---

## &#x2705; Cuidados que Devemos ter

No Manuseio de informações, é necessário que haja algum tipo de segurança no transporte, e a forma mais eficaz de proteção é a **criptografia**.

## &#x1F510; Criptografia:
- É o **Embaralhamento das informações** usando:
    ---
    - Um **Algoritimo**.
    ---
    - Uma **Chave** (ou mais).
        - **Criptografar** (embaralhar)
        - **Descriptografar** (desembaralhar)
    ---
- &#x1F9E9; **Tipos de Criptografia**:
    ---
    - **Simétrica**:
        - Usa a mesma chave pra criptografar e decriptografar 🔁
    - **Assimétrica**:
        - Usa duas chaves diferentes:
            - uma pra criptografar
            - outra pra decriptografar 🔄
---

