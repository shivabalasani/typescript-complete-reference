//Tuple - Array-like structure where each element represents some poperty of a record

const drinks = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

const pepsiWithoutTypeAlias: [string, boolean, number] = ['brown', true, 40];

// Type alias
type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

//Tuples are hard to understand what the values represent
const carSpecs: [number, number] = [400, 3354];

const carStats = {
  horsepower: 400,
  weight: 3354
};
