Readme - Projeto Angular + Spring Boot + MySQL

Este é um guia para executar o projeto que utiliza Angular para o frontend, Spring Boot para o backend e MySQL como banco de dados.
Pré-requisitos

Antes de começar, certifique-se de ter instalado:

    Node.js (https://nodejs.org)
    Angular CLI (https://cli.angular.io/)
    Java Development Kit (JDK) (https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
    Maven (https://maven.apache.org/)
    MySQL Server (https://dev.mysql.com/downloads/)

Configuração do Banco de Dados

    Crie um banco de dados MySQL chamado crud_db.
    Execute o script SQL fornecido no diretório backend/src/main/resources/db.sql para criar as tabelas necessárias e inserir dados iniciais.

Configuração do Backend (Spring Boot)

    Navegue até o diretório backend.
    Abra o arquivo src/main/resources/application.properties e configure as credenciais do banco de dados (URL, usuário, senha).
    

mvn clean package

Após a construção bem-sucedida, execute o Servidor SpringBoot

Configuração do Frontend (Angular)

    Navegue até o diretório frontend.
    Abra um terminal na raiz do diretório frontend.
    Execute o seguinte comando para instalar as dependências necessárias:

npm install

Após a instalação das dependências, execute o seguinte comando para iniciar o servidor de desenvolvimento do Angular:

    ng serve

    O frontend estará acessível em http://localhost:4200 por padrão.

Acessando a Aplicação

Após seguir os passos acima, a aplicação estará em execução. Você pode acessar a interface do usuário em um navegador da web visitando http://localhost:4200.

Certifique-se de que tanto o backend quanto o frontend estejam em execução enquanto estiver utilizando a aplicação.

Para mais informações sobre como utilizar e personalizar o projeto, consulte a documentação relevante de cada tecnologia utilizada (Angular, Spring Boot, MySQL).
