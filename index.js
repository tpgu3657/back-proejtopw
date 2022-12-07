const express = require('express');

const categoriaController = require('./controller/Categoriacontroller');

const roupaController = require('./controller/roupacontroller');


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/',categoriaController);

app.use('/',roupaController);





app.listen(3000, ()=>{
    console.log('SERVIDOR RODANDO EM: http://localhost:3000');
});