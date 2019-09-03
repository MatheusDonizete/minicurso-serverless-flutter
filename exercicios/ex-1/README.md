# Exercício 1 - Pokedéx Pokémon

Consumindo recursos da API oficial do Pokémon, o objetivo é montar uma App de *Pokedéx*, onde o usuário tem que ser capaz de pesquisar por um Pokémon específico e como resposta devem ser exibidas as informações referentes ao monstrinho de bolso pesquisado, como ataques, status e cadeias de evolução.

## O que você vai precisar

1. Criar um Aplicativo de funções e um **HttpTrigger**
    * Este trigger terá que consumir a API Oficial e armazenar em algum tipo de cache para obtenção de respostas mais rápidas, como um arquivo **.dat**
    * Selecionar os dados como deverão ser exibidos
    * Escolha a linguagem que mais lhe agradar: a recomendação para este minicurso é o uso de TypeScript/JavaScript

2. Criar um App Flutter
    * O aplicativo deve conter ao menos duas telas e seguir as tendências de design Material
    * Uma listagem tem que ser possível
    * Menu de navegação
    * Deve consumir somente o App de funções criado

## Bônus

### WebApp

Utilizando um Framework Web, realizar as mesmas funções do App e servir está página utilizando **Azure Functions** ou **Azure Static WebSites**.

### Batalha Pokémon

Através dos aplicativos de funções e utilizando CosmosDB, encontrar dois usuários que estejam em sessão e fazer os dois batalharem, utilizando os dados reais já coletados.
