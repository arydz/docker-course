const express = require('express');
const { Pool } = require('pg');
const HOST = '0.0.0.0';
const PORT = 80;
const app = express();
 
const pool = new Pool({ host: 'db', user: 'postgres', database: 'postgres' })
 
app.get('/', (req, res) => {

    pool.connect(); 
    pool.query('SELECT * FROM apparel', (error, response) => {
        console.log("Response received");
        res.json(response.rows);
    });
});
 
app.listen(PORT, HOST)