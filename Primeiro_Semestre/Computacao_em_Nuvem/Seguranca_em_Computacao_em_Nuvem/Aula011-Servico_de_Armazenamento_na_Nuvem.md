# 💾 Serviço de Armazenamento na Nuvem

## 📌 O que é?
➡️ Serviço essencial na nuvem, focado em guardar dados.  
➡️ Três categorias principais:  
1️⃣ Armazenamento de Arquivo (File Storage)  
2️⃣ Armazenamento de Objeto (Object Storage)  
3️⃣ Armazenamento de Bloco (Block Storage)  

➡️ Categoria moderna: **Container Storage Interface (CSI)** ➡️ conecta orquestradores como Kubernetes ao armazenamento.

---

## ⚠️ Ameaças comuns:
🚫 Acesso não autorizado  
🚫 Vazamento de dados  
🚫 Exfiltração de dados  
🚫 Perda de dados

---

## 🛡️ Contramedidas:

✅ **ACL** (Access Control List) ➡️ Lista de controle de acesso  
✅ **IAM** (Identity and Access Management) ➡️ Gerenciamento de identidade e acesso  
✅ **Criptografia** ➡️ Proteção de dados em trânsito e em repouso  
✅ **Auditoria** ➡️ Logs de acesso e ações (upload, download, modificação, exclusão)  
✅ **Backups** ➡️ Recuperação de dados apagados ou revertidos  

---

## 🗂️ Tipos de Armazenamento:

### 📁 1. Armazenamento de Arquivo (File Storage)
➡️ Similar ao **NAS** (Network-Attached Storage).  
➡️ Suporte a protocolos como **NFS**, **SMB/CIFS**.  
➡️ Volume montado em sistemas operacionais, permite uso paralelo por várias VMs.  
➡️ Crescimento automático e transparente do sistema de arquivos.

---

## 📦 2. Armazenamento de Objeto (Object Storage)
➡️ Dados armazenados como **objetos** em **buckets** (como pastas virtuais).  
➡️ Acesso via **API**, geralmente **HTTPS**, linha de comando ou interfaces específicas.  
➡️ Não recomendado para sistemas operacionais ou bancos de dados, ideal para arquivos, imagens, vídeos, etc.

---

## 💽 3. Armazenamento de Bloco (Block Storage)
➡️ Similar ao **SAN** (Storage Area Network).  
➡️ Cliente monta o volume como um disco, formata (NTFS, Ext4, etc.) e usa para armazenar arquivos, bancos de dados ou sistemas operacionais.  

---

## 📦 Container Storage Interface (CSI)
➡️ Driver padrão para conectar **orquestradores de contêineres** (como Kubernetes) a serviços de armazenamento na nuvem.  
➡️ Permite bloquear e armazenar arquivos de forma padronizada entre diferentes provedores.

---

## ☁️ Principais provedores com serviços de armazenamento:
- **AWS**  
- **Microsoft Azure**  
- **Google Cloud Platform (GCP)**  

➡️ Todos oferecem **File, Object, Block e Container Storage**.

---

## 💡 Resumo rápido:
➡️ Escolha o tipo de armazenamento conforme a necessidade.  
➡️ Proteja sempre com ACL, IAM e criptografia.  
➡️ Ative auditoria e mantenha backups regulares.  
➡️ Use CSI para integrar com orquestradores como Kubernetes.
