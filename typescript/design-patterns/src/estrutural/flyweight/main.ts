import { deliveryContext } from './delivery/delivery-context';
import { DeliveryFactory } from './delivery/delivery-factory';

const factory = new DeliveryFactory();
deliveryContext(factory, 'Luiz', '20A', 'Av. brasil', 'SP');
deliveryContext(factory, 'Helena', '20A', 'Av. brasil', 'SP');
deliveryContext(factory, 'Pedro', '20A', 'Av. brasil', 'SP');
deliveryContext(factory, 'Alex', '19', 'Av. Coronel João', 'MG');
deliveryContext(factory, 'Alan', '48', 'Av. Coronel João', 'MG');
deliveryContext(factory, 'Felipe', '150', 'Av. Coronel João', 'MG');

console.log('\n', factory.getLocation());
