const ogs = require('open-graph-scraper')
const express = require('express')
const server = express()

server.get('/', (req, res) => {
    const url = { url: `${req.query.url}`}
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header(
        'Access-Control-Allow-Headers',
        'Content-Type, Authorization, access_token'
      );
    res.header('Content-Type', 'application/json; charset=utf-8')
    ogs(url)
    .then(data => {
        const { error, result, response } = data
        res.send(result)
    })
    .catch(e =>{
        console.log(e)
        res.send(e)
    })
})

server.listen(3000, () => console.log('Start'))
