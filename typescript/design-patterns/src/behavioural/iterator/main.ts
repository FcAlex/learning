import { MyDataStructure } from './my-data-structure';
import { MyReverseIterator } from './my-reverse-iterator';

const dataStructure = new MyDataStructure();

dataStructure.addItem('A', 'B', 'C', 'D', 'E', 'F');
console.log(dataStructure);

const [a, b] = dataStructure;

console.log(a, b);
console.log();
const [c, ...rest] = dataStructure;
console.log(c, rest);
console.log();

dataStructure.resetIterator();
for (const data of dataStructure) {
  console.log(data);
}

dataStructure.changeIterator(new MyReverseIterator(dataStructure));

console.log();
for (const data of dataStructure) {
  console.log(data);
}
