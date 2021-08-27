interface Game {
  readonly title: string
  description: string
  genre: string
  platform?: string[]
  getSimilars?: (title: string) => void
}

const residentEvil8: Game = {
  title: 'Resident Evil Vilage',
  description: 'The best game of world',
  genre: 'Action',
  platform: ['PS4', 'PS5', 'PC'],
  getSimilars: (title: string) => {
    console.log('Resident Evil 7', 'The last of us')
  }
}

interface DLC extends Game {
  content: string[]
}

const leftbehind: DLC = {
  title: 'The last of us: Left Behind',
  description: 'The best game of world',
  genre: 'Action',
  platform: ['PS4', 'PS5', 'PC'],
  content: ['3 hours story']
}

interface GameCollection extends Game, DLC { }

class CreateGame implements Game {
  title: string
  description: string
  genre: string

  constructor(title: string, description: string, genre: string) {
    this.title = title
    this.description = description
    this.genre = genre
  }
}

interface Name { a: string }
interface Name { b: string }

const $: Name = {
  a: 'alex',
  b: 'sousa'
}

// quando tiver criando libs, prefira interfaces, porque são mais extensiveis
// prefira interfaces quando estiver criando objetos/classes



// não é possível definir tuplas com interfaces