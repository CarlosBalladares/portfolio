const express = require('express')
const app = express()
const path=require('path');
const port = process.env.PORT || 3000


//app.get('/', (req, res) => res.send('Hello World!'))

app.use('/',express.static(path.join(__dirname, 'build')) )

//app.get('/raytracer',express.static(path.join(__dirname, 'raytracer')) )

// app.use('/raytracer/', express.static(__dirname + 'demos/raytracer'));



app.listen(port, () => console.log(`Example app listening on port ${port}!`))