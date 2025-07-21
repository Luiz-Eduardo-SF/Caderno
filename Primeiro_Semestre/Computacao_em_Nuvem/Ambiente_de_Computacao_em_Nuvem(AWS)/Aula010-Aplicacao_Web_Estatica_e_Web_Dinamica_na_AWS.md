# 🌐 Aplicação Web Estática e Web Dinâmica na AWS

## ✅ Introdução

A **Amazon Web Services (AWS)** permite que empresas e profissionais experimentem e provisionem aplicações com **baixo custo** e **sem compromisso de longo prazo**. 

Vamos analisar dois cenários importantes: **aplicações web estáticas** e **web dinâmicas**, com foco no provisionamento na AWS.

---

## 🖥️ O que é uma Aplicação Web?

- É uma **solução de software** executada diretamente no **navegador**.
- Não requer **instalação local**.
- Todo o processamento ocorre no **servidor de hospedagem**.
- O usuário **interage remotamente**.
  
Na AWS, existem várias **arquiteturas** que podem ser utilizadas, dependendo das **características** e **requisitos** da aplicação.

---

## 🏗️ Arquitetura: **Site Estático** com Amazon S3

### ✅ Vantagens:
- **Sem custo** de execução por hora.
- Processo **simples**.
- Ideal para **sites estáticos** (HTML, CSS, JS).

---

## 🚀 Passo a Passo: **Hospedagem no Amazon S3**

### 1️⃣ Habilitar o **Static website hosting**:
- Acesse as **propriedades** do bucket.
- Ative a opção **Static website hosting**.
- Defina o **nome do arquivo** que será tratado como **página padrão** (ex.: `index.html`).

---

### 2️⃣ Obter a **URL pública**:
- Após salvar, será exibido o endereço público na seção **Static website hosting**.
- **Salve** esta URL para acessar o site.

---

### 3️⃣ Alterar **Permissões** do Bucket:
- Acesse a aba **Permissions**.
- **Desative** todas as opções de **"Block public access"**.
  
![Aba de permissões](#)

---

### 4️⃣ Configurar a **Bucket Policy**:
- Acesse o campo **"Bucket policy"**.
- Insira a política de permissão de **leitura pública**.

Exemplo de política (ajuste `nomedobucket`):

```python
{
 "Version": "2012-10-17",
 "Statement": [
 {
  "Sid": "PublicReadGetObject",
  "Effect": "Allow",
  "Principal": "*",
  "Action": [
  "s3:GetObject"
  ],
  "Resource": [
  "arn:aws:s3:::nomedobucket/*"
  ]
 }
 ]
}
```

---

## 📁 **Upload dos Arquivos**:

- Faça o **upload** dos arquivos do seu site para a **raiz** do bucket.
- Exemplo: Site estático de exemplo da **Cloud Academy**:

➡️ [https://github.com/cloudacademy/static-website-example](https://github.com/cloudacademy/static-website-example)

---

## ✅ Resultado Esperado:

- Ao acessar a **URL pública** gerada, você verá a página inicial do site.
- Isso indica que a **configuração está correta**.

---

## ⚠️ Importância do **Nome do Bucket**:

- O nome do bucket deve ser **único** e apropriado para **web hosting**.
- Ele será utilizado como parte da **URL pública**.

---

## 🆚 Aplicações Web Estáticas vs. Dinâmicas:

| Tipo | Características |
|-------|----------------|
| **Estática** | Arquivos servidos diretamente (HTML, CSS, JS). Sem lógica de backend. |
| **Dinâmica** | Requer backend (ex.: EC2, Lambda) e banco de dados (ex.: RDS, DynamoDB). Gera conteúdo sob demanda. |

---

## ✅ Conclusão

- Para **sites estáticos** → Amazon S3 é a solução ideal: **simples**, **barata** e **escalável**.
- Para **aplicações dinâmicas** → arquiteturas mais complexas, envolvendo EC2, Elastic Beanstalk, Lambda, entre outros.

---

&#x1F4BB; **Pronto!** Agora você já sabe como provisionar e hospedar uma aplicação web estática na AWS!
