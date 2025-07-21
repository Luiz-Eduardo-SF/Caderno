# &#x1F4BB; Certificado Digital - Resumo Estruturado

## ✅ O que é?

- Documento **eletrônico** que identifica **pessoas** e **instituições**.
- Garante três pilares da segurança da informação:
  - **Autenticidade**: prova a identidade.
  - **Integridade**: assegura que os dados não foram alterados.
  - **Não repúdio**: impede que o autor negue a autoria.

---

## ✅ Funções

- **Assinar digitalmente** documentos.
- **Anexar chave pública** a um indivíduo ou entidade (Infraestrutura de Chave Pública - **PKI**).
- **Emitido por**: Autoridade Certificadora (**AC**).

---

## ✅ Estrutura de um Certificado Digital

| Elemento | Descrição |
| --- | --- |
| Nome do sujeito | Identifica a pessoa ou organização. |
| Chave pública | Usada para verificar assinaturas e descriptografar dados. |
| Número de série | Identificação única do certificado. |
| Data de validade | Prazo de expiração do certificado. |
| Assinatura digital | Garantia de que foi emitido por uma AC confiável. |
| Outras infos | Detalhes adicionais conforme necessidade. |

---

## ✅ Cadeia de Confiança

- **Definição**: sequência de validação do certificado, da entidade até uma AC raiz.
- **Importância**: estabelece um **vínculo confiável** entre usuários e provedores.

---

## ✅ Exemplo de Uso

### Bancos &#x1F4B3;

- Banco usa certificado para provar que é ele mesmo (**autenticidade**).
- Cliente usa certificado para se autenticar no banco.

### Relação:

- Ambos confiam na mesma **AC**.
- O cliente valida a assinatura do certificado do banco pela chave pública da AC.

---

## ✅ Funcionamento

1. Usuário registra-se na **AC** e obtém seu certificado.
2. Proprietário de conteúdo também registra-se e obtém par de chaves + certificado.
3. Na comunicação, o proprietário envia sua chave pública certificada.
4. O usuário valida com a chave pública da **AC** e, se confiar, prossegue a interação.

---

## ✅ ICP-Brasil

- Criada em **2001** pelo governo federal.
- **Infraestrutura de Chaves Públicas Brasileira**.
- Base legal: **Medida Provisória 2.200-2**.
- Órgão regulamentador: **Comitê Gestor da ICP-Brasil**.

---

## ✅ Aplicações no Brasil

- **Nota Fiscal Eletrônica**.
- **Informatização do Judiciário**.
- **Serviços cartoriais**.
- **Abertura de empresas**.
- **Prontuários médicos digitais**.
- **Pregão eletrônico**.
- **Informações fiscais para a Receita Federal**.

---

## ✅ Regulamentação

| Regulamento | Descrição |
| --- | --- |
| Medida Provisória 2.200-2 | Principal marco legal da ICP-Brasil. |
| Decretos | Normatizam operações. |
| Resoluções | Diretrizes do Comitê Gestor da ICP-Brasil. |
| Instruções Normativas | Detalhes técnicos da AC Raiz. |

**Importante**: MP publicada em **24/08/2001**, com força de **lei**.

---

## ✅ Cuidados

- Certificado é **pessoal e intransferível**.
- **Nunca** entregue a terceiros.
- Equivale a **CPF**, **RG** ou **passaporte**.
- Guarda segura é **responsabilidade do usuário**.

---

## ✅ Validade e Revogação

- Tem **data de validade** para forçar atualização periódica.
- Se **comprometido**, deve ser **cancelado**.
- Certificados revogados vão para a **CRL** (Certificate Revocation List).

---

## ✅ Comércio Eletrônico

- Apesar da desconfiança, transações com certificado digital são **mais seguras** que:
  - Compras por telefone.
  - Entrega de cartão a vendedores.

- **Avanço** de algoritmos de **criptografia** reforça essa segurança.

---

## ✅ Papel do Usuário

- O usuário continua sendo o **elo central** da segurança.
- **Conscientização** e **boas práticas** são fundamentais.
- A tecnologia é uma **facilitadora**, mas não substitui o **bom senso**.

---

## ✅ Criptografia e Certificado Digital

- **Assunto interligado**.
- Recomenda-se assistir a vídeos e materiais adicionais para aprofundamento.

---

# ✅ TL;DR: 

- Certificado digital = **identidade eletrônica** + **segurança**.
- **Protege**, **valida** e **autoriza** operações.
- O **Brasil** é referência com a **ICP-Brasil**.
- **Você** é o guardião do seu certificado. &#x1F512;

---
