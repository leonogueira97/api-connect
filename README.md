# API Connect

## Objetivo

A API Connect é uma API REST desenvolvida para um MVP de gerenciamento de usuários. Ela permite cadastrar, consultar, atualizar e excluir usuários por meio de requisições HTTP.

## Tecnologias utilizadas

- Node.js
- Express.js
- JavaScript
- REST API
- JSON
- Git
- GitHub

## Estrutura do projeto

```text
api-connect/
├── controllers/
│   └── usersController.js
├── routes/
│   └── users.js
├── .gitignore
├── package.json
├── server.js
└── README.md
```

## Execução local

### 1. Instale o Node.js

Verifique a instalação:

```bash
node --version
npm --version
```

### 2. Instale as dependências

Na raiz do projeto:

```bash
npm install
```

### 3. Inicie a API

```bash
npm start
```

A API ficará disponível em:

```text
http://localhost:3000
```

## Endpoints

| Método | Endpoint | Descrição |
|---|---|---|
| GET | `/users` | Lista todos os usuários |
| GET | `/users/:id` | Busca usuário por ID |
| POST | `/users` | Cria um usuário |
| PUT | `/users/:id` | Atualiza um usuário |
| DELETE | `/users/:id` | Exclui um usuário |

### GET /users

Lista todos os usuários.

### GET /users/:id

Exemplo:

```text
GET /users/1
```

### POST /users

Exemplo de corpo:

```json
{
  "name": "Maria Silva",
  "email": "maria@email.com"
}
```

### PUT /users/:id

Exemplo:

```text
PUT /users/1
```

Corpo:

```json
{
  "name": "Maria Santos",
  "email": "maria.santos@email.com"
}
```

### DELETE /users/:id

Exemplo:

```text
DELETE /users/1
```

## Testes

A API pode ser testada utilizando Postman ou Insomnia.

URL base:

```text
http://localhost:3000
```

## Git e GitHub

Para versionar o projeto:

```bash
git init
git add .
git commit -m "feat: criação da API Connect"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/api-connect-seu-nome-sobrenome.git
git push -u origin main
```
