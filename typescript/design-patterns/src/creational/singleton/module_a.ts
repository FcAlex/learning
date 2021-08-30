import { DataBaseClassic } from './db/my-db-classic';

const dataBaseClassic = DataBaseClassic.instance;

dataBaseClassic.add({ name: 'Alex', age: 21 });
dataBaseClassic.add({ name: 'João', age: 28 });
dataBaseClassic.add({ name: 'Lucas', age: 31 });
dataBaseClassic.show();

export default dataBaseClassic;
