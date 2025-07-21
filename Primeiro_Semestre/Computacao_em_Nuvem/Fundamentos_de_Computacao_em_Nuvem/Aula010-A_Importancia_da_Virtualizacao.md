# &#x1F4BB; A Importância da Virtualização

## &#x2601;&#xFE0F; Contexto
- A **computação em nuvem** só existe graças à evolução de várias tecnologias da TI, especialmente a **virtualização**.
- Antes, as empresas **compravam e gerenciavam** seus próprios recursos de TI. Agora, com a nuvem, **tudo é fornecido remotamente**.

---

## &#x1F4F6; Acesso Remoto
- A infraestrutura da nuvem pode ser acessada por **qualquer dispositivo**: celular, tablet, notebook, PC.
- É um modelo eficiente para **usar software, armazenar e processar dados via internet**.

---

## &#x1F4A1; Tecnologias que deram origem à nuvem
- **Virtualização**
- **Conteinerização**
- **Computação sem servidor (serverless)**
- **Application Service Provider (ASP)**
- **Grid computing**
- **Utility computing**
- **Software como serviço (SaaS)**

---

## &#x1F5C3;&#xFE0F; O que é Virtualização?
> Técnica que simula recursos reais de hardware para criar **máquinas virtuais**.

- Permite rodar **vários sistemas operacionais e apps na mesma máquina física**.
- Reduz o número de servidores físicos = **menos custo e mais flexibilidade**.

---

## &#x1F4BB; Benefícios da Virtualização
- Compartilhamento de hardware (CPU, RAM, disco, rede).
- Flexibilidade para rodar Windows e Linux no mesmo equipamento.
- Usada em **datacenters** para reduzir estrutura física e ampliar performance.

---

## &#x1F527; Hypervisor (Monitor de Máquina Virtual)
- Software que **gerencia máquinas virtuais** e o acesso ao hardware físico.
- Fica entre o hardware e os sistemas operacionais.

### Tipos de Hypervisor

#### Tipo 1 – Bare Metal 🧱
- Executado diretamente sobre o **hardware físico**.
- Usado em servidores e ambientes corporativos.
- Alta performance e mais opções de I/O.
- Exemplo: VMware ESXi, Microsoft Hyper-V (modo core).

#### Tipo 2 – Hosted 🪟
- Instalado **como um aplicativo no sistema operacional**.
- Ideal para desktops e uso pessoal.
- Mais compatível com diferentes hardwares.
- Exemplo: VirtualBox, VMware Workstation.

---

## &#x1F310; Virtualização Completa vs Paravirtualização

| Tipo                  | Virtualização Completa 🧱 | Paravirtualização &#x1F9F0;     |
|-----------------------|---------------------------|----------------------------------|
| Emulação de Hardware  | Sim, 100%                 | Parcial (requer ajustes no SO)   |
| Modificações no SO    | Não                       | Sim                              |
| Desempenho            | Menor                     | Maior (mais direto ao hardware)  |
| Compatibilidade       | Alta                      | Depende do sistema               |

---

## &#x1F4DD; Conclusão

- Virtualização = **pilar da computação em nuvem**.
- Permite rodar vários sistemas operacionais em **uma única máquina física**.
- **Hypervisores** são essenciais para isso: Tipo 1 (servidores) e Tipo 2 (desktops).
- Tipos de virtualização (total/parcial) impactam **performance, compatibilidade e flexibilidade**.

> Sem virtualização, a nuvem moderna não existiria. É ela que permite transformar **1 máquina física em várias máquinas virtuais** com usos distintos.

