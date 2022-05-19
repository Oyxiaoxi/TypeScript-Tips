export const fruitCounts = {
  apple: 1,
  pear: 4,
  lychee: 26
}

type SingleFruitCount = | { apple: number } | { pear: number } | { lychee: number } 
type FruitCounts = typeof fruitCounts
type NewSingleFruitCount = {
  [K in keyof FruitCounts]: {
    [K2 in K] : number
  }
}[keyof FruitCounts]

const SingleFruitCount: NewSingleFruitCount = {
  apple: 4,
  pear: 4,
  lychee: 28
}
