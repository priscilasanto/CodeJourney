# CodeJourney

CodeJourney é uma plataforma de aprendizado de programação gamificada que utiliza tecnologias modernas como React.js, Node.js e MongoDB. O objetivo do projeto é fornecer uma experiência interativa e envolvente para usuários que desejam aprender a programar através de trilhas de aprendizado, aulas interativas, jogos educativos e um editor de código integrado.

## Estrutura do Projeto

O projeto é dividido em duas partes principais: o backend e o frontend.

### Backend

O backend é construído com Node.js e Express, e é responsável por gerenciar a lógica de negócios, autenticação de usuários e interações com o banco de dados MongoDB. A estrutura do backend é a seguinte:

- `src/app.js`: Ponto de entrada da aplicação, configura o servidor e define as rotas principais.
- `src/controllers/index.js`: Manipula as requisições para as rotas, como registro de usuário e login.
- `src/models/index.js`: Define os modelos do MongoDB utilizando Mongoose.
- `src/routes/index.js`: Define as rotas da API, conectando as requisições HTTP aos controladores.
- `src/services/index.js`: Contém a lógica de negócios, como validação de dados e interações com o banco de dados.

### Frontend

O frontend é construído com React.js e é responsável pela interface do usuário. A estrutura do frontend é a seguinte:

- `public/index.html`: HTML principal onde o React será montado.
- `src/App.js`: Componente principal que define a estrutura da aplicação e as rotas.
- `src/components/index.js`: Exporta componentes reutilizáveis da interface.
- `src/pages/index.js`: Contém os componentes de página, como a página inicial e de módulos.
- `src/services/index.js`: Contém funções para interagir com a API do backend.

## Instalação

### Backend

1. Navegue até a pasta `backend`.
2. Execute `npm install` para instalar as dependências.
3. Crie um arquivo `.env` com as variáveis de ambiente necessárias.
4. Execute `npm start` para iniciar o servidor.

### Frontend

1. Navegue até a pasta `frontend`.
2. Execute `npm install` para instalar as dependências.
3. Execute `npm start` para iniciar a aplicação React.

## Funcionalidades

- Trilhas de aprendizado personalizadas.
- Aulas interativas com feedback em tempo real.
- Sistema de gamificação com pontos e conquistas.
- Jogos educativos para reforçar o aprendizado.
- Editor de código integrado para prática de programação.
- Autenticação de usuário para acesso personalizado.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests para melhorias e correções.

## Licença

Este projeto está licenciado sob a MIT License. Veja o arquivo LICENSE para mais detalhes.