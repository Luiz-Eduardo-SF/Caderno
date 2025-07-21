# 🌍 Endereçamento IPv4 – Resumo Hardcore

## 🎯 Conceito Básico
- Cada **interface de rede** (não o host inteiro) precisa de **um endereço IP único**.
- Endereço IPv4 = 32 bits (4 bytes) ➝ no total: 2³² = ~4,3 bilhões de endereços.
- Escrita comum: **decimal com pontos**, ex: `192.168.23.67`
- Exemplo em binário:  
  `192.168.23.67` ➝ `11000000 10101000 00010111 01000011`

## 🧠 Interfaces
- **Host comum** → 1 interface.
- **Roteador** → várias interfaces (uma por rede conectada).

## 🌐 Estrutura: Sub-redes e CIDR
- Exemplo: `192.168.0.0/24` e `192.168.1.0/24`
- O `/24` = 24 bits de prefixo = parte da **rede**.
- O restante (32 - X bits) identifica **hospedeiros dentro da rede**.
- Essa forma moderna é chamada de **CIDR** (Classless Inter-Domain Routing).

## 📚 CIDR (Classless Inter-Domain Routing)
- Formato: `A.B.C.D/X` → X = bits do **prefixo da rede**
- Permite usar blocos menores, sob medida (evita desperdício)
- Exemplo:
  - `192.168.1.0/24` = 256 endereços
  - `192.168.1.0/28` = 16 endereços

## 📦 Endereçamento de Classes (antigo e limitado)
| Classe | Bits de Rede | Formato | Hospedeiros |
|--------|--------------|---------|-------------|
| A      | /8           | 255.0.0.0 | ~16M        |
| B      | /16          | 255.255.0.0 | ~65K      |
| C      | /24          | 255.255.255.0 | 254     |
| D      | multicast    | –       | –           |

- Problema: desperdiça muitos endereços.
- Solução: **CIDR** substituiu esse modelo.

## 🚫 Endereços Reservados
- Primeiro endereço (todos os bits do host = 0): endereço da **rede**.
- Último endereço (todos os bits do host = 1): **broadcast local**.
- `255.255.255.255` ➝ difusão geral na sub-rede.

## 🧱 Máscara de Rede
- Define qual parte do IP é **rede**, sub-rede e **hospedeiro**.
- Também tem 32 bits. Bits da rede = 1, bits do host = 0.
- Exemplo:  
  `255.255.255.0` = `11111111.11111111.11111111.00000000`

### 🎯 Tabela de Máscaras (por classe)

| Classe | Decimal         | Notação CIDR | Hexadecimal     |
|--------|------------------|---------------|------------------|
| A      | 255.0.0.0        | /8            | FF:00:00:00      |
| B      | 255.255.0.0      | /16           | FF:FF:00:00      |
| C      | 255.255.255.0    | /24           | FF:FF:FF:00      |

## 🔀 Sub-redes
- Dividem uma rede em partes menores (sem expor isso externamente).
- **Usos comuns**:
  - Isolar tráfego 🔕
  - Dividir por setor/departamento 🏢
  - Reforçar segurança 🔐

### 🧮 Cálculo de Sub-redes
- Bits mais à esquerda do **campo do host** viram sub-rede.
- Tabela de bits para sub-redes:
  
| Bits | Decimal |
|------|---------|
| 1    | 128     |
| 2    | 192     |
| 3    | 224     |
| 4    | 240     |
| 5    | 248     |
| 6    | 252     |
| 7    | 254     |

## ✅ Conclusão
- IPv4 identifica **interfaces**, não hosts.
- CIDR = fim das "classes fixas", muito mais eficiente &#x1F4A1;
- Máscara de rede é chave pra saber o **limite da sub-rede**.
- Sem isso, a Internet teria explodido já nos anos 90 💣

