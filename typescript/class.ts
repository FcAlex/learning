// considere todos os conceitos de OO

abstract class UserAccount {
  public name: string
  protected age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  logDetails() {
    console.log(`The player ${this.name} is ${this.age} years old`)
  }
}

// const alex = new UserAccount("Alex", 21) // Error (Classe abstrata)
// console.log(alex.age)
// console.log(alex.name)

// alex.logDetails()

class CharAccount extends UserAccount {
  private nickname: string
  readonly level: number

  constructor(name: string, age: number, nickname: string, level: number) {
    super(name, age)
    this.nickname = nickname
    this.level = level
  }

  logCharDetails() {
    console.log(`The player ${this.name} has the char ${this.nickname} at level ${this.level}`)
  }

  get getLevel() {
    console.log('Get...')
    return this.level
  }

  set setAge(age: number) {
    this.age = age
  }
}

const alex2 = new CharAccount("Alex", 20, "fcalex", 110)
// alex2.nickname = 'joao' // Error
// console.log(alex2)
// alex2.logDetails()

console.log(alex2.getLevel)