import { EnterpriseCustomerVehicleFactory } from './factories/enterprise-customer-vehicle-factory';
import { IndividualCustomerVehicleFactory } from './factories/individual-customer-vehicle-factory';

const enterpriseFactory = new EnterpriseCustomerVehicleFactory();
const individualFactory = new IndividualCustomerVehicleFactory();
const car1 = enterpriseFactory.createVehicle('Fusca', 'João LTDA');
const car2 = individualFactory.createVehicle('Celta', 'João');

car1.pickUp();
car2.pickUp();
