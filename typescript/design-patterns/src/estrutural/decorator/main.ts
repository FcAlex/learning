import { ProductCustomizationDecorator } from './product/product-customization-decorator';
import { ProductStampDecorator } from './product/product-stamp-decorator';
import { TShirt } from './product/t-shirt';

const camiseta = new TShirt();
const tShirtWithStamp = new ProductStampDecorator(camiseta);
const customizedTShirt = new ProductCustomizationDecorator(camiseta);

console.log(camiseta.getName(), ': R$', camiseta.getPrice());
console.log(tShirtWithStamp.getName(), ': R$', tShirtWithStamp.getPrice());
console.log(customizedTShirt.getName(), ': R$', customizedTShirt.getPrice());
