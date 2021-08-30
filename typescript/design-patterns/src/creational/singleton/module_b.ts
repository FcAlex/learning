import { DataBaseClassic } from './db/my-db-classic';
import './module_a';

const dataBaseClassic = DataBaseClassic.instance;

dataBaseClassic.add({ name: 'André', age: 21 });
dataBaseClassic.add({ name: 'Felipe', age: 28 });
dataBaseClassic.add({ name: 'Fernando', age: 31 });
dataBaseClassic.show();
