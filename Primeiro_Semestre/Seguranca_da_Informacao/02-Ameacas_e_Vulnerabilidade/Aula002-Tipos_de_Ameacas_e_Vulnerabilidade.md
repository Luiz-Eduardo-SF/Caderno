# &#x1F4BE; RESUMO – Tipos de Ameaças e Vulnerabilidades na Segurança da Informação

## 🔐 Tríade da Segurança da Informação
| Aspecto              | Definição                                                                 |
|----------------------|---------------------------------------------------------------------------|
| **Confidencialidade** | Garantir que só pessoas autorizadas tenham acesso aos dados.              |
| **Integridade**       | Garantir que os dados não sejam alterados de forma indevida.              |
| **Disponibilidade**   | Garantir que os dados e sistemas estejam disponíveis quando necessários.  |

---

## ⚠️ Exemplos de Ameaças e Medidas de Prevenção
| Aspecto              | Ameaça                                                     | Prevenção                                |
|----------------------|-------------------------------------------------------------|------------------------------------------|
| Confidencialidade     | Acesso não autorizado                                       | Uso de **senhas** e **criptografia**     |
| Confidencialidade     | Perda de fitas de backup no transporte                     | **Criptografia**                          |
| Integridade           | Alteração de dados por software ou pessoas não autorizadas | **Autenticação** e uso de **hashes**     |
| Disponibilidade       | Enchentes, incêndios                                        | **Backups**, **servidores redundantes**  |
| Disponibilidade       | Ataques de negação de serviço (DDoS)                       | **Redundância de servidores**            |

---

## 🧠 Classificação das Ameaças

### 📦 FÍSICA
- Incêndio, enchente, queda de energia
- Perda de mídias físicas (fitas, HDs, etc)
- 🔧 Prevenção: ambientes seguros, backups off-site, redundância

### 💻 LÓGICA
- Malwares, invasões, engenharia social, DDoS
- Escuta na rede, alteração de dados
- 🛡️ Prevenção: senhas, autenticação múltipla, antivírus, hashes, criptografia

---

## 🧍‍♂️ Classificação por Origem

### HUMANAS
| Exemplo                                             | Prevenção                              |
|-----------------------------------------------------|----------------------------------------|
| Acesso não autorizado                               | Senhas fortes                          |
| Escuta no tráfego                                   | Criptografia                           |
| Perda de mídias                                     | Criptografia                           |
| Alteração de dados por colaboradores ou hackers     | Autenticação, controle de acesso       |
| Ataques DDoS                                        | Redundância                            |

### NÃO HUMANAS
| Exemplo                                             | Prevenção                              |
|-----------------------------------------------------|----------------------------------------|
| Enchentes, terremotos, incêndios naturais           | Backup, redundância, análise de risco  |
| Curto-circuito, falhas elétricas                    | Infraestrutura adequada                |

---

## 🧠 Subdivisões

### HUMANAS
- **Colaboradores mal-intencionados ou despreparados**
- **Hackers** por ego, desafio ou ganho financeiro

### NÃO HUMANAS
- **Desastres Naturais**: enchentes, raios, etc
- **Infraestrutura**: falhas elétricas, sobrecarga, etc

---

## 📊 Tabela Final de Classificações

| Tipo de Classificação         | Exemplos                                       |
|-------------------------------|------------------------------------------------|
| Tipo de Ativo Envolvido       | Confidencialidade, Integridade, Disponibilidade |
| Vetor de Ataque               | Física, Lógica, Humano, Não Humano            |
| Fenômeno de Origem (subtipo)  | Desastres Naturais, Problemas de Infraestrutura |

---

## 🌧️ Exemplo Real – Inundação no Data Center

**Contexto**: Chuvas intensas em áreas de risco, como RJ no verão.

**Impacto**:
- Compromete **disponibilidade** e, possivelmente, **integridade** dos dados.

**Classificação**:
- Ativo: Disponibilidade / Integridade
- Vetor: Física / Não Humana
- Origem: Desastre Natural

**Medidas**:
- Plano de contingência (redundância em outra região)
- Backups testados e monitorados
- Treinamento de pessoal para emergências

---

✅ **Resumo Final**
- Ameaças podem ser **físicas ou lógicas**, e **humanas ou não humanas**
- Devem ser combatidas com **camadas de proteção** (senhas, criptografia, redundância, backup)
- Planejamento e prevenção são essenciais para **manter a segurança da informação**

