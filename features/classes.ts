//Class - Blueprint to create an object with some fields(values) and methods(functions) to represent a 'thing'.
/*
 Modifiers :-
  public - This method can be called any where, any time.
  private - This method can only be called by other methods in this class.
  protected - This method can be called by other methods in this class, or by other methods in child classes.

*/
class Vehicle {
  // color: string;
  // constructor(color: string) {
  //   this.color = color;
  // }

  //Below is equivalent to above three lines
  constructor(public color: string) {}

  //This can be called within this class and all subclasses of Vehicle
  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);
//vehicle.honk(); //Error: Property 'honk' is protected and only accessible within class 'Vehicle' and its subclasses.

console.log('------------------------------');

class CarClass extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  //this can be called only within this class
  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new CarClass(4, 'red');
car.startDrivingProcess();
