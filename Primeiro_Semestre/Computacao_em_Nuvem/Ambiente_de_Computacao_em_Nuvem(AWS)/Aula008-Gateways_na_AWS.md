# &#x1F6E1;&#xFE0F; RESUMO – Gateways na AWS

## &#x1F310; Gateway de Internet (Internet Gateway)

- **Definição**: Permite a conectividade da VPC com a internet, funcionando como um "modem" para sua VPC.
- **Características**:
  - ✅ Altamente disponível e escalável.
  - ✅ Abrange todas as Zonas de Disponibilidade (AZs).
  - ✅ Deve ser criado e anexado à VPC.

---

## &#x1F6E0;&#xFE0F; Gateway NAT (Network Address Translation)

- **Definição**: Serviço que permite que instâncias em sub-redes privadas se conectem a serviços externos, **sem permitir conexões de entrada não solicitadas**.

---

## ✅ Tipos de Gateway NAT

### &#x1F4CD; Pública (Padrão)

- **Conectividade**: 
  - Instâncias privadas ➡️ podem acessar a internet.
  - Internet ➡️ **não** pode iniciar conexão com instâncias privadas.
- **Configuração**:
  - Criado em uma sub-rede pública.
  - Necessário associar um **Endereço IP Elástico (EIP)**.
  - Tráfego roteado pelo **Gateway de Internet**.
- **Usos**:
  - Conectar a internet, outras VPCs ou rede local via **Gateway de Trânsito** ou **VPN**.

---

### &#x1F512; Privada

- **Conectividade**:
  - Instâncias privadas ➡️ podem acessar outras VPCs ou redes locais.
  - **Não** permite associação com Endereço IP Elástico.
- **Configuração**:
  - Pode conectar à internet, mas se roteado para Internet Gateway ➡️ **tráfego será descartado**.
- **Usos**:
  - Isolamento com conectividade.
  - Comunicação segura com redes privadas, como **VPCs** ou **on-premise** via **VPN** ou **Direct Connect**.

---

## ✅ Funcionamento

- **Substituição de IP**:
  - Gateway NAT altera o IP de origem das instâncias para o **IP próprio**.
  - **Público**: usa o Endereço IP Elástico.
  - **Privado**: usa o IP privado do próprio Gateway NAT.
- **Respostas**: O Gateway NAT converte o IP de volta ao IP original da instância.

---

## ✅ Casos de Uso do Gateway NAT

1. **&#x1F310; Acesso à Internet**:
   - Sub-rede privada envia tráfego para internet sem receber conexões de entrada.

2. **&#x1F512; Acesso com restrição de IP**:
   - Comunicação com outras redes via **pool de IPs**, evitando liberar cada IP individualmente.

3. **&#x1F4E1; Comunicação entre redes sobrepostas**:
   - Comunicação entre redes com **blocos CIDR iguais**.
   - Exemplo: VPC A e VPC B usando **10.0.0.0/24**, conectadas via **Gateway NAT Privado**.

---

## ✅ Arquitetura: Gateway NAT + Gateway de Internet

- **Configuração típica**:
  - Gateway NAT Público ➡️ conecta sub-rede privada à internet.
  - Roteamento via **Gateway de Internet** para garantir conectividade.

## &#x1F4DD; ✅ RESUMO RÁPIDO

- **Internet Gateway**: conecta a VPC à internet; altamente disponível e escalável.
- **Gateway NAT**: permite que instâncias privadas acessem serviços externos **sem** permitir conexões de entrada.
  - **Público**: conecta à internet; exige IP elástico.
  - **Privado**: conecta a redes privadas; **não** usa IP elástico.
- **Casos de Uso**:
  - Sub-rede privada com acesso seguro à internet.
  - Comunicação entre redes com IPs sobrepostos.
  - Isolamento com conectividade.
