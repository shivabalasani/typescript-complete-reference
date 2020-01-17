// Interface - Creates a new type, describing the property names and value types of an object.

const oldHonda = {
  name: 'honda',
  year: 2000,
  broken: true
};

//Interfaces can be used to shorten the below annotation of type vehicle
const printVehicle = (vehicle: {
  name: string;
  year: number;
  broken: boolean;
}): void => {
  console.log(`Name : ${vehicle.name}`);
  console.log(`Year : ${vehicle.year}`);
  console.log(`Broken? : ${vehicle.broken}`);
  console.log('------------------------------');
};

printVehicle(oldHonda);

interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}

//Shortened version using interface
const printVehicleWithInterface = (vehicle: Vehicle): void => {
  console.log(`Name : ${vehicle.name}`);
  console.log(`Year : ${vehicle.year}`);
  console.log(`Broken? : ${vehicle.broken}`);
  console.log('------------------------------');
};

printVehicleWithInterface(oldHonda);
//----------------------------------------------------------------------------
/*
 General Strategy for Resuable code in TS 
  - Create functions that accept arguments that are typed with interfaces.
  - Objects/classes can decide to 'implement' a given interface to work with a function.
*/

interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  }
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);
