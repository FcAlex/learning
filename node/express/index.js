import express from 'express'
const app = express()

app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.get('/blog', (req, res) => {
  res.send("Welcome to my Blog!")
})

app.listen(3000, (error) => {
  if(error) console.log("Ocorreu um erro")
  else console.log("Servidor Iniciado com sucesso!")
})