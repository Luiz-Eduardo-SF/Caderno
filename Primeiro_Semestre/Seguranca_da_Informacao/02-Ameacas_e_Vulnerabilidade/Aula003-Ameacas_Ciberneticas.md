# &#x1F6E1;&#xFE0F; RESUMO – Ameaças Cibernéticas

## 🧨 O que são ameaças cibernéticas?
São ações maliciosas que exploram **vulnerabilidades em sistemas, processos ou pessoas** com objetivo de roubo, dano ou interrupção.  
Essas ameaças estão em constante evolução, então **nunca estarão 100% mapeadas**.

---

## ⚔️ Tipos de Ameaças Cibernéticas

### 1. Ataques Cibernéticos
- **Definição**: Ações intencionais de hackers ou funcionários insatisfeitos.
- **Objetivo**:
  - Obter dados sigilosos (**quebra da confidencialidade**)
  - Alterar ou destruir dados (**quebra da integridade**)
  - Parar sistemas (**quebra da disponibilidade**)
- **Motivação**: Ego, desafio, vingança, dinheiro, ativismo.

#### 🧠 Exemplo Real:
- **Ping of Death**: ataque antigo que travava sistemas via comando `ping`.
- Atualmente é mitigado por **atualizações de software**.

---

### 2. Engenharia Social
- **Definição**: Manipulação psicológica para enganar pessoas e obter informações.
- **Explora**: O **elo mais fraco** da segurança: o ser humano &#x1F464;
- **Exemplos**:
  - **Phishing**: e-mails, SMS ou sites falsos que imitam bancos.
  - **Chupa-cabra**: dispositivos antigos que clonavam cartões magnéticos.

---

### 3. Pichação de Sites (Defacement)
- **Definição**: Alteração não autorizada de sites.
- **Objetivo**: Exibir mensagens ou causar impacto visual, muitas vezes ideológico.
- **Explora**: Vulnerabilidades em CMS, plugins, permissões fracas.
- **Popularidade**: Hackers buscam visibilidade em sites como o Zone-H.

---

### 4. Softwares Maliciosos (Malwares)
- **Tipos**: vírus, worms, trojans, ransomwares, bots etc.
- **Objetivo**: Danificar, espionar, controlar ou extorquir.
- **Meio de entrada**: e-mails, downloads, pendrives, vulnerabilidades.

---

### 5. Botnets (Redes Zumbi)
- **Definição**: Conjunto de dispositivos infectados por bots controlados remotamente.
- **Controle**: Feito por servidores de **Comando e Controle (C&C)**.
- **Funções**:
  - Envio massivo de spam
  - Ataques DDoS coordenados
  - Roubo de dados

---

## 🚫 Ataques de Negação de Serviço (DoS/DDoS)

### 🔁 DoS (Denial of Service)
- **Objetivo**: Deixar um serviço inacessível.
- **Como**: Enche o servidor de requisições até travar.
- **Exemplos**: `Ping of Death`, `SYN Flood`, `UDP Flood`, `TCP Flood`.

### 🌐 DDoS (Distributed DoS)
- **Diferença**: O ataque vem de **várias fontes simultaneamente** (ex: via botnet).
- **Técnica**: Cada fonte pode usar um método diferente em sincronia.

---

## 🧯 Redundância e Contingência
- **Redundância**: Ter sistemas duplicados para assumir em caso de falha.
- **Contingência**: Ter um plano de emergência e recuperação.
- **Exemplo**: Enchente ou batida que derruba um poste pode causar **indisponibilidade**.

---

## 🧠 Conclusão Rápida
| Ameaça                | Tipo             | Alvo principal             | Prevenção                                  |
|------------------------|------------------|-----------------------------|---------------------------------------------|
| Ataques cibernéticos   | Humana / Lógica  | CIA (Confidencialidade, Integridade, Disponibilidade) | Firewalls, patching, autenticação        |
| Engenharia social      | Humana           | Confidencialidade           | Treinamento, simulações, MFA               |
| Pichação (Defacement)  | Lógica           | Imagem, disponibilidade     | Atualizações, hardening, monitoramento     |
| Botnets + DDoS         | Lógica           | Disponibilidade             | Antibot, mitigação DDoS, firewalls         |
| Falhas físicas         | Não-humana       | Disponibilidade             | Redundância, plano de contingência         |

