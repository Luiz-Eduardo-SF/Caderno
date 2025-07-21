# 🔐 Segurança Lógica (baseada em software) &#x1F5A5;

## ⚙️ O que é?
Conjunto de **medidas de proteção feitas por software**: senhas, criptografia, firewall, biometria, etc. Elas funcionam como camadas sobrepostas para cobrir falhas umas das outras.

---

## 🧬 Exemplos de Segurança Lógica:

### 🔑 Senhas
➡️ Ex: Senha para acessar o sistema da empresa.

### 👤 Biometria (digital, rosto)
➡️ Ex: Leitura facial para desbloquear o computador.

### 🔒 Criptografia
Transforma a informação em algo ilegível para quem não tem a chave.

#### 📌 Criptografia Simétrica
- Mesma chave para **cifrar e decifrar**.
- Ex: **AES, Blowfish, Twofish**
- &#x1F4A1; Rápida, mas exige cuidado com a distribuição da chave.

#### 📌 Criptografia Assimétrica
- Usa **duas chaves**: uma pública e outra privada.
- Ex: **RSA, El Gamal, ECC (curvas elípticas)**
- &#x1F4A1; Permite **confidencialidade** e **não repúdio**.

➡️ Exemplo prático:
- João assina com **chave privada** (garante autoria).
- Maria lê com **chave pública de João** (garante autenticidade).

---

## 🌐 Firewalls e Zonas de Segurança

### 🔥 Firewall
Barreira que controla o tráfego entre redes.

#### Políticas comuns:
- ❌ **Negar por padrão**: tudo é bloqueado, só o necessário é liberado.
  - Ex: libera só porta 80 (HTTP) e 443 (HTTPS).
- ✅ **Aceitar por padrão**: tudo é permitido, exceto o que for explicitamente negado.

### 🧱 DMZ (Zona Desmilitarizada)
Área da rede onde ficam servidores públicos (ex: site da empresa) separados do restante da rede interna.

➡️ Ex: O site acessado por clientes está na **DMZ** e não tem acesso direto ao banco de dados da empresa.

---

## 🕵️ Outros controles:
- 🔍 **IDS/IPS** (detecção/prevenção de intrusão)
- 🌐 **VPNs** (acesso seguro à rede interna)
- 🔐 **Listas de controle de acesso (ACLs)**: definem quem pode fazer o quê.

---

## ✅ Resumo Rápido:
> Segurança lógica protege os **dados** com **software**. Usa camadas como senhas, criptografia, biometria e firewalls. Tudo para garantir **confidencialidade**, **integridade** e **não repúdio**. &#x1F512; 