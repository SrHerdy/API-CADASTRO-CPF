API cadastro de cliente com validação de CPF.

Linguagem em JAVASCRIPT (NodeJS)
    Express
MongoDB
    Mongoose

*Script para a validação do cpf foi feito separado em microserviços.

Para realizar os testes das rotas (Endpoints que foram requisitadas no desafio) foi utilizado Insominia.

Para rodar a aplicação é necessário iniciar com Node no prompt (node src/index.js), ter mongodb instalado no sistema e rodando o servidor do db, usar o insominia para realizar os testes das rotas post e get's.

Rota para criação:
http://localhost:7777/cad

    Enviar os dados por JSON da seguinte forma:

    {
	"nome": "NOME",
	"cpf": "CPF SEM MASCARA",
	"nascimento": " DIA, MES, ANO"
    }

Rota para pesquisar por cpf:
http://localhost:7777/card/{cpf}     ---> substituir {cpf} por cpf que deseja buscar.

Rotas para listar clientes com paginação
http://localhost:7777/cads?pagina=2&limite=2   ---> substituir o numero de pagine e limite pelo desejado.
