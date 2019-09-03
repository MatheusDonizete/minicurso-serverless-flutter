# Exercício 2 - Aplicativo de Login

Uma ótima forma de começar a desenvolver é começar do básico, o que não é mais "básico" do que uma tela de autenticação? A intenção desta tarefa é exercitar os conceitos aprendidos e através de aplicativos de funções criar um método de autenticação.

## O que você vai precisar

1. Modelar seus documentos no CosmosDB
2. Criar um Aplicativo de funções e um **HttpTrigger**
    * A requisição deverá receber como parâmetro *identificador* e *senha*
    * A autenticação tem que ser possível tanto por um nome de usuário quanto por e-mail
    * Integrar como saída do CosmosDB
    * Escolha a linguagem que mais lhe agradar: a recomendação para este minicurso é o uso de TypeScript/JavaScript

3. Deverá ser criado outro **HttpTrigger**
    * Este para gerenciar os cadastros
    * Receber os dados, validar com informações da base de dados e registrar

4. Criar um App Flutter
    * O aplicativo deve conter ao menos duas telas e seguir as tendências de design Material

    * O App terá que ter 3 telas:
        * Login
        * Cadastro
        * Sucesso na autenticação

## Bônus

### WebApp

Utilizando um Framework Web, realizar as mesmas funções do App e servir está página utilizando **Azure Functions** ou **Azure Static WebSites**.

## Login Pokémon

Para este exercício, os recursos criado no exercício 1 podem ser reutilizados, adicione ao App do exercício anterior estes recursos.
