import { User } from '../interfaces/user';

export class DataBaseClassic {
  private static _instance: DataBaseClassic | null = null;
  private users: User[] = [];

  private constructor() {}

  public static get instance(): DataBaseClassic {
    if (DataBaseClassic._instance === null)
      DataBaseClassic._instance = new DataBaseClassic();

    return DataBaseClassic._instance;
  }

  public add(user: User): void {
    this.users.push(user);
  }

  public remove(index: number): void {
    this.users.splice(index, 1);
  }

  public show(): void {
    for (const user of this.users) {
      console.log(user);
    }
  }
}
