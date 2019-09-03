# Exercício 3 - Reconhecimento de Imagens

Utilizando Aplicativos de Funções você deve cuidar de todo fluxo, desde o upload de imagens, ao reconhecimento e listagem das mesmas.

## O que você vai precisar

1. Criar um Aplicativo de funções contendo 3 **HttpTrigger**
    * Os 3 triggers devem consumir o serviço de Storage do Azure
    * Criar serviço de integração com o **BlobStore**
    * Selecionar os dados como deverão ser exibidos
    * Pode ser utilizado somente 1 Trigger e gerenciar as requisições com o *azure-express*
    * Escolha a linguagem que mais lhe agradar: a recomendação para este minicurso é o uso de TypeScript/JavaScript

2. Criar um App Flutter
    * O aplicativo deve conter ao menos duas telas e seguir as tendências de design Material
    * Listagem das imagens com a classificação e metadados
    * Acesso a câmera
    * Upload de fotos da galeria ou através de foto tirada
    * Deve consumir somente o App de funções criado

## Bônus

### WebApp

Utilizando um Framework Web, realizar as mesmas funções do App e servir está página utilizando **Azure Functions** ou **Azure Static WebSites**.
