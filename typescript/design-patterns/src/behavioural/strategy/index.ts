import { DefaultDiscount } from './shopping-cart/default-discount';
import { ECommerceShoppingCart } from './shopping-cart/ecommerce-shopping-cart';
import { NewDiscount } from './shopping-cart/new-discount';

const shoppingCart = new ECommerceShoppingCart();
//shoppingCart.discountStrategy = new DefaultDiscount();
shoppingCart.discountStrategy = new NewDiscount();
shoppingCart.addProduct({ name: 'Produto', price: 50 });
shoppingCart.addProduct({ name: 'Produto', price: 50 });
shoppingCart.addProduct({ name: 'Produto', price: 50 });
console.log(shoppingCart.getSubTotal());
console.log(shoppingCart.getTotal());
