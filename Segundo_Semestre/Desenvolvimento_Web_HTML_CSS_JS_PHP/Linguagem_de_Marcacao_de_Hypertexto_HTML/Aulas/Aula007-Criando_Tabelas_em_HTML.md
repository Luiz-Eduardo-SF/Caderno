# 📝 Criando Tabelas em HTML

- Nesta aula, veremos algumas estruturas de tabelas e atributos que modificam a visualização dessas tabelas.

- Roteiro da aula:
    
    -   1- Tabelas sem título
    -   2- Tabelas com título
    -   3- Tabelas com cabeçalho e rodapé
    -   4- Tabelas com linhas e colunas expandidas
    -   5- Um exemplo completo (na pasta de exemplos da aula)

## 1️⃣ Exemplo de uma tabela simples sem título

```html
<body>
    <table>
        <tr>
            <td>Samuel</td><td>HTML</td><td>9</td>
        </tr>
        <tr>
            <td>Rodrigo</td><td>JavaScript</td><td>10</td>
        </tr>
    </table>
</body>
```

> Neste exemplo, temos apenas uma tabela simples com 2 linhas e 3 colunas.<br> Sem cabeçalho, sem rodapé e sem título.

## 2️⃣ Exemplo de tabela com título

```html
<body>
    <h2>Notas dos Alunos</h2>
    <table>
        <tr>
            <td>Samuel</td><td>HTML</td><td>9</td>
        </tr>
        <tr>
            <td>Rodrigo</td><td>JavaScript</td><td>10</td>
        </tr>
    </table>
</body>
```

> Neste exemplo, temos a mesma tabela, mas com um título simples.<br>(Ainda sem cabeçalho e sem rodapé).

## 3️⃣ Exemplo de tabela com cabeçalho e rodapé

```html
<body>
    <h2>Notas dos Alunos</h2>
    <table>
        <thead>
            <tr>
                <th>Nome</th><th>Disciplina</th><th>Nota</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Samuel</td><td>HTML</td><td>9</td>
            </tr>
            <tr>
                <td>Rodrigo</td><td>JavaScript</td><td>10</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <th>Total de alunos: 2</th>
                <th>Total de disciplinas: 2</th>
                <th>Total das notas: 19</th>
            </tr>
        </tfoot>
    </table>
</body>
```

> Neste exemplo, temos a mesma tabela, agora com cabeçalho, rodapé e título.

## 4️⃣ Exemplo de tabela com linhas e colunas expandidas

```html
<body>
    <h2>Linhas expandidas</h2>
    <table>
        <thead>
            <tr>
                <th>Função</th><th>Atributos</th><th>Valores</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td rowspan="3">&lt;img&gt;</td><td>src</td><td>Caminho do arquivo (path)</td>
            </tr>
            <tr>
                <td>height</td><td>Numéricos</td>
            </tr>
            <tr>
                <td>width</td><td>Numéricos</td>
            </tr>
        </tbody>
    </table>
</body>
```

> Neste exemplo, criamos uma tabela com uma linha primária que ocupa o espaço de 3 linhas no total, criando assim uma tabela com linhas expandidas.

```html
<body>
    <h2>Colunas expandidas</h2>
    <table>
        <thead>
            <tr>
                <th colspan="2">Alunos</th>
            </tr>
            <tr>
                <th>Nomes</th>
                <th>Sobrenomes</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Amanda</td>
                <td>Ferreira</td>
            </tr>
            <tr>
                <td>Daniel</td>
                <td>Santos</td>
            </tr>
            <tr>
                <td>Miguel</td>
                <td>Ferreira</td>
            </tr>
        </tbody>
    </table>
</body>
```

> Neste exemplo, criamos uma tabela com uma coluna principal que ocupa o espaço de 2 colunas no total, criando um título de tabela dentro da própria tabela.

---

## ✅ Conclusão

- Nesta aula, vimos que é possível modificar a tabela de diferentes formas, podendo assim criar tabelas mais complexas, com cabeçalho, rodapé, linhas e colunas expandidas. (Lembre-se sempre de colocar os conteúdos abordados nas aulas em prática para evoluir ainda mais).
