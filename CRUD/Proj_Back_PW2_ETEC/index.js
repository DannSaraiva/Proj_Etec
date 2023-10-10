//IMPORTAÇÃO DOS PACOTES.
const express = require('express');

//IMPORTAÇÃO DO ARQUIVO PARA CONEXÃO COM A ROTA.
const routeMedicamento = require('./routes/routeMedicamento');

//SCRIPT PARA RODAR O PROJETO.
const malit = express();
malit.use(express.json());
malit.use(express.urlencoded({ extended: true }));
malit.use('/', routeMedicamento);

//WEB SERVER PARA TRANSITAR AS REQUISIÇÕES.
malit.listen(3333, () => {
    console.log("Servidor rodando !!!");
});