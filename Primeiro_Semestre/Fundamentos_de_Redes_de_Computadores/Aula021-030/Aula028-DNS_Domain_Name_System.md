# &#x1F310; Serviço de Nomes – DNS (Domain Name System)

## &#x1F4D6; O que é DNS?

- A internet funciona com **endereços IP**, mas lembrar todos seria um caos &#x1F62C;
- O **DNS converte nomes fáceis** (como `www.google.com`) em endereços IP (tipo `142.250.190.4`)
- Ele é **hierárquico** e baseado em **domínios**

---

## &#x1F4AC; Funções do DNS

Além de converter nomes em IPs, ele também:

- Mapeia nomes de **servidores de e-mail** (MX)
- Cria **apelidos** (aliases com CNAME)
- Permite **balanceamento de carga**
- Faz **mapeamento reverso** (IP → nome)

---

## &#x1F5FA;&#xFE0F; Espaço de Nomes

### 🌍 Níveis de domínios:

- Raiz (`.`)
- Domínios de topo (TLDs): `.com`, `.org`, `.br`, etc.
- Subdomínios: `gov.br`, `sus.gov.br`, etc.

### 🧠 Tipos de domínios:

- **Genéricos**:
  - `.com`: comercial
  - `.edu`: educacional
  - `.org`: organizações
  - `.int`: organizações internacionais

- **De países**:
  - `.br`: Brasil
  - `.pt`: Portugal
  - `.jp`: Japão

📌 Características:
- Sem distinção entre maiúsculas e minúsculas (`edu` = `EDU`)
- Subdomínios ilimitados
- Cada componente: até **63 caracteres**
- Nome completo: até **255 caracteres**

---

## &#x1F4E1; Protocolos usados

- DNS roda sobre **UDP**, porta **53**
- UDP não garante entrega, então o **software DNS** deve lidar com falhas

---

## &#x1F5C2;&#xFE0F; Resolução de Nomes (como tudo funciona)

### 🧩 Conceitos principais:

- **Zonas**: parte do espaço de nomes gerenciada por um servidor
- **Servidores de nomes**:
  - **Primário**: possui dados da zona
  - **Secundário**: backup, assume se o primário falhar
- **Registros de recursos**: dados do nome, IP, MX, etc.
- **Solucionador DNS** (resolver): programa no cliente que pergunta "qual é o IP?"

---

## &#x2699;&#xFE0F; Tipos de Consulta

### 🔄 Consulta Recursiva
- O **solucionador exige resposta completa**
- O servidor local se vira pra resolver tudo e responder

### &#x27A1;&#xFE0F; Consulta Iterativa
- O servidor DNS **responde com o próximo passo**, e o servidor local vai consultando um por um

---

## &#x1F50D; Exemplo: www.sus.gov.br

1. O cliente pede o IP de `www.sus.gov.br`
2. O solucionador envia para o **servidor DNS local**
3. Se não tiver em cache, ele:
   - Pergunta ao **servidor raiz** onde está `.br`
   - Pergunta ao servidor `.br` onde está `gov.br`
   - Pergunta ao `gov.br` onde está `sus.gov.br`
   - E por fim resolve o endereço!

&#x1F6A8; Isso pode gerar MUITAS requisições → sobrecarga ⚠️

---

## &#x1F512; Como evitar sobrecarga nos servidores DNS?

- **Não permitir consultas recursivas de qualquer um**
- Servidores devem **aceitar recursivas apenas de IPs autorizados**
- Respostas a outros clientes devem ser negadas automaticamente

---

## &#x1F4D1; Componentes do DNS (resumo rápido)

| Componente       | Função                                  |
|------------------|------------------------------------------|
| Solucionador     | Cliente que faz a requisição             |
| Servidor de nomes| Responde ou encaminha a requisição       |
| Registros        | Informações sobre nomes e endereços      |
| Zona             | Parte do DNS que um servidor gerencia    |
| Cache            | Guarda respostas anteriores (otimiza)    |

---

## &#x1F3AF; Resumo Final

- DNS é tipo uma **agenda telefônica da internet**
- Facilita o uso de nomes em vez de IPs
- Usa UDP na porta 53
- Organizado em **níveis de domínio**
- Suporta consultas recursivas e iterativas
- Implementado com **servidores primários/backup e cache**

> &#x1F4A1; Sem DNS, a internet seria praticamente **inutilizável pra humanos**
