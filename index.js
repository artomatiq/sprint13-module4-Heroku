const express = require('express')

const server = express()

server.use(express.json())

server.use('/hello', (req, res) => {
    res.json('hello, there');
});

const port = process.env.PORT || 9000;

server.listen(port, ()=> {
    console.log(`server starter on ${port}`)
})