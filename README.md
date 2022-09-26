# DESAFIO-BACKEND
1. Clone o repositório e entre na pasta
- `git clone https://github.com/AdrielModollo/DESAFIO-BACKEND`
- `cd owinteractive-api`

2. Certifique-se de que possui o Node instalado, e o mysql está configurado de acordo.
3. Instale as dependências
- `npm i`

4. Caso queirar adicionar uma nova feature ou deseja consertar um bug, crie uma branch a partir da `default`
- `git checkout -b feat-error-middleware`

5. Após realizar as alterações da feature, certifique que o código passa no eslint
- `npm run lint`

6. Faça o commit e envie ao repositório remoto
- `git add .`
- `git commit -am "Colocar um comentário fácil e objetivo para ser encontrado rapidamente."`
- `git push origin {nome-da-branch}`

# Instalação

Executar comando: yarn
(Desta forma será instalada todas depedências já declarada em nosso package.json).

# Executar projeto

Comando para iniciar: 

yarn dev  <- Em desenvolvimento

yarn mysql <- Iniciar e banco de dados

yarn seed <- Popular banco de dados

# Como testar?

- `POST = localhost:3333/users`

```
{
    "name": "string",
    "password": "123",
    "email": "string",
    "birthday": "Date",
    "balance": number
}
```

>Atenção todas a rotas possuí autenticação, por isso é necessário criar uma conta e em seguida entrar pela route de login e recuperar o token, utilize no headers: 

- [x] Content-Type \ application/json

>Preencha os dados body:

- `POST = localhost:3333/login`

```
{
    "email": "string",
    "password": "string"
}
```

>Adicione em cada rota no headers: 

- [x] Content-Type \ application/json

- [x] x-access-token \ Token gerado através da rota de login


- `GET = localhost:3333/users/`
- `DELETE = localhost:3333/users/:id`
- `GET = localhost:3333/users/:id`

- `PATCH localhost:3333/users/:id`

```
{
    "balance": number
}
```

- `GET = localhost:3333/exportcsv`

- `POST = localhost:3333/users/:user_id/accounts`

```
{
    "debit": number,
    "credit": number,
    "estorn": number
}
```

- `DELETE = localhost:3333/account/id`
- `GET = localhost:3333/csvfilter`
