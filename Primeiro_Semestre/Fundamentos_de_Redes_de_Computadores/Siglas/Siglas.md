# 🔐 Segurança da Informação

- **CID** = Confidencialidade, Integridade e Disponibilidade  
  ‣ Base da segurança da informação: proteger dados de acessos não autorizados (C), garantir que não sejam alterados (I) e estejam sempre acessíveis (D).

- **PSI** = Política de Segurança da Informação  
  ‣ Conjunto de regras que orientam como proteger os dados dentro da empresa.

- **MD5** = Message Digest Algorithm 5  
  ‣ Função de hash que gera resumo de mensagem. Não é mais considerado seguro para uso crítico.

- **SHA-1 / SHA-2 / SHA-3** = Secure Hash Algorithm (v1, v2, v3)  
  ‣ Funções de hash mais seguras que o MD5.

- **VPN** = Virtual Private Network  
  ‣ Cria um túnel criptografado entre dois pontos na internet. Protege dados e permite acesso remoto seguro.

- **MITM** = Man-In-The-Middle  
  ‣ Ataque onde o invasor intercepta comunicações entre duas partes.

- **AC** = Autoridade Certificadora  
  ‣ Entidade confiável que emite certificados digitais (ex: ICP-Brasil).

- **ICP-Brasil** = Infraestrutura de Chaves Públicas Brasileira  
  ‣ Sistema nacional que garante validade jurídica a documentos eletrônicos com certificado digital.

---

# 🌐 Protocolos e Camadas

- **OSI** = Open Systems Interconnection  
  ‣ Modelo de 7 camadas para redes. Usado como referência.

- **TCP/IP** = Transmission Control Protocol / Internet Protocol  
  ‣ Conjunto de protocolos que move a internet. Usa 4 camadas.

- **TCP** = Transmission Control Protocol  
  ‣ Confiável. Garante entrega de dados. Usa confirmação e controle de erros.

- **UDP** = User Datagram Protocol  
  ‣ Rápido, mas sem garantias. Ideal pra vídeo, jogos e VoIP.

- **IP** = Internet Protocol  
  ‣ Responsável pelo endereçamento e roteamento de pacotes.

- **HTTP** = HyperText Transfer Protocol  
  ‣ Protocolo da web para troca de páginas.

- **HTTPS** = HTTP Secure  
  ‣ Versão segura do HTTP com SSL/TLS.

> - **SSL (Secure Sockets Layer)**  
  ‣ Protocolo antigo de segurança para proteger dados na internet, hoje está obsoleto.

> - **TLS (Transport Layer Security)**  
  ‣ Evolução do SSL, mais seguro, usado atualmente para criptografar conexões.

- **FTP** = File Transfer Protocol  
  ‣ Protocolo para envio e recebimento de arquivos.

- **DNS** = Domain Name System  
  ‣ Traduz nomes de domínio (google.com) para endereços IP.

- **DHCP** = Dynamic Host Configuration Protocol  
  ‣ Atribui IPs automaticamente na rede.

- **MAC** = Media Access Control  
  ‣ Endereço físico de uma placa de rede.

---

# 🧰 Gerência de Redes (Modelo FCAPS)

- **F (Fault)** = Falhas  
  ‣ Identifica, registra e corrige erros na rede.

- **C (Configuration)** = Configuração  
  ‣ Garante que todos os dispositivos estejam com as configurações corretas.

- **A (Accounting)** = Contabilidade  
  ‣ Registra e controla o uso de recursos por usuários.

- **P (Performance)** = Desempenho  
  ‣ Avalia a eficiência da rede (throughput, latência, etc.).

- **S (Security)** = Segurança  
  ‣ Controla o acesso e protege contra ataques e usos indevidos.

---

# 🔒 Criptografia e Assinatura Digital

- **Criptografia Assimétrica**  
  ‣ Usa um par de chaves: pública para cifrar, privada para decifrar.

- **Hash**  
  ‣ Resumo da mensagem que representa o conteúdo. Alterações mudam completamente o hash.

- **Assinatura Digital**  
  ‣ Garante autenticidade e integridade. Usa hash + chave privada.

- **Certificado Digital**  
  ‣ Documento eletrônico que liga a chave pública a uma pessoa/entidade.

---