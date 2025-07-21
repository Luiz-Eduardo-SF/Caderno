# &#x1F4BB; Azure - Serviços de Armazenamento

## ✅ Criação de Conta de Armazenamento
- Fornece **namespace exclusivo** para dados acessíveis via **HTTP/HTTPS**.
- Dados são: **seguros**, **altamente disponíveis**, **duráveis** e **escaláveis**.

---

## ✅ Tipos de Conta de Armazenamento

| Tipo | Serviços | Redundância | Uso |
| --- | --- | --- | --- |
| Uso geral v2 (Standard) | Blobs, Filas, Tabelas, Azure Files | LRS, GRS, RA-GRS, ZRS, GZRS, RA-GZRS | Conta básica, recomendada para a maioria dos cenários |
| Blobs de blocos (Premium) | Blobs | LRS, ZRS | Alta taxa de transação, baixa latência |
| Compartilhamentos de arquivos (Premium) | Azure Files | LRS, ZRS | Compartilhamentos SMB/NFS |
| Blobs de página (Premium) | Blobs de página | LRS | Exclusivo para blobs de página |

---

## ✅ Redundância de Armazenamento

### Fatores importantes:
1. Replicação na **região primária**.
2. Replicação em **região secundária** para proteção contra desastres.
3. **Acesso de leitura** aos dados replicados, se necessário.

---

## ✅ Tipos de Redundância

### &#x1F4BB; Redundância Local (LRS)
- Replicação: **3 vezes** no mesmo datacenter.
- Durabilidade: **99,999999999%** (11 noves).

---

### &#x1F4BB; Redundância de Zona (ZRS)
- Replicação: **3 zonas** na mesma região.
- Durabilidade: **99,9999999999%** (12 noves).
- Necessário que a região tenha **3 zonas**.

---

### &#x1F4BB; Redundância Geográfica (GRS)
- Replicação: 
  - **Sincronamente** na região primária (LRS).
  - **Assincronamente** para região secundária.
- Durabilidade: **99,99999999999999%** (16 noves).
- **Custo mais elevado**.

---

### &#x1F4BB; Redundância de Zona Geográfica (GZRS)
- Combina **ZRS + GRS**:
  - Replicação entre zonas na região primária.
  - Replicação para uma **região secundária**.
- Alta disponibilidade e proteção contra desastres.

---

## ✅ Serviços de Armazenamento do Azure

### &#x1F4BB; Blobs do Azure
- Armazenamento de **dados não estruturados**: textos, vídeos, imagens.
- Suporte a **Data Lake Storage Gen2**.
- Escalável, permite **milhares de transferências simultâneas**.
- Usos:
  - Armazenamento e distribuição de **imagens, vídeos e documentos**.
  - **Streaming** de áudio/vídeo.
  - **Backup e recuperação**.
  - **Análises de dados**.

---

### &#x1F4BB; Camadas (Tiers) de Acesso

| Camada | Descrição | Exemplo |
| --- | --- | --- |
| Quente (Hot) | Acesso frequente | Imagens e vídeos de site |
| Fria (Cool) | Acesso ocasional (>30 dias) | Faturas, laudos médicos |
| Arquivo (Archive) | Acesso raro (>180 dias) | Backups, arquivamento |

---

### &#x1F4BB; Arquivos do Azure (Azure Files)
- Compartilhamento via **SMB/NFS**.
- Compatível com **Windows, Linux, macOS**.
- Pode ser mapeado em **VMs** ou máquinas **locais**.
- Suporte a **Azure File Sync** para cache local.

**Vantagens**:
- **Acesso compartilhado**.
- **Gerenciamento simples** (sem necessidade de hardware).
- Automatização via **PowerShell** e **Az-Cli**.
- Alta **resiliência**.
- Familiaridade com protocolos tradicionais.

⚠️ Necessário abrir a **porta 445** no provedor de internet.

---

### &#x1F4BB; Filas do Azure (Azure Queues)
- Armazenamento de **mensagens** em larga escala.
- Acesso via **HTTP/HTTPS**.
- Ideal para:
  - Criar **listas de tarefas**.
  - Processamento **assíncrono**.
  - Suporte a **milhões de mensagens**.

---

## ✅ Azure Disks
- Armazenamento **em nível de bloco**.
- Usado principalmente para **discos de máquinas virtuais (VMs)**.

---

## ✅ Resumo Final: O que você precisa lembrar &#x1F4AA;

- Azure oferece contas para diferentes **perfis de uso**: Standard x Premium.
- **Redundância**: escolha conforme **disponibilidade**, **durabilidade** e **custo**.
- Serviços principais:
  - **Blobs**: dados não estruturados.
  - **Files**: compartilhamento SMB/NFS.
  - **Queues**: mensagens assíncronas.
  - **Disks**: discos de VMs.
- **Automatização** com scripts e ferramentas nativas.
- Alta **durabilidade** (até **16 noves**) e **disponibilidade**.

---

&#x1F680; **Dica de ouro**: sempre escolha a **redundância** e o **tipo de conta** conforme a **criticidade** e a **frequência de acesso** aos dados!

