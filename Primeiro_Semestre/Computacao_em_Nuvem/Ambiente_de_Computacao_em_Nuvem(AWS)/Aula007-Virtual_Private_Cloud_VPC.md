# 🖧 VPC – Virtual Private Cloud

## 📂 Conceito

- Serviço da AWS para criar uma **rede isolada**.
- Define **endereçamento**, **sub-redes** e **regras de conectividade**.
- Garante que recursos não se comuniquem livremente entre contas.

## 📊 Configurações essenciais

1. **Nome** → identificação.
2. **Região** → define as zonas de disponibilidade.
3. **CIDR** → faixa de IPs; até **4 blocos /16**.

## 🗂️ Sub-redes

- Dividem a VPC em **partes menores**, como VLANs.
- Para **isolamento** e **alta disponibilidade**.

### 🟢 Sub-redes públicas

- Possuem **gateway de internet**.
- Acesso direto de/para internet.

### 🟠 Sub-redes privadas

- **Sem gateway** direto.
- Acesso via **NAT Gateway** ou **instância NAT**.

## 🏗️ Alta disponibilidade

- Criar sub-redes em **múltiplas zonas de disponibilidade (AZs)**.
- Recursos como EC2 não são automaticamente redundantes → precisa replicar entre AZs e usar **load balancer**.

## 🌐 Elastic IP

- **Endereço IPv4 fixo** para remapear rapidamente em caso de falhas.
- Só **um Elastic IP gratuito** por instância.
- Elastic IP **não usado** → **custo**.
- Não disponível para **IPv6**.

## 📌 IPs reservados

- AWS reserva **5 IPs por sub-rede**:
  1. Rede.
  2. Roteador.
  3. DNS.
  4. Futuro.
  5. Broadcast.

### 📖 Exemplo:

- VPC: **10.0.0.0/22** → **1024 IPs**.
- Sub-redes: **/24** → **256 IPs**, mas só **251 utilizáveis**.

---

## ✅ Resumo rápido:

➡️ **VPC** → rede isolada e controlada.  
➡️ **Sub-rede pública** → acesso direto à internet.  
➡️ **Sub-rede privada** → acesso via NAT.  
➡️ **Elastic IP** → IP fixo para alta disponibilidade.  
➡️ **Alta disponibilidade** → múltiplas AZs + redundância.  
➡️ **5 IPs reservados** → planejamento de endereçamento.
