# 💾 Block Storage – Amazon EBS

O Amazon Elastic Block Storage (EBS) oferece volumes de armazenamento em blocos para usar com instâncias EC2. Dados permanecem mesmo se a instância EC2 for desligada ou apagada, permitindo reanexar o volume.

- Para criar um volume, você define tamanho, tipo e zona de disponibilidade.
- Volumes EBS funcionam como HDs externos: podem ser anexados a uma instância EC2 (normalmente 1 para 1).
- Existe recurso multi-attach para anexar um volume a várias instâncias, mas não está disponível para todos os tipos.

**Dica:** Pode desanexar volumes EBS e conectar a outra instância na mesma zona de disponibilidade para acessar dados.

---

# 📸 Snapshots de EBS

- Snapshots são backups incrementais armazenados no Amazon S3 com alta redundância.
- Primeiro snapshot copia tudo, os seguintes só salvam mudanças.
- Snapshots permitem criar volumes em qualquer zona de disponibilidade, iguais ao original no momento do snapshot.

---

# 🎯 Casos de uso do EBS

- **Sistemas operacionais:** volumes raiz para instâncias EC2.
- **Bancos de dados:** armazenamento para bancos com leitura e escrita transacionais.
- **Aplicativos corporativos:** armazenamento confiável para apps essenciais.
- **Apps intensivos em throughput:** leituras e gravações contínuas.

---

# ⚙️ Tipos de EBS

| Tipo                      | Descrição                                      | Caso de Uso                           | Tamanho           | IOPS Máx | Throughput Máx |
|---------------------------|------------------------------------------------|-------------------------------------|-------------------|----------|----------------|
| io1 (Provisioned IOPS SSD) | SSD topo de linha, baixa latência              | Bancos NoSQL, bancos relacionais    | 4GB – 16TB        | 64,000   | 1,000 MB/s     |
| gp2/gp3 (General Purpose SSD) | SSD balanceado preço/desempenho                | Boot, apps interativos, dev/teste   | 1GB – 16TB        | 16,000   | 250 MB/s       |
| st1 (Throughput Optimized HDD) | HDD barato, alto throughput e acesso frequente | Big data, warehouses, logs          | 500GB – 16TB      | 500      | 500 MB/s       |
| sc1 (Cold HDD)             | HDD mais barato, acesso raro                      | Dados frios, menos varreduras       | 500GB – 16TB      | 250      | 250 MB/s       |

---

## ✅ Resumo rápido:

➡️ **Volumes EBS** → armazenamento em blocos para EC2, persistente mesmo se a instância desligar.  
➡️ **Snapshots** → backups incrementais e seguros no S3 para recuperar dados e criar volumes.  
➡️ **Tipos de volume** → SSDs para alta performance, HDDs para custo baixo e throughput.  
➡️ **Casos de uso** → sistemas operacionais, bancos, apps críticos e apps que precisam de throughput intenso.
