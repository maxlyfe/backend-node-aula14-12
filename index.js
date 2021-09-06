if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

const express = require('express');
const app = express();
const Conn = require('./models/conn/conn');
const db_url = process.env.DB_URL;
const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASS;
const db_data = process.env.DB_DATA;

app.use(express.json());

// Conn("localhost",27017,"musicas");
Conn(db_url, db_user, db_pass, db_data);



const port = 3000;

const musica = require('./routers/musicas.routes')
app.use('/musicas', musica);

const filme = require('./routers/filmes.routes')
app.use('/filmes', filme);

app.listen(process.env.PORT || port, ()=>{
    console.info(`Servidor rodando na porto ${port}`);
})