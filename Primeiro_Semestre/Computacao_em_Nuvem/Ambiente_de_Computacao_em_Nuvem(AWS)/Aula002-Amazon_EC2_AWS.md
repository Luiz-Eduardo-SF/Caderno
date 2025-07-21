# ✅ Resumo Amazon EC2 – AWS &#x1F4BB;

## &#x1F680; O que é o Amazon EC2?

- Serviço de computação na nuvem que oferece **máquinas virtuais** chamadas de **instâncias**.
- Provisão rápida: ligar, usar e desligar, pagando apenas pelo tempo de uso.
- Contraste com **on-premise**: não há necessidade de compra, instalação física e configuração manual de servidores.

---

## &#x1F4CA; Comparação: On-Premise vs EC2

**On-Premise:**
1. Comprar hardware.
2. Esperar entrega.
3. Montar no datacenter.
4. Instalar sistema operacional.
5. Configurar e instalar aplicativos.

**EC2:**
1. Escolher AMI (sistema e apps).
2. Selecionar hardware virtual (vCPU, memória).
3. Definir segurança, rede e armazenamento.
4. Revisar e lançar.
5. Conectar remotamente e usar.

&#x1F44D; Processo de semanas vira minutos.

---

## &#x1F5C3;&#xFE0F; Amazon Machine Image (AMI)

- Imagens prontas com **sistema operacional** e, às vezes, **aplicativos**.
- **Catálogo variado**: imagens da AWS, parceiros e comunidade.
- **Boas práticas**: usar AMIs recomendadas em "Quick Start".
- AMIs possuem **ID único** (`ami-xxxxx`) e são **regionais**.

### &#x1F9E9; Personalização
- É possível criar **AMIs customizadas** com configurações próprias.
- Ex.: Criar uma AMI do Ubuntu com Apache pré-instalado.
- Para consistência, prefira criar AMI com instância **desligada**.

**Importante:** AMI = **modelo (DNA)** para novas instâncias.

---

## &#x1F3A8; Tipos de Instâncias EC2

- Combinação de **vCPU, memória, rede e GPU**.
- Nome composto: **família + geração + tamanho** (e às vezes processador).

### Exemplo:
- `m5.large`: família M, geração 5, tamanho large.
- `t4g.small`: família T, geração 4, Graviton (ARM), tamanho small.

### &#x1F3AF; Famílias de instâncias:
- **Uso Geral**: equilíbrio → `t4g`, `m6i`, `m5`
- **Otimizado para Computação**: CPU intensiva → `c6g`, `c5`
- **Otimizado para Memória**: grandes volumes de dados → `r6a`, `r5`

&#x1F6A9; Letras:
- `i`: Intel
- `a`: AMD
- `g`: Graviton (ARM)

---

## &#x1F511; Par de Chaves (Key Pair)

- Necessário para **acesso seguro** à instância.
- AWS armazena a **chave pública**.
- Você deve guardar a **chave privada** com segurança.
- Usos:
  - **Linux**: conexão SSH.
  - **Windows**: descriptografar senha do administrador.

---

## &#x1F5A7;&#xFE0F; Rede e Firewall

### &#x1F4C1; VPC (Virtual Private Cloud)
- Rede isolada na AWS.
- Configurações: sub-rede, IP privado.
- Pode ter **IP público** ou **IP elástico** (permanente).

### &#x1F6E1;&#xFE0F; Security Group (SG)
- **Firewall virtual**: controla tráfego de entrada/saída.
- Pode criar ou usar um SG existente.
- Regras são aplicadas **automaticamente**.
- Cuidado: restrinja portas como **SSH** ou **RDP**.

---

## &#x1F4BE; Disco do EC2

- **Elastic Block Store (EBS)** → armazenamento de bloco.
- Padrão: disco raiz, geralmente **SSD gp2** com tamanho mínimo.
- Pode adicionar mais discos.
- Respeitar recomendações de **tipo e tamanho** para evitar falhas.

---

## &#x1F4DD; Scripts de Boot (User Data)

- Campo **"User Data"** → executar comandos automaticamente ao iniciar a instância.
- Útil para **automatizar configurações**: instalar pacotes, configurar serviços, etc.

---

## &#x1F6A7; Outras Configurações Avançadas

- **Termination Protection**: evita encerramento acidental.
- **Detailed Monitoring**: métricas detalhadas via CloudWatch.
- **User Data**: scripts automatizados na inicialização.

---

## &#x1F6E0;&#xFE0F; Boas práticas

- Prefira AMIs **oficiais**.
- Guarde a chave privada com **segurança absoluta**.
- Restrinja regras de **firewall**.
- Use **IP elástico** se precisar de endereço fixo.
- Scripts no **User Data** agilizam deploys.

---

## &#x1F680; Resumo do Processo EC2

1. Escolher AMI.
2. Definir tipo de instância.
3. Selecionar par de chaves.
4. Configurar rede e segurança.
5. Definir armazenamento.
6. (Opcional) Inserir scripts no User Data.
7. **Lançar e usar**!
