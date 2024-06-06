import { FoodCategory } from './food-category';

export interface FoodPrimitives {
  id: string;
  name: string;
  image: string;
  categories: FoodCategory[];
  preparationTime: number; //minutes
  recipe: string;
}

export class Food {
  id: string;
  name: string;
  image: string;
  categories: FoodCategory[];
  preparationTime: number; //minutes
  recipe: string;
  constructor(primitives: FoodPrimitives) {
    this.id = primitives.id;
    this.name = primitives.name;
    this.image = primitives.image;
    this.categories = primitives.categories;
    this.preparationTime = primitives.preparationTime;
    this.recipe = primitives.recipe;
  }
  static fromPrimitives(primitives: FoodPrimitives): Food {
    return new Food(primitives);
  }
  toPrimitives(): FoodPrimitives {
    return {
      id: this.id,
      image: this.image,
      name: this.name,
      categories: this.categories,
      preparationTime: this.preparationTime,
      recipe: this.recipe,
    };
  }
}
