const express = require('express');
const https = require('https');
const fs = require('fs');

const  app = express();

const key = fs.readFileSync('./key.pem');

const cert = fs.readFileSync('./cert.pem');

app.get('/', (req, res) => {
    res.send('this is an secure server')
});


const server = https.createServer({key: key, cert: cert }, app);


server.listen(3001, () => {
    console.log('listening on 3001')
});