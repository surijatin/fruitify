export interface FruitType {
  name: string
  id: number,
  family: string,
  order: string,
  genus: string,
  nutritions: {
    calories: number,
    fat: number,
    sugar: number,
    carbohydrates: number,
    protein: number
  }
}

export interface FruitJarItem extends FruitType {
  quantity: number
}

export type GroupType = 'family' | 'order' | 'genus' | 'none'
