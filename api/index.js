const express = require('express')
const routes = require('./Routes/index')

const app = express()
const port = 3000

routes(app)

app.listen(port, () => console.log(`servidor rodando na porta ${port}`))

module.exports = app