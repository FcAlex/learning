import http from 'http'

http.createServer((req, res) => {
  res.end("<h1>Hello World</h1>")
}).listen(3000)

console.log("Running...")