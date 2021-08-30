import { MealCompositeProtocol } from '../interfaces/meal-composite-protocol';

export class MealBox implements MealCompositeProtocol {
  private readonly _children: MealCompositeProtocol[] = [];

  public getPrice(): number {
    return this._children.reduce((sum, meal) => sum + meal.getPrice(), 0);
  }

  public add(...meal: MealCompositeProtocol[]): void {
    meal.forEach((item) => this._children.push(item));
  }
}
