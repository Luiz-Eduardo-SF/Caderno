# 🧩 Subcamada MAC (Controle de Acesso ao Meio)

## 📌 O que é?
A subcamada **MAC** (Media Access Control) é responsável por **organizar o uso do meio de transmissão** em redes onde **várias estações compartilham o mesmo canal**. Ou seja, ela **evita colisões** e **controla quem pode transmitir e quando**. &#x1F4E2;

---

## 🧠 Por que isso é necessário?

- Em redes com **enlaces multiponto** (como LANs), **múltiplos dispositivos compartilham o mesmo meio físico**.
- Se **duas estações transmitirem ao mesmo tempo**, ocorre uma **colisão**, e os dados viram ruído. &#x1F4A5;

---

## 📡 Tipos de enlace:
| Tipo de Enlace         | Característica                            |
|------------------------|-------------------------------------------|
| Ponto a ponto          | Só há 1 transmissor e 1 receptor ✅        |
| Multiponto (broadcast) | Várias estações no mesmo meio ⚠️         |

---

## 🎯 Função da subcamada MAC

- Controlar o acesso ao meio **compartilhado**.
- **Evitar colisões**.
- **Organizar quem transmite e quando**.
- Muito comum em: **LANs, redes Wi-Fi, redes móveis** &#x1F4F6;

---

## 📱 Exemplo prático:
Nas **redes móveis celulares**, o canal de **subida (uplink)** é compartilhado entre vários celulares. O MAC decide **quem pode enviar dados e quando** pra não virar bagunça. &#x1F4DE;

---

## ✅ Em resumo:
| Problema                            | Solução (MAC)                      |
|------------------------------------|------------------------------------|
| Muitas estações no mesmo meio      | Protocolo que regula o acesso      |
| Transmissões simultâneas = colisão | Organização do envio dos quadros   |
| Compartilhamento de canal          | Regras de acesso ao meio           |

---

💡 MAC é o "sinaleiro" do trânsito de bits. Sem ele, é acidente na certa! &#x1F6A5;&#x1F6E3;&#xFE0F;
