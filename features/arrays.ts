//Typed Arrays : Arrays where each element is some consistent type of value

const carEmpty = []; //infers arrays as const carEmpty: any[]
const carMakers = ['ford', 'toyota', 'chevy']; //infers array as const carMakers: string[]
const dates = [new Date(), new Date()]; //infers array as const dates: Date[]

const carsByMake = [['f150'], ['corolla'], ['camaro']]; //infers two dimensional array as const carsByMake: string[][]
const carsByMakeEmpty: string[][] = [];

// 1) Helps with inference when extracting values
const car = carMakers[0]; //infers car as const car: string
const myCar = carMakers.pop(); // infers as const myCar: string

// 2) Prevents us from  adding incompatible values
//carMakers.push(100); //Argument of type '100' is not assignable to parameter of type 'string'.

// 3) We can get help with 'map','forEach','reduce' functions
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// 4) Flexible types - arrays can still contain multiple different types
const importantDates: (Date | string)[] = [];
importantDates.push('2030-10-10');
importantDates.push(new Date());
importantDates.push(undefined);
