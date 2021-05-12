
// Type alias (representa o apelido)
type Uid = number | string // o | representa o Union

function logDetails(uid: Uid, item: string) {
  console.log(`A product with ${uid} has a title as ${item}`)
}

logDetails(123, "TV")
logDetails("123", "TV")

type Platform = 'Windows' | 'Linux' | 'MacOS'

type teste = Uid & Platform & { content: string }

// use o type alias é utilizado na maioria das vezes
// melhor em react / para props
// CONSISTÊNCIA!