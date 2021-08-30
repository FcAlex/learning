import { mealCompositeProtocol } from '../interfaces/meal-composite-protocol';

export abstract class AbstractMeal implements mealCompositeProtocol {
  constructor(private name: string, private price: number) {}

  getPrice(): number {
    return this.price;
  }
}
