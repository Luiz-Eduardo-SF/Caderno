# ✅ Serviço de Conteinerização

## &#x1F4E6; O que é um Contêiner?
- Evolução das **Máquinas Virtuais (VMs)**:
  - Mais **enxutos** e **leves**.
  - Virtualização para **executar aplicativos distribuídos**.
- Contém tudo necessário para a aplicação:
  - Arquivos.
  - Variáveis de ambiente.
  - Bibliotecas.

---

## &#x1F4BB; Como Funciona?
- Vários contêineres podem ser executados:
  - Em um único **host**.
  - Compartilhando o **mesmo kernel**.
  - **Dispensa** uma VM para cada aplicação.
- Ideal para **escalabilidade** na computação em nuvem.

---

## &#x2728; Vantagens sobre as VMs

1. **Portabilidade**:
   - Desenvolva localmente e execute em larga escala.
   
2. **Espaço reduzido**:
   - Apenas o essencial (bibliotecas e binários mínimos).

3. **Velocidade**:
   - **Implantações** e **atualizações** mais rápidas que VMs.

---

## &#x1F5A5;&#xFE0F; Diferença Arquitetural
- Contêiner: roda direto sobre o kernel compartilhado.
- VM: precisa de **sistema operacional completo** para cada instância.

---

## &#x2696;&#xFE0F; Desenvolvimento e Produção

- **Desenvolvimento**:
  - Criar ou baixar contêiner localmente.
  - Testar e validar a aplicação.

- **Produção**:
  - Com um **orquestrador** → rodar **centenas** ou **milhares** de instâncias.
  - Recursos:
    - **Implantação automática**.
    - **Monitoramento**.
    - **Verificação de integridade**.
    - **Reciclagem** de contêineres.

---

## &#x1F5C3;&#xFE0F; Ferramentas de Conteinerização

### &#x1F4BB; Docker
- **Padrão** da indústria.
- Encapsula contêineres.
- Suporte crescente à **Open Container Initiative (OCI)**.

### &#x1F4CA; Kubernetes
- Projeto **open-source** criado pela **Google**.
- Orquestração de contêineres:
  - **Implantação**.
  - **Dimensionamento**.
  - **Gerenciamento**.

