# &#x1F4BB; RESUMO – Endereçamento na Camada de Rede

## &#x1F4CD; Finalidade do Endereçamento

- A **camada de rede** precisa **identificar os hospedeiros** de forma única e padronizada.
- Essa identificação deve ser **independente** do endereçamento das camadas inferiores.
- Responsável por **unificar a comunicação** na rede.

---

## &#x1F4CA; Tipos de Endereçamento

### 1. &#x1F3E2; Endereçamento Hierárquico
- Estrutura em **camadas/níveis** (ex: país, rede, host).
- Ajuda no **roteamento eficiente**, pois mostra "onde" o dispositivo está.
- Usado em sistemas como a **telefonia pública (recomendação ITU-T)**.
- Exemplo de estrutura:
  - **[País].[Rede].[Host]** → Ex: `55.13.1023`

### 2. &#x1F9ED; Endereçamento Horizontal
- Endereço **fixo**, **não depende da localização**.
- Exemplo: **MAC Address** de uma placa de rede Ethernet.
- Permite **mobilidade** sem reconfiguração.
- Ideal para redes locais.

---

## &#x1F52C; Considerações:
- **Hierárquico**: favorece o roteamento → mais organizado.
- **Horizontal**: favorece mobilidade → útil em redes locais e dinâmicas.

---

## &#x1F527; Conversão entre endereços (camada de rede ↔ física)

> A camada de rede envia os pacotes, mas quem entrega é a **camada de enlace**, que tem seu **próprio endereço físico** (ex: MAC).  
> Por isso, é necessário **mapear** o endereço de rede para o endereço físico.

### Técnicas de Mapeamento:

#### 1. &#x1F4D1; Mapeamento Direto
- Existe uma **função fixa** que transforma o endereço de rede em endereço físico.
- Pode ser feito por:
  - Cálculo direto.
  - Tabela de conversão com acesso rápido.

#### 2. &#x1F504; Vinculação Dinâmica
- Usa **protocolos de resolução** (ex: **ARP**) para descobrir o endereço físico.
- Não precisa de tabelas fixas.
- Ideal para redes **mais flexíveis e dinâmicas**.

---

## &#x1F4A1; TL;DR
- A camada de rede precisa de um esquema de endereçamento **universal e padronizado**.
- Dois modelos: **Hierárquico (organizado)** e **Horizontal (fixo e móvel)**.
- A entrega real dos pacotes exige um **mapeamento** entre o endereço de rede e o **endereço físico (MAC)**.
- Esse mapeamento pode ser **direto** ou **dinâmico** (ex: ARP).

