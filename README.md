# Desafio para a vaga de Front-End

Como parte do processo seletivo, usaremos este desafio para avaliar suas habilidades com os requisitos da vaga. 

O teste prático deverá ser feito por você, em sua casa até o prazo limite de **19/06/2020**.

## Como entregar o desafio?

 - Faça um fork deste projeto em sua conta no [Github](https://github.com/join) (crie uma se você não possuir). 
 - Em seguida, desenvolva o projeto conforme os telas da pasta layouts em seu próprio fork. 
 - Por fim, envie todo o código para o seu fork no Github e envie um pull request para este repositório original.

## Descrição do projeto

Nosso desafio consiste em implementar uma aplicação client-side que consulte a API e retorne os dados para serem mostrados no painel.

O usuário deverá ser capaz de realizar uma busca consumindo os dados da API como mostrado nos layouts fornecidos.

### API
```url
https://desafio.eadplataforma.com/api/1
```
### Acesso
```
Authorization: 123456789
```
### Endpoints
```
GET /api/1/users
```
```json
{
    "total": 2,
    "limit": 10,
    "offset": 0,
    "rows": 2,
    "users": [
	        {
	            "id": "1",
	            "name": "Ronaldo Abreu",
	            "email": "ronaldo.abreu@meusite.com.br",
	            "phone": "(14) 99745-1234",
	            "amount": "251.59",
	            "photo_url": "https://desafio.eadplataforma.com/front/assets/ronaldo.jpg",
	            "status": "1"
	        },
	        {
	            "id": "2",
	            "name": "Geovane Felix",
	            "email": "geovane.felix@meusite.com.br",
	            "phone": "(14) 99745-5678",
	            "amount": "265.59",
	            "photo_url": "https://desafio.eadplataforma.com/front/assets/geovane.jpg",
	            "status": "0"
	        }
	]
}
```
```
GET /api/1/search?q={query}
```
```json
{
    "total": 2,
    "limit": 10,
    "offset": 0,
    "rows": 2,
    "search": [
	        {
	            "id": "1",
	            "name": "Ronaldo Abreu",
	            "email": "ronaldo.abreu@meusite.com.br",
	            "phone": "(14) 99745-1234",
	            "amount": "251.59",
	            "photo_url": "https://desafio.eadplataforma.com/front/assets/ronaldo.jpg",
	            "status": "1"
	        },
	        {
	            "id": "2",
	            "name": "Geovane Felix",
	            "email": "geovane.felix@meusite.com.br",
	            "phone": "(14) 99745-5678",
	            "amount": "265.59",
	            "photo_url": "https://desafio.eadplataforma.com/front/assets/geovane.jpg",
	            "status": "0"
	        }
	]
}
```
```
GET /api/1/profile/:id
```
```json
{
    "id": "1",
    "name": "Ronaldo Abreu",
    "email": "ronaldo.abreu@meusite.com.br",
    "phone": "(14) 99745-1234",
    "amount": "251.59",
    "photo_url": "https://desafio.eadplataforma.com/front/assets/ronaldo.jpg",
    "status": "1"
}
```
```
status: 0 = Adimplente / 1 = Inadimplente
```

### Paginação
```
GET /api/1/users?offset=10 = Indica o início da leitura à partir do registro 10.
```

### Diretrizes
- Seguir as [instruções de desenvolvimento](https://github.com/eadplataforma/desafio/blob/master/layouts/instrucoes.txt);

- Utilize [ReactJS](https://reactjs.org/) como Framework JavaScript;

- Faça o uso de componentes de forma genérica e escalável;

- Utilize algum pré-processador para o seu css, de preferência [SASS](https://sass-lang.com/).

- Faça com que sua página tenha uma ótima experiência para o usuário, independente do dispositivo que ele esteja usando;

- Utilize um código limpo e bem organizado, e de preferência, utilize alguma arquitetura modular para organizar seus arquivos CSS/SASS e os assets utilizados;

- Documente seu projeto.

### Desejável
- Utilizar [ReduxJS](https://redux.js.org/) para controle de estado dos componentes;

- Utilizar a lib [Ant Design 3x](https://3x.ant.design) para construção dos componentes necessários.
  
### Avaliação

Seu projeto será avaliado de acordo com a qualidade do seu código e sua organização com os arquivos utilizados, além do conhecimento e bom uso da semântica HTML e CSS.

Finalizando, comunique o e-mail jobs@eadplataforma.com sobre sua participação no desafio com o endereço da sua conta no github e seu curriculum em anexo para a próxima etapa da seleção.

Boa sorte!
