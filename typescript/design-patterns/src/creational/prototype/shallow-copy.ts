export interface Prototype {
  clone(): Prototype;
}

export class Person implements Prototype {
  public addresses: Address[] = [];

  constructor(public name: string, public age: number) {}

  clone(): Prototype {
    const newObj = Object.create(this);
    return newObj;
  }

  addAddress(address: Address): void {
    this.addresses.push(address);
  }
}

export class Address {
  constructor(public street: string) {}
}

const address1 = new Address('Av Dom Pedro II');
const person1 = new Person('Luiz', 30);
person1.addAddress(address1);
const person2 = person1.clone();

console.log(person1)
console.log(person1.addresses)