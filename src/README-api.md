# 🏎️ Formula 1 Minimal API

Uma API REST minimalista desenvolvida com **Node.js**, **TypeScript** e **Fastify**, contendo informações sobre equipes e pilotos da Fórmula 1.

O objetivo deste projeto é demonstrar como construir uma API simples utilizando o framework Fastify, aplicando conceitos como:

* Criação de rotas HTTP
* Configuração de CORS
* Tipagem com TypeScript
* Parâmetros de rota
* Respostas HTTP
* Estrutura básica de uma Minimal API

---

## 🚀 Tecnologias

* Node.js
* TypeScript
* Fastify
* @fastify/cors

---

## 📁 Estrutura do Projeto

```
.
├── src/
│   └── server.ts
├── package.json
├── tsconfig.json
└── README.md
```

---

## ⚙️ Instalação

Clone o repositório:

```bash
git clone https://github.com/seu-usuario/formula1-minimal-api.git
```

Entre na pasta:

```bash
cd formula1-minimal-api
```

Instale as dependências:

```bash
npm install
```

---

## ▶️ Executando o projeto

Modo de desenvolvimento:

```bash
npm run dev
```

A API ficará disponível em:

```
http://localhost:3333
```

---

# 📌 Endpoints

## Listar equipes

**GET**

```
/teams
```

### Exemplo de resposta

```json
[
  {
    "id": 1,
    "name": "Ferrari",
    "base": "Maranello, Itália"
  }
]
```

---

## Listar pilotos

**GET**

```
/drivers
```

### Exemplo de resposta

```json
[
  {
    "id": 1,
    "name": "Max Verstappen",
    "titulos": "4 títulos mundiais"
  }
]
```

---

## Buscar piloto por ID

**GET**

```
/drivers/:id
```

### Exemplo

```
GET /drivers/1
```

Resposta:

```json
{
  "driver": {
    "id": 1,
    "name": "Max Verstappen",
    "titulos": "4 títulos mundiais"
  }
}
```

Caso o piloto não exista:

```json
{
  "message": "Driver not Found"
}
```

Status HTTP:

```
404 Not Found
```

---

## 📚 Conceitos aplicados

* API REST
* Minimal API
* Fastify
* Rotas GET
* Parâmetros de rota
* Tipagem com TypeScript
* Código de status HTTP
* JSON
* CORS

---

## 🔮 Melhorias futuras

* Adicionar banco de dados
* CRUD completo (POST, PUT e DELETE)
* Validação com Zod
* Documentação com Swagger/OpenAPI
* Testes automatizados
* Deploy da API

---

## 👨‍💻 Autor

Projeto desenvolvido para fins de estudo utilizando **Node.js**, **TypeScript** e **Fastify**.