# &#x1F4BB; RESUMO – Circuitos Virtuais na Camada de Rede

## &#x1F4C2; O que são Circuitos Virtuais (CV)?

- São **conexões lógicas** entre dois hospedeiros, estabelecidas **antes da troca de dados**.
- Evitam recalcular a rota a cada pacote.
- Todos os pacotes seguem **exatamente o mesmo caminho**.
- Ao final da comunicação, o circuito é **desfeito**.

---

## &#x1F4CD; Componentes de um CV:

1. **Rota definida** (ex: H1 ➝ A ➝ B ➝ E ➝ F ➝ H2)
2. **Números de identificação do CV** por enlace (ex: 23, 8, 37, 22, 16)
3. **Tabelas de repasse nos comutadores**

&#x1F4CA; *Cada comutador mantém uma tabela com as rotas dos CVs ativos.*

---

## &#x1F5C3;&#xFE0F; Exemplo prático:

➡️ Rota do CV:  
H1 ➝ A ➝ B ➝ E ➝ F ➝ H2  
CVs atribuídos nos enlaces:  
- A: 23 ➝ 8  
- B: 8 ➝ 37  
- E: 37 ➝ 22  
- F: 22 ➝ 16

&#x1F6E0;&#xFE0F; As tabelas associam **entrada/saída de CV** com **interfaces da rede**.

---

## 🔀 Por que usar números diferentes de CV?

- Evita que todos os comutadores precisem usar o **mesmo identificador global**.
- Simplifica a gerência de conexões em **redes grandes**.
- O que importa: **CV de saída de um é igual ao de entrada do próximo**.

---

## ⚙️ Fases do Circuito Virtual

### 1. Estabelecimento do CV &#x1F4CB;
- Define o **caminho e parâmetros**.
- Comutadores atualizam suas **tabelas de repasse**.

### 2. Transferência de dados &#x1F4E1;
- Dados trafegam usando o **caminho fixo**.
- Pacotes **chegam na ordem correta**.

### 3. Encerramento do CV &#x274C;
- Os comutadores **liberam os recursos**.
- As tabelas são **limpas** do CV encerrado.

---

## 🧠 Vantagens dos CVs

- Ordem garantida dos pacotes &#x1F503;
- Caminho reservado (baixa latência) &#x1F310;
- Boa para **aplicações sensíveis a ordem**, como vídeo e voz &#x1F3A4;

## ⚠️ Limitações

- Menos flexível que datagramas.
- Menos tolerante a falhas (se o caminho falhar, o CV quebra).

---
