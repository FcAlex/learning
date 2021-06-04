import express from 'express'
const app = express()

app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.get("/ola/:nome",  (req, res) => { // com params
  const { nome } = req.params
  res.send(`<h1>Hi ${nome}!</h1>`)
})

app.get('/blog/:artigo?', (req, res) => { // com params opcional
  const { artigo } = req.params

  if(artigo) res.send(`<h2>Artigo: ${artigo}</h2>`)
  else res.send("Welcome to my Blog!")
  
})

app.get("/canal/youtube", (req, res) => {
  const canal = req.query["canal"]
  res.send(canal ?? '')
})

app.listen(3000, (error) => {
  if(error) console.log("Ocorreu um erro")
  else console.log("Servidor Iniciado com sucesso!")
})