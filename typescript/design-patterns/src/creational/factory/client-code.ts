import { CarFactory } from './factories/car-factory';
import { randomNumbers } from './utils/random-numbers';

const carFactory = new CarFactory();
const customerNames = ['Ana', 'Joana', 'Helena', 'Alex'];

for (let i = 0; i < 10; i++) {
  const name = customerNames[randomNumbers(customerNames.length)];
  const newCar = carFactory.pickUp(name, `Novo carro - ${randomNumbers(100)}`);
  newCar.stop();
  console.log('----');
}
