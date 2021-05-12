// types

//boolean

let isOpen: boolean

isOpen = true
// isOpen = "true" // error

//string

let message: string

message = "Hey man"
message = 'Hello World!'
message = `It's Ok? ${isOpen}`

// number (int, float, hexadecimal, binario)

let number: number

number = 5
number = 5.5
number = 0xff0

// array

let items: number[]
items = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// items = ["Hey"] // Error

let total: Array<string> //usando generics
total = ["Hello", "World", "!"]

// tuple
let tuple: [number, string]
tuple = [20, 'age']

// enum
enum Colors {
  white = '#fff',
  black = '#000',
  red = '#f00'
}

// any (não recomendado utilizar)
let anything: any
anything = "Hey"
anything = true
anything = 15

// void
function logger(): void {
  console.log("Hi!")
}

// null/undefined
type Bla = string | undefined

// never (indica que uma função nunca deve retornar algo)
function error(): never {
  throw new Error("error")
}

// object (qualquer coisa diferente dos apresentados)


// No typescript possui inferência de tipos, logo não é necessário nesses casos apresentados declarar o tipo
