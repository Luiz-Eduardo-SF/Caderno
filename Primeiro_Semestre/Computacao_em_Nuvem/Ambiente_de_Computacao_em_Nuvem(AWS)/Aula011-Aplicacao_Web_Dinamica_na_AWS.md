# 🚀 Aplicação Web Dinâmica na AWS

## ✅ Introdução

- Softwares web modernos precisam de **tecnologias dinâmicas**.
- Sites dinâmicos exigem servidores capazes de processar conteúdo em tempo real.
- A AWS oferece o **Amazon EC2** para criar ambientes com qualquer tecnologia de **linguagem** ou **framework**.
- Exemplo prático: **WordPress** — uma plataforma amplamente usada.

---

## 🏗️ Arquitetura: **Aplicação Dinâmica com EC2**

### ✅ Vantagens:
- Flexibilidade total: **qualquer linguagem/framework**.
- Suporte a conteúdo **dinâmico** e **estático**.
- Fácil escalabilidade e personalização.

---

## 🚀 Passo a Passo: **Provisionando WordPress com EC2**

### 1️⃣ Buscar a **AMI** (Amazon Machine Image)

- Acesse a seção **“Application and OS Images”**.
- Pesquise por: `"wordpress"`.
  
➡️ As AMIs são listadas por **relevância**.

> **Dica**: Prefira imagens da **Bitnami by VMware**, validadas pela AWS.

---

### 2️⃣ Selecionar a **AMI** adequada

- Escolha a AMI da **Bitnami**, verificada pela AWS.
- Garante confiabilidade e suporte.

---

### 3️⃣ Configurar a **Instância EC2**

- Siga o fluxo tradicional:
  - Escolha o **tamanho** → recomendação: `t3.small` para testes.
  - Selecione ou crie um **par de chaves** (para acesso SSH).

---

### 4️⃣ Ajustar **Rede e Segurança**

- A AMI define um **Security Group** pré-configurado.
- Libera automaticamente as portas:
  - **80 (HTTP)**
  - **443 (HTTPS)**

> Facilita o **acesso web** sem configurações manuais.

---

### 5️⃣ Provisionar e **Iniciar a Instância**

- Após iniciar, localize o:
  - **DNS público** → essencial para acessar a aplicação.

Exemplo:  
`http://ec2-XX-XXX-XXX.compute.amazonaws.com`

---

### ✅ Resultado Esperado:

- Acesse o DNS público.
- Deve carregar a **página inicial do WordPress**.

![Blog WordPress instalado](#)

---

## 🔑 Recuperar **Credenciais de Acesso Admin**

### Como fazer:

1. Acesse a instância no console EC2.
2. Clique em: **"Actions" → "Get System Log"**.
3. Role até encontrar o bloco com:

```plaintext
Username: user
Password: *********
```

---

### Endereço de login do admin:  
`http://<DNS-público>/wp-admin`

---

## 📝 Criando um **Novo Post**

1. Acesse `/wp-admin` com as credenciais.
2. Vá em **"Posts" → "Add New"**.
3. Escreva o conteúdo.
4. Clique em **"Publish"**.

➡️ O post será exibido na **página principal**.

---

## 📦 **Arquivamento e Backups**

- Utilize o **Amazon S3** para armazenar:
  - **Backups** automáticos.
  - **Arquivos de mídia** do WordPress.

---

## ✅ Conclusão

- EC2 é ideal para aplicações **dinâmicas**.
- AMIs pré-configuradas (ex.: Bitnami) simplificam o provisionamento.
- AWS oferece **flexibilidade** e **escalabilidade** para qualquer aplicação web.

---

| Tipo de Aplicação | Tecnologia | Exemplo de Serviço AWS |
|-------------------|------------|------------------------|
| Estática          | HTML, CSS, JS | Amazon S3             |
| Dinâmica          | PHP, Node.js, etc. | Amazon EC2         |

---

&#x1F4BB; **Pronto!** Agora você sabe como provisionar uma aplicação web dinâmica na AWS, usando EC2 e AMIs do marketplace!

