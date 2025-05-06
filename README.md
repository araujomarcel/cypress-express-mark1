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

bash
Copiar
Editar
npm run start
Por padrão, o servidor será iniciado em: http://localhost:3000

Certifique-se de que o servidor esteja rodando antes de executar os testes.

🧪 Executando os testes com Cypress
Abrir o Dashboard do Cypress:
bash
Copiar
Editar
npx cypress open
Após abrir o painel, selecione os casos de teste e execute conforme necessário.

Executar os testes diretamente no console (modo headless):
bash
Copiar
Editar
npx cypress run
🛠️ Ambiente de Desenvolvimento - Scripts disponíveis
Comando	Descrição
npm run start	Iniciar o servidor Express
npx cypress open	Abrir os testes Cypress no modo interativo
npx cypress run	Executar os testes Cypress em modo headless

🤝 Contribuição
Contribuições são bem-vindas!
Siga os passos abaixo para contribuir com o projeto:

Fork este repositório.

Crie uma branch para sua modificação:

bash
Copiar
Editar
git checkout -b sua-branch
Envie suas modificações:

bash
Copiar
Editar
git commit -m "Descrição do commit"
git push origin sua-branch
Abra um Pull Request no GitHub.

📄 Licença
Este projeto está licenciado sob a MIT License.

