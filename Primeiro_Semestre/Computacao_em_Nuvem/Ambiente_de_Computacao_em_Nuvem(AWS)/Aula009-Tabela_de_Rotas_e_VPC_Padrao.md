# &#x1F6E1;&#xFE0F; RESUMO – Tabelas de Rotas e VPC Padrão

## &#x1F4CA; Tabelas de Rotas

- **Definição**: conjunto de regras que determinam o direcionamento do tráfego de rede dentro da VPC.
- **Criada automaticamente**: toda VPC possui uma **Tabela de Rotas Principal** criada pela AWS.

---

## ✅ Componentes das Tabelas de Rotas

- **&#x1F4CD; Destino (Destination)**:
  - Intervalo de endereços IP para onde o tráfego será enviado.
  - Exemplo: intervalo de IP da própria VPC.

- **&#x1F517; Alvo (Target)**:
  - Conexão pela qual o tráfego será encaminhado.
  - Exemplo: tráfego roteado localmente pela própria VPC.

---

## ✅ Funcionamento Padrão

- A AWS configura automaticamente as tabelas para permitir que o tráfego flua entre todas as sub-redes da VPC.
- **Exemplo**: envio de uma carta ➡️ precisa de um **destinatário (destination)** e de um **meio de envio (target)**.

---

## &#x1F4BB; VPC Padrão (Default)

- **Definição**: VPC automaticamente provisionada pela AWS em cada região.
- **Propósito**: permite começar rapidamente com instâncias públicas, como blogs ou sites simples.

---

## ✅ Características da VPC Padrão

- &#x1F5FA;&#xFE0F; **Bloco CIDR IPv4**: `172.31.0.0/16` ➡️ até **65.536** endereços privados.
- &#x1F4CD; **Sub-redes**: uma pública em cada **Zona de Disponibilidade (AZ)**, com blocos de tamanho `/20` ➡️ até **4.096** endereços por sub-rede.
- &#x1F310; **Gateway de Internet**: já conectado à VPC.
- &#x1F4CA; **Tabela de Rotas Principal**: roteia todo o tráfego (`0.0.0.0/0`) para o **Gateway de Internet**.
- &#x1F512; **Grupo de Segurança Padrão**: já configurado.
- ⚙️ **Opções de DHCP**: definidas por padrão para a conta AWS.

---

## ✅ Benefícios da VPC Padrão

- &#x1F680; **Pronto para uso**: instanciar rapidamente servidores EC2.
- &#x1F4BB; **Ideal para**: aplicações simples, blogs, sites de teste.
- &#x1F527; **Flexível**: componentes podem ser modificados conforme necessidade.

---

## &#x1F4DD; RESUMO RÁPIDO

- **Tabela de Rotas**: define como o tráfego é roteado dentro da VPC.
  - **Destino (Destination)**: intervalo de IP para onde o tráfego vai.
  - **Alvo (Target)**: conexão que envia o tráfego.
- **VPC Padrão**: criada automaticamente pela AWS em cada região.
  - CIDR: `172.31.0.0/16`.
  - Sub-redes públicas por AZ.
  - Gateway de Internet pré-configurado.
  - Tabela de rotas direcionando tráfego para internet.
  - Pronta para iniciar EC2 rapidamente.

---