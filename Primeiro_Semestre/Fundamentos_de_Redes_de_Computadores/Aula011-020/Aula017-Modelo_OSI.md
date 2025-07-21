# Modelo OSI

Na década de 1970, a International Organization for Standardization (ISO), um órgão responsável pelo desenvolvimento de padrões internacionais, criou o modelo de referência de camadas denominado **OSI (Open System Interconnection - ISO/IEC 7498-1:1994)**.

O objetivo foi elaborar um modelo que permitisse a comunicação entre sistemas diferentes, independentemente de suas arquiteturas, facilitando a integração sem necessidade de mudanças na lógica de hardware ou software (FOROUZAN, 2010).

**Importante:** o modelo OSI **não é uma arquitetura de rede**. Ele não especifica os serviços ou protocolos que devem ser usados em cada camada. Define apenas **o que cada camada deve fazer**. Apesar disso, a ISO também publicou padrões para todas as camadas, mas eles são tratados como documentos distintos.

> "O modelo (em parte) é bastante utilizado, embora os protocolos associados há muito tempo tenham sido deixados de lado."  
> (TANENBAUM, 2011, p. 45)

Hoje, o que utilizamos do modelo OSI é a **referência das funções das camadas**. Quando ouvimos que um protocolo pertence à camada X (1, 2, 3...), essa classificação se refere diretamente ao modelo OSI. É comum encontrarmos a expressão "**modelo de referência OSI**" (ou "**RM-OSI**" em inglês) em livros e artigos técnicos.

---

# As Sete Camadas do Modelo OSI

De cima para baixo:

1. **Aplicação**
2. **Apresentação**
3. **Sessão**
4. **Transporte**
5. **Rede**
6. **Enlace**
7. **Física**

Cada camada é responsável por tarefas específicas no processo de transmissão de dados.

Apesar da ISO ter especificado protocolos para cada camada, **na prática, eles não são utilizados**. No entanto, os conceitos de **comunicação vertical, comunicação horizontal e encapsulamento** permanecem válidos no modelo.

Durante a transmissão:
- O dado gerado na aplicação percorre todas as camadas até a física.
- Cada camada adiciona seu próprio cabeçalho, encapsulando a unidade de dados da camada superior.
- A comunicação ocorre entre camadas de mesmo nível (horizontalmente).

---

# Subgrupos de Camadas

O modelo OSI pode ser dividido em três subgrupos:

## Camadas mais altas
- **Aplicação**, **Apresentação** e **Sessão**.
- Responsáveis pelo suporte ao usuário e pela interoperabilidade entre sistemas heterogêneos (FOROUZAN, 2010).

## Camadas mais inferiores
- **Rede**, **Enlace** e **Física**.
- Focadas na movimentação de dados entre dispositivos e no suporte às operações de rede (FOROUZAN, 2010).

## Camada de Transporte
- **Transporte** atua como ponte entre o suporte ao usuário (camadas superiores) e o suporte de rede (camadas inferiores), garantindo que os dados estejam prontos para serem utilizados pelas aplicações (FOROUZAN, 2010).
