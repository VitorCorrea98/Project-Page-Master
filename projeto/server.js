const express = require('express')
const app = express()
const bodyparser = require('body-parser')

app.use(bodyparser.urlencoded({extended: true}))

app.post('/checkout', (req, resp) => {
    console.log(req.body)
    console.log(req.query)
    resp.send("Checkout realizado com sucesso")
})

app.listen(3003, () => {
    console.log("Rodando na 3003 lisinho")
})