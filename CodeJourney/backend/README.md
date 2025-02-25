# CodeJourney Backend Documentation

## Descrição do Projeto
CodeJourney é uma plataforma de aprendizado de programação gamificada que oferece trilhas de aprendizado, aulas interativas, jogos educativos e um editor de código integrado. O backend é construído com Node.js e Express, utilizando MongoDB para armazenamento de dados.

## Estrutura do Projeto
O backend é organizado da seguinte forma:

- **src/**: Contém a lógica da aplicação.
  - **controllers/**: Manipula as requisições para as rotas.
  - **models/**: Define os modelos do MongoDB.
  - **routes/**: Define as rotas da API.
  - **services/**: Contém a lógica de negócios.
  - **app.js**: Ponto de entrada da aplicação.

## Instalação

1. Clone o repositório:
   ```
   git clone <URL_DO_REPOSITORIO>
   ```

2. Navegue até o diretório do backend:
   ```
   cd CodeJourney/backend
   ```

3. Instale as dependências:
   ```
   npm install
   ```

4. Crie um arquivo `.env` na raiz do diretório `backend` e adicione suas variáveis de ambiente, como a URL do MongoDB.

## Uso

Para iniciar o servidor, execute:
```
npm start
```

O servidor estará disponível em `http://localhost:5000`.

## APIs

As seguintes rotas estão disponíveis:

- **POST /api/auth/register**: Registro de usuário.
- **POST /api/auth/login**: Login de usuário.
- **GET /api/progress**: Recupera o progresso do usuário.
- **GET /api/exercises**: Recupera exercícios disponíveis.
- **GET /api/games**: Recupera jogos educativos.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## Licença

Este projeto está licenciado sob a MIT License. Veja o arquivo LICENSE para mais detalhes.