export interface Prototype {
  clone(): Prototype;
}

export class Person implements Prototype {
  public addresses: Address[] = [];

  constructor(public name: string, public age: number) {}

  clone(): Prototype {
    const newObj = new Person(this.name, this.age);
    newObj.addresses = this.addresses.map((item) => item.clone());
    return newObj;
  }

  addAddress(address: Address): void {
    this.addresses.push(address);
  }
}

export class Address implements Prototype {
  constructor(public street: string) {}

  clone(): Prototype {
    return new Address(this.street);
  }
}

const address1 = new Address('Av Dom Pedro II');
const person1 = new Person('Luiz', 30);
person1.addAddress(address1);
const person2 = person1.clone();

console.log(person1);
console.log(person2);
