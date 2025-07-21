# 🌐 Serviço de Rede na Nuvem

## 📌 O que é?
➡️ Classe de serviços em nuvem relacionados a conectividade e segurança da rede.  
➡️ Permite configurar **redes virtuais** (virtual networking), mas com **responsabilidade compartilhada**:  
✅ **Provedor:** camada física da rede.  
✅ **Cliente:** configuração e segurança da camada virtual.

---

## 🛠️ Serviços associados:

## 🕸️ 1. DNS (Domain Name System)
➡️ Tradução de **nomes de host** para **endereços IP**.  
➡️ Serviços comuns: **Alias, CNAME**, balanceamento de carga.

---

## 🚀 2. CDN (Content Delivery Network)
➡️ Entrega de conteúdo mais eficiente, armazenando cache (imagens, vídeos, páginas estáticas) em múltiplos locais globais.  
➡️ **Benefícios:**  
✅ Acelera carregamento para o usuário final.  
✅ Protege contra **ataques DDoS** ao filtrar requisições antes de chegarem aos servidores.

---

## 🔐 3. VPN (Virtual Private Network)
➡️ Acesso seguro a recursos privados em redes não confiáveis, via **túnel VPN**.  
➡️ Características:  
✅ Criptografa conexão cliente-nuvem.  
✅ Transparente para o usuário (parece que está na rede local).  
✅ Normalmente exige **MFA** (autenticação multifator).  
✅ Combinada com **firewall** para maior segurança.

---

## 🛡️ 4. WAF (Web Application Firewall)
➡️ Firewall de camada de aplicação.  
➡️ Protege contra ataques comuns a aplicações **HTTP/HTTPS**.  
➡️ Baseia-se em **regras públicas de segurança** para mitigar ameaças a aplicações web.

---

## ⚡ 5. Proteção DDoS (Distributed Denial of Service)
➡️ Defesa contra ataques massivos de negação de serviço.  
➡️ Utiliza:  
✅ Grupos de recurso **autoescaláveis**.  
✅ Serviços de **balanceamento de carga**.

---

## 🏢 Principais soluções dos provedores:

## ☁️ Amazon AWS:
➡️ **AWS Shield**: proteção contra DDoS.  
➡️ Integração com:  
✅ **Route53** (DNS)  
✅ **CloudFront** (CDN)  
✅ **Elastic Load Balancing (ELB)**

---

## ☁️ Microsoft Azure:
➡️ **Azure DDoS Protection**  
➡️ Modo avançado integrado com:  
✅ Gateway  
✅ **WAF**

---

## ☁️ Google Cloud:
➡️ **Google Cloud Armor Standard** (proteção básica).  
➡️ **Managed Protection Plus**: proteção avançada, integrada com outros serviços.

---

## 💡 Resumo rápido:
➡️ Redes na nuvem são virtuais ➡️ cliente gerencia segurança.  
➡️ Serviços fundamentais: **DNS, CDN, VPN, WAF e DDoS Protection**.  
➡️ Cada provedor tem soluções próprias e integradas para aumentar segurança e desempenho.
