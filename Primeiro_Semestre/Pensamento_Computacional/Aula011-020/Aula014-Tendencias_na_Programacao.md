# Tendências na Programação de Computadores

## Uso de Linguagens Dinâmicas/Interpretadas

- A tendência atual é o aumento do uso de **linguagens dinâmicas/interpretadas**.
- **Motivo**: Programar de forma **mais simples e eficiente** é mais valorizado, mesmo que o programa final execute mais lentamente na CPU.

---

## A Pergunta Fundamental:

**Qual é o recurso mais escasso na programação de computadores?**
> Resposta: **O programador**.

- O mercado sofre **falta de profissionais qualificados** em computação.
- **Economizar tempo de desenvolvimento** é mais importante do que otimizar cada ciclo da CPU.
- **Lei de Moore**: O poder de processamento cresce rapidamente e os processadores ficam mais baratos.

---

## Projeções Futuras

- A escassez de programadores deve **aumentar** ainda mais.
- O custo da mão de obra continuará sendo **muito maior** do que o custo do hardware.

&#x1F4BB; **Resumo**: É mais valioso economizar o tempo do programador do que tentar extrair cada gota de performance do hardware.

---

## JIT (Just-In-Time Compiler)

- **Objetivo**: Unir o melhor das linguagens compiladas e interpretadas.
- **Como funciona**:
  - Lê trechos do código dinâmico **em tempo real**.
  - **Compila rapidamente** partes do código antes de executá-las.
  - Acelera significativamente a execução dos programas.

### Aplicação:

- Navegadores modernos (**Firefox, Chrome, Edge, IE**) usam **JITs** para otimizar **JavaScript**:
  - Trechos executados com frequência são **compilados em código de máquina** na memória.
  - Oferece desempenho próximo a linguagens compiladas como **C** e **C++**.
  - O código gerado pelo JIT é **descartado** após o programa terminar.

### Observação Importante:
- Mesmo com JIT, **linguagens interpretadas ainda são mais lentas** que linguagens puramente compiladas como C e C++.

---

## Outros Usos do JIT:

- **Java** também utiliza **JIT** extensivamente.
- O grande ganho de desempenho dos navegadores nos últimos anos é graças ao **JIT para JavaScript**.

&#x1F680; **Conclusão**: A tecnologia JIT mudou o jogo, mas linguagens compiladas tradicionais ainda reinam soberanas em performance pura.
