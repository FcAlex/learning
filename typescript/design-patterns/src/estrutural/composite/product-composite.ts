export abstract class ProductComponent {
  abstract getPrice(): number;

  // essas função não são necessárias nesse caso
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  add(...products: ProductComponent[]): void {}
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  remove(product: ProductComponent): void {}
}

export class ProductLeaf extends ProductComponent {
  constructor(public name: string, public price: number) {
    super();
  }

  getPrice(): number {
    return this.price;
  }
}

export class ProductComposed extends ProductComponent {
  private children: ProductComponent[] = [];

  add(...products: ProductComponent[]): void {
    products.forEach((product) => this.children.push(product));
  }

  remove(product: ProductComponent): void {
    const productIndex = this.children.indexOf(product);
    if (productIndex !== -1) this.children.splice(productIndex, 1);
  }

  getPrice(): number {
    return this.children.reduce((sum, child) => sum + child.getPrice(), 0);
  }
}

const pen = new ProductLeaf('Bic Preta', 1);
const smartphone = new ProductLeaf('Samsumg S20', 3_500);
const tShirt = new ProductLeaf('Camiseta', 40);
const productBox = new ProductComposed();
productBox.add(pen, smartphone, tShirt);
console.log(productBox);
console.log(productBox.getPrice());

const tablet = new ProductLeaf('Tablet', 2_000);
const kindle = new ProductLeaf('Kindle 10º', 350);
const anotherProductBox = new ProductComposed();
anotherProductBox.add(tablet, kindle);
productBox.add(anotherProductBox);

console.log(productBox);
console.log(productBox.getPrice());
