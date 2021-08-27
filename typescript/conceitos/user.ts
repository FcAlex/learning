type AccountInfo = {
  id: number,
  name: string,
  email?: string // O ? é opcional
}

const account: AccountInfo = {
  id: 13456,
  name: "Alex",
  email: "alex@example.com"
}

type CharInfo = {
  id: number,
  nickname: string,
  level: number
}

const char: CharInfo = {
  id: 123,
  nickname: "fcalex",
  level: 10
}

// intersection
type PlayerInfo = AccountInfo & CharInfo // (O & agrupa os tipos passados)

const player: PlayerInfo = {
  id: 123,
  name: 'Alex',
  email: 'fcalex@example.com',
  nickname: 'fcoalex',
  level: 100
}