# ✅ **Resumo - Serviços de Computação e Rede do Azure** &#x1F4BB;

---

## **Máquinas Virtuais (VMs)** &#x1F5A5;&#xFE0F;

- **O que são**: Servidores virtualizados (IaaS) para executar sistemas operacionais e softwares personalizados.
- **Usos**:
  - Controle total sobre o SO.
  - Execução de software específico.
  - Configurações de hospedagem customizadas.
- **Configurações**:
  - Tamanho (núcleos, RAM).
  - Discos (HDD, SSD).
  - Rede (IP público, portas, VNET).

---

## **Conjuntos de Escala de Máquinas Virtuais** &#x1F504;

- Gerencia automaticamente **grupos de VMs idênticas**.
- Proporciona **balanceamento de carga** e **escalabilidade automática**.
- Reduz trabalho manual de configuração e monitoramento.

---

## **Área de Trabalho Virtual do Azure** &#x1F4BB;

- **Serviço de virtualização** de desktops e apps na nuvem.
- Suporte a **multissessão no Windows 10/11 Enterprise**.
- Compatível com diversos dispositivos e navegadores.

---

## **Contêineres do Azure** &#x1F4E6;

- Ambiente virtualizado mais **leve** que VMs.
- **Rápida criação, dimensionamento e reinício**.
- Ex.: **Docker** com suporte nativo.
- **Instâncias de Contêiner do Azure**: PaaS para executar contêineres sem gerenciar VMs.

---

## **Azure Functions** &#x269B;&#xFE0F;

- **Computação serverless**, acionada por eventos.
- Não requer VM ou contêiner.
- Ideal para **tarefas rápidas e isoladas**.
- Usos:
  - Responder a eventos.
  - Ações por temporizadores.
  - Mensagens de outros serviços.

---

## **Serviço de Aplicativo do Azure** &#x1F4F6;

- **Hospedagem de apps** web, APIs, jobs e backends móveis.
- Suporte a múltiplas linguagens.
- Recursos:
  - **Escalabilidade automática**.
  - Alta disponibilidade.
  - Implantação contínua via **GitHub** ou **Azure DevOps**.

---

## **Redes Virtuais (VNETs)** &#x1F5A7;&#xFE0F;

- Conectam recursos do Azure entre si, com a internet ou redes locais.
- **Funcionalidades**:
  - Isolamento e segmentação.
  - Comunicação interna e externa.
  - Roteamento e filtragem de tráfego.
  - Conexão entre VNETs.

### **Tipos de pontos de extremidade**:
- **Público**: IP acessível globalmente.
- **Privado**: IP interno na VNET.

---

## **Redes Virtuais Privadas (VPNs)** &#x1F510;

- Túnel **criptografado** sobre rede pública.
- Usada para conectar redes privadas.
- Protege dados sensíveis de interceptação.

### **Gateways VPN**:
- Conectam:
  - Datacenters locais &#x1F3ED; → VNET (site-to-site).
  - Dispositivos individuais → VNET (point-to-site).
  - VNET → VNET (rede-a-rede).

---

## **Azure ExpressRoute** &#x1F4C2;

- **Conexão privada** entre rede local e Microsoft Cloud.
- **Benefícios**:
  - Menor latência.
  - Maior segurança.
  - Conectividade global via **ExpressRoute Global Reach**.
  - Roteamento dinâmico com **BGP**.
  - Redundância embutida.

---

## **DNS do Azure** &#x1F310;

- Serviço de **hospedagem e resolução de nomes** DNS.
- Integração com outras ferramentas do Azure.
- **Vantagens**:
  - Confiabilidade.
  - Performance.
  - Segurança.
  - Facilidade na gestão.
  - **Registros de alias** para simplificar o roteamento.

---

# ✅ **Resumo rápido:**
- **VMs**: Infraestrutura.
- **Escala de VMs**: Automatiza expansão.
- **Contêineres**: Virtualização leve.
- **Functions**: Serverless.
- **App Service**: Hospedagem facilitada.
- **VNET**: Comunicação segura.
- **VPN**: Túnel criptografado.
- **ExpressRoute**: Conexão privada.
- **DNS Azure**: Gerenciamento de domínios.
