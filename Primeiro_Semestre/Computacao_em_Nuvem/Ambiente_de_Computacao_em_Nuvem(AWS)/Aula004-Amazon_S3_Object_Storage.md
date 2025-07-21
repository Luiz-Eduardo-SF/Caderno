# ☁️ Amazon S3 - Object Storage

## 🗂️ O que é?
- Serviço de armazenamento independente, acessível pela web.
- Dados organizados em **buckets** (contêineres).
- Precisa criar bucket (definir nome + região) antes de fazer upload.
- Dados armazenados com alta redundância: 99.999999999% durabilidade e 99.99% disponibilidade.

## 🔄 Ciclo de vida e versionamento
- Sem versionamento: upload com mesmo nome substitui arquivo.
- Com versionamento: mantém múltiplas versões do mesmo objeto.
- Pode recuperar versões antigas após exclusão ou substituição.
- Exclusão só marca o arquivo, não apaga de verdade.
- Cada versão tem ID único para controle.

## 💾 Classes de armazenamento

| 📦 Classe                   | 🛠️ Uso                                             | ⚙️ Características                      |
|----------------------------|---------------------------------------------------|----------------------------------------|
| **Standard**               | Dados acessados com frequência                     | Alta performance, baixa latência       |
| **Standard-IA**            | Dados acessados menos, mas precisam acesso rápido | Custo reduzido, alta resiliência        |
| **Glacier Instant Retrieval** | Dados raros, mas com acesso imediato            | Até 68% mais barato que Standard-IA    |
| **Glacier Flexible Retrieval** | Dados acessados 1-2 vezes por ano, recuperação lenta | Custo até 10% menor que Glacier Instant |
| **Glacier Deep Archive**   | Arquivos para retenção longa (7-10 anos+)          | Mais barato, restauração em até 12h    |

## 🧩 Casos de uso
- **Backup & armazenamento**: alta durabilidade e redundância.
- **Hospedagem de mídia**: arquivos até 5TB, ideal para vídeos, fotos e áudio.
- **Data lakes**: escalabilidade para petabytes, paga só o que usar.
- **Sites estáticos**: hospeda HTML, CSS e scripts direto no bucket.

---