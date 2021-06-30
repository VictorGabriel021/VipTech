Como executar o Projeto:

1 - Clone o projeto no seu computador(git clone https://github.com/VictorGabriel021/VipTech.git) 

2 - Entre na pasta VitTech e execute o comando npm install para instalar as dependências do projeto.

3 - Em seguida execute o comando npm run start para executar o projeto.

Detalhes do Projeto:

1 - A Api https://dummyapi.io disponibiliza apenas 500 requisições por dia, caso gere o erro 429 tem duas opções para resolver:

1.1 - Espere 24 horas para poder chamar as requisições. 
  
1.2 - No arquivo request.ts (caminho: src/core/utils/request.ts) basta trocar o APP_ID por um id válido(que pode ser gerado no site da dummyapi, mas precisa ter login).
  
Figma do Projeto: https://www.figma.com/file/6ZIMBOxPrEn0Iw1M3pozzq/VipTech?node-id=0%3A1

Deploy do site: https://viptech.netlify.app/
