# 🌐 Tradução de Endereços IP com NAT (Network Address Translation) &#x1F310;

## 🚨 Problema
Os endereços IPv4 estão **acabando** (já estão em falta!). A Internet tem só cerca de **4 bilhões de endereços únicos**. Para resolver isso, usamos o **NAT**, descrito na RFC 3022.

---

## 🔁 O que é o NAT?

O NAT é um mecanismo que permite:

- Usar **endereços IP privados** (não válidos na Internet) **dentro da rede da empresa/casa**.
- Quando a máquina quer acessar algo na Internet, o roteador (ou dispositivo NAT) **troca o IP privado pelo IP público** da organização.

Assim, **várias máquinas** podem acessar a Internet **usando 1 único IP público**.

---

## 🔐 IPs Privados (Reservados)
Esses endereços **NUNCA aparecem na Internet**. Você pode usar livremente dentro da sua rede:

| Faixa de IP privada         | Máscara           | Classe |
|----------------------------|-------------------|--------|
| 10.0.0.0 – 10.255.255.255  | 255.0.0.0         | A      |
| 172.16.0.0 – 172.31.255.255| 255.255.0.0       | B      |
| 192.168.0.0 – 192.168.255.255 | 255.255.255.0 | C      |

📌 Exemplo comum: seu roteador de casa usa algo como `192.168.0.1`, e seu computador pode ser `192.168.0.101`.

---

## ⚙️ Como o NAT funciona?

1. 👩‍💻 Seu PC (ex: `192.168.0.101`) quer acessar o site `example.com`.
2. 🚪 O roteador NAT troca seu IP de origem pelo IP público da rede, tipo `203.0.113.5`.
3. 🌍 O pacote sai para a Internet com o IP válido.
4. 📥 A resposta do site volta para `203.0.113.5`.
5. 🔁 O NAT consulta sua **tabela de tradução** e manda a resposta de volta para seu PC (que começou a conversa).

---

## 🛡️ Segurança extra

O NAT **esconde os IPs internos da rede**. Isso **impede acessos diretos** da Internet para dentro da sua rede (a menos que você configure o roteador para permitir, via port forwarding).

---

## 📌 Conclusão

- O NAT **salva endereços IPv4** e **aumenta a segurança**.
- É por isso que todos os roteadores domésticos usam `192.168.x.x` por padrão.
- Internamente usamos IPs privados, mas externamente só aparece **1 IP público**.

---

&#x1F4A1; **Dica final:**  
Você pode testar isso com o comando `ipconfig` (Windows) ou `ifconfig`/`ip a` (Linux) e verá seu IP privado local. Depois, entre no site [https://whatismyip.com](https://whatismyip.com) para ver o **IP público que a Internet enxerga**. 😉
