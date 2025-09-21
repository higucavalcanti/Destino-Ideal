# Destino Ideal - Recomendador de Viagens com IA

Destino Ideal é uma aplicação web full-stack que utiliza Inteligência Artificial para gerar roteiros de viagem personalizados. O utilizador descreve o que deseja para a sua viagem de sonho, e a IA da [Maritaca AI](https://maritaca.ai/) sugere um destino, descreve o local e fornece um roteiro de atividades.

Este projeto foi criado para demonstrar a integração de um frontend moderno em React com um backend Node.js que serve como um proxy para a API de um Modelo de Linguagem Grande (LLM).

## ✨ Funcionalidades Principais

* **Recomendações Personalizadas:** O utilizador insere as suas preferências de viagem em texto livre (ex: "uma praia tranquila no nordeste com boa comida e cultura local").
* **Integração com IA:** O backend consome a API da Maritaca (Maritalk) para interpretar o desejo do utilizador e gerar uma recomendação completa, incluindo nome do local, descrição e roteiro.
* **Visualização em Mapa:** O destino recomendado é automaticamente exibido num mapa interativo, utilizando a biblioteca [React Leaflet](https://react-leaflet.js.org/).
* **Interface Reativa:** Interface limpa e responsiva construída com React e Styled Components.

## 🚀 Arquitetura e Tecnologias

O projeto é dividido em duas partes principais: `frontend` e `backend`.

### **Frontend**

* **Framework:** [React.js](https://react.dev/)
* **Estilização:** [Styled Components](https://styled-components.com/)
* **Requisições HTTP:** [Axios](https://axios-http.com/)
* **Mapas:** [React Leaflet](https://react-leaflet.js.org/)

### **Backend**

* **Ambiente:** [Node.js](https://nodejs.org/)
* **Framework:** [Express.js](https://expressjs.com/)
* **Variáveis de Ambiente:** [Dotenv](https://www.npmjs.com/package/dotenv)
* **Comunicação:** [Axios](https://axios-http.com/) para se comunicar com a API da Maritaca.

## ⚙️ Como Executar o Projeto Localmente

Siga os passos abaixo para rodar a aplicação completa na sua máquina.

### **Pré-requisitos**

* [Node.js](https://nodejs.org/) instalado.
* Uma chave de API da [Maritaca AI](https://maritaca.ai/).

### **1. Configurando o Backend**

Primeiro, inicie o servidor backend, que irá se comunicar com a API da Maritaca.

```bash
# Navegue até a pasta do backend
cd backend

# Instale as dependências
npm install

# Crie um arquivo .env na raiz da pasta 'backend' e adicione a sua chave
# Exemplo de conteúdo para o arquivo .env:
# API_KEY=SUA_CHAVE_DA_MARITACA_AQUI

# Inicie o servidor
npm start
```

O servidor backend estará a rodar em http://localhost:3001.

### 2. Configurando o Frontend

Agora, num novo terminal, inicie a aplicação React.

```bash
# Navegue até a pasta do frontend
cd frontend

# Instale as dependências
npm install

# Inicie a aplicação
npm start
```

O frontend estará disponível em http://localhost:3000 e já está configurado para fazer requisições ao backend.
