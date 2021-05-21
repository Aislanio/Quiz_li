

//importa dependencia
const express = require('express');

const path = require('path');
const pages = require('./pages.js')
//iniciando o express
const server = express()
server
//utilizar o body do req
 .use(express.urlencoded({extended:true}))
//utilizando os arquivos estaticos
.use(express.static('public'))

//configura template enginer
.set('views',path.join(__dirname,"views"))
.set('view engine','hbs')
//cria uma rotaestáticos
//rotas da aplicaçao
.get('/',pages.index)
.get('/perguntas',pages.perguntas)
.get('/ranked',pages.ranked)
.post('/save-orphanage',pages.saveOrphanage)
//ligar o servidor
server.listen(9000);