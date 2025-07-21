# &#x1F4BB; Aplicação da Arquitetura de Infraestrutura na Google Cloud

## &#x1F4C1; Conceitos fundamentais

- ✅ **Arquitetura de Infraestrutura**: prática de organizar recursos como:
  - Redes Virtuais (VPC).
  - Sub-redes (Subnets).
  - Máquinas Virtuais (VMs).
  
➡️ Distribuídas em **regiões** e **zonas** distintas para:
- **Redundância**.
- **Alta disponibilidade**.
- **Resiliência**.

---

## &#x1F5A7;&#xFE0F; Etapas práticas:

### 1. **Definir a VPC (Virtual Private Cloud)**

- **Exemplo**: `rede-vpc-1`
- **Regiões**:
  - `southamerica-east1` ➡️ Brasil.
  - `us-east1` ➡️ Estados Unidos.

➡️ A VPC permite **conectar** e **isolar** recursos em múltiplas regiões.

---

### 2. **Configurar Sub-redes (Subnets)**

- **Subnets definem**:
  - Segmentação lógica da rede.
  - Range de **endereços IP**.

➡️ Exemplo:

| Subnet  | Range de IP |
|----------|------------|
| subnet1  | Definido para `southamerica-east1` |
| subnet2  | Definido para `us-east1` |

---

### 3. **Escolher as Zonas de Disponibilidade**

- Zona = localização física dentro da região.

➡️ Configuração:

| Subnet  | Zonas utilizadas               |
|---------|--------------------------------|
| subnet1 | `southamerica-east1-a`         |
| subnet2 | `us-east1-a` e `us-east1-b`    |

➡️ Utilizar múltiplas zonas = **Alta disponibilidade** + **resiliência**.

---

### 4. **Criar e alocar Máquinas Virtuais (VMs)**

- VMs associadas a **subnets específicas**.
- Cada VM recebe um **IP** do range da subnet.
- A partir das VMs, é possível:
  - **Implantar aplicações**.
  - **Publicar sites** na **internet**.

➡️ Arquitetura de rede → **Base para aplicação prática**.

---

## &#x1F310; Como um website funciona na prática na Google Cloud?

- ✅ Website implantado em **VMs** alocadas dentro de uma subnet.
- ✅ VMs conectadas à internet via **endereços IP públicos**.
- ✅ Estrutura suporta:
  - **Escalabilidade**.
  - **Segurança**.
  - **Alta disponibilidade**.

➡️ Este modelo é **padrão de mercado** e amplamente utilizado por empresas.

---

## &#x1F4A1; Resumo visual:

| **Elemento** | **Função** |
|--------------|------------|
| VPC          | Rede virtual privada que conecta recursos |
| Subnet       | Segmenta a VPC com ranges de IP |
| Zona         | Localização física para disponibilizar recursos |
| VM           | Executa aplicações, como websites |

---

## &#x1F4FD;&#xFE0F; No vídeo:

- ✅ Como funciona um **website** na Google Cloud.
- ✅ Reforço da **importância** desses conceitos para o **mercado de trabalho**.

---