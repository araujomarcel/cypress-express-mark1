# cypress-express

Bem-vindo ao repositório **cypress-express**.  
Este projeto foi desenvolvido para executar testes automatizados utilizando **Cypress** e **API Express**.  
Este guia irá ajudá-lo a configurar e executar o projeto em sua máquina local.

---

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter os seguintes requisitos configurados em sua máquina:

- **Node.js e npm** instalados  
  Verifique a instalação executando:
  ```bash
  node -v
  npm -v
Se não estiver instalado, faça o download e instale em: https://nodejs.org/

Git
Verifique a instalação executando:
git --version

⚙️ Passo a passo para instalação
1. Clone o repositório no seu ambiente local:
bash
Copiar
Editar
git clone https://github.com/araujomarcel/cypress-express-mark1.git
2. Navegue até a pasta do projeto:
bash
Copiar
Editar
cd cypress-express-mark1
3. Instale as dependências do projeto:
bash
Copiar
Editar
npm install
🚀 Executando o servidor Express
Este projeto contém uma API construída com Express.
Para iniciar o servidor, execute:
npm run start
Por padrão, o servidor será iniciado em: http://localhost:3000

Certifique-se de que o servidor esteja rodando antes de executar os testes.

🧪 Executando os testes com Cypress
Abrir o Dashboard do Cypress:

npx cypress open
Após abrir o painel, selecione os casos de teste e execute conforme necessário.

Executar os testes diretamente no console (modo headless):

npx cypress run
🛠️ Ambiente de Desenvolvimento - Scripts disponíveis
Comando	Descrição
npm run start	Iniciar o servidor Express
npx cypress open	Abrir os testes Cypress no modo interativo
npx cypress run	Executar os testes Cypress em modo headless
