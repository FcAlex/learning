import { DiscountStrategy } from './discount-strategy';
import { ECommerceProductProtocol } from './ecommerce-product-protocol';

export class ECommerceShoppingCart {
  private products: ECommerceProductProtocol[] = [];
  private discount: DiscountStrategy = new DiscountStrategy();

  set discountStrategy(discount: DiscountStrategy) {
    this.discount = discount;
  }

  addProduct(...products: ECommerceProductProtocol[]): void {
    products.forEach((product) => this.products.push(product));
  }

  getProducts(): ECommerceProductProtocol[] {
    return this.products;
  }

  getSubTotal(): number {
    return this.products.reduce((sum, product) => sum + product.price, 0);
  }

  getTotal(): number {
    return this.discount.getDiscount(this);
  }
}
