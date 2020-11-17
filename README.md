# Allugator | Func(){ionários}

Este repositório contém o código do desafio de uma vaga da Allugator. Seguem as instruções abaixo para que possa ser rodado

# Setup

### Clonar Repositório
    git clone https://github.com/MatheusDev-1/allugator-challenge.git

### Inicializar Docker com banco PostgreSQL
    USER: postgres
    PASSWORD: seeyoulateralligator
    
    docker run --name allugator -e POSTGRES_PASSWORD=seeyoulateralligator -d postgres -p 5432:5432

### Backend
    cd allugator-challenge/backend && yarn
    yarn dev:server (após finalizar a instalação de todas as dependências)
	yarn typeorm migration:run (para criar todas as tabelas no banco)
	
	É possível visualizar os dados do banco através do DBeaver ou Postbird

### Frontend
    cd allugator-challenge/frontend && yarn
    yarn start (após finalizar a instalação de todas as dependências)
    
    Na tela /workers, carregar arquivo .csv que está em allugator-challenge/backend/tmp/funcionarios.csv

## Algumas dependências utilizadas no backend/frontend

| Dependência | Função |
| ------ | ------ |
| cors    | Serve para habilitar o CORS em nosso servidor e permitir determinadas requisições do backend  |
| date-fns    | Utilizado para formatar datas da melhor forma possível  |
| express    | Framework para construir aplicações e API's  |
| multer    | Utilizado para o upload de arquivos  |
| pg    | Driver do PostgreSQL  |
| typeorm    | Usado para abstrair queries de banco de dados através de javascript  |
| uuidv4    | Geração de UUID para ID dos parâmetros de rotas e banco de dados  |
| eslint    | Linter para monitoramento do código e indicação de erros  |
| prettier    | Formatador de código, deixando-o padronizado  |
| ts-node-dev    | Permite a inicialização com Typescript, fazendo a conversão dos arquivos .js  |
| react    | Biblioteca componentizada e flexível para criação de interfaces  |
| typescript    | Superset da linguagem JavaScript, permite a utilização de tipagem estática  |
| styled-components    | Permite utilização do CSS em JS  |


## API

| Método | Rota | Descrição | Tipo de Parâmetro | Parâmetros |
|-------| ------ | ---- | ------ | ---- | 
|GET| /worker       |  Retorna todos os funcionários da planilha    | Query String | name, cpf, role, status, minSalary, maxSalary, createdDate |
|GET| /worker/groupedByUf       |  Retorna quantidade de funcionários e funcionários por UF  |       |   |
|POST| /worker       |   Cria novo funcionário   |   Body    |   name, cpf, role, salary, uf   |
|POST| /worker/import       |   Importa funcionários a partir de arquivo   |   Multipart-Form    |  file   |
|DELETE| /worker/:cpf       |   Importa funcionários a partir de arquivo   |   Param String   |  cpf   |

## Considerações e possíveis adições
Exemplos de features que colocaria na aplicação caso tivesse maior prazo de entrega

- Mapa com marcação dos funcionários por estado 
- Hooks e Context API
- Animações quando houvesse inserções/remoções de dados na tabela
- Rotas de update para todos os campos no backend
