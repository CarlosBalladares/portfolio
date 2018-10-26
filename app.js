const express = require('express')
const app = express()
const path=require('path');
const port = 8080

//app.get('/', (req, res) => res.send('Hello World!'))

app.use('/',express.static(path.join(__dirname, 'build')) )

app.listen(port, () => console.log(`Example app listening on port ${port}!`))