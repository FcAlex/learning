import { ProductDecorator } from './product-decorator';

export class ProductCustomizationDecorator extends ProductDecorator {
  getPrice(): number {
    return this.product.getPrice() + 50;
  }

  getName(): string {
    return '[Customizado] ' + this.product.getName();
  }
}
