import { ProductProtocol } from './product-protocol';

export class Smartphone implements ProductProtocol {
  private name = 'Samsumg S20';
  private price = 4_999;

  getPrice(): number {
    return this.price;
  }

  getName(): string {
    return this.name;
  }
}
