/*
Type annotations for functions - Code we add to tell Typescript what type of arguments a function will receive and what type of values it will return.

Type inference for functions - Typescript tries to figure out what type of value a function will return.

*/

//Infers return type : const add: (a: number, b: number) => number
//No type inference for arguments but will infer return type
const add = (a: number, b: number) => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function(a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
};

//We annotate a function with never only when we expect a function not to return anything
const throwError = (message: string): never => {
    throw new Error(message);
};

const throwErrorWithVoid = (message: string): void => {
  if (!message) {
    throw new Error(message);
  }
};

const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
};

//ES2015 sytax with object destructing 
const logWeather = ({date, weather}: { date: Date; weather: string;}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);
