# SSL with Express

1. Creating Keys and Cerificate (linux terminal) - 

        openssl req -x509 -newkey rsa:2048 -keyout keytmp.pem -out cert.pem -days 365

2. Get Decrypted Keys 

        openssl rsa -in keytmp.pem -out key.pem
        
3. Include Certificate and Keys to your server. 

        const fs = require('fs');
        const key = fs.readFileSync('./key.pem');
        const cert = fs.readFileSync('./cert.pem');
        
        
4. Create HTTPS server with Express 

        const express = require('express');
        const https = require('https');
        const  app = express();
        const server = https.createServer({key: key, cert: cert }, app);
        
        
5. Start listening to requests 

        app.get('/', (req, res) => {
            res.send('this is an secure server')
        });
        
        server.listen(3001, () => {
            console.log('listening on 3001')
        });
        
        

