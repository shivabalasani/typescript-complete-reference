/*
Decorators 
    - Functions that can be used to modify/change/anything different properties/methods in the class
    - Not the same as Javascript decorators.
    - Used inside/on classes only.
    - Understanding the order in which decorators are ran are the key to understanding them.
    - Experimental.

Decorators on a property, method, accessor
    - First argument is the prototype of the object
    - Second argument is the key of the property/method/accessor on the object
    - Third argument is the property descriptor 
    - Decorators are applied when the code for this class is ran ( not when an instance is created)
*/
@classDecorator
class Boat {
  @testDecorator
  color: string = 'red';

  @testDecorator
  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  @logError('Something bad!')
  pilot(
    @parameterDecorator speed: string,
    @parameterDecorator generateWake: boolean
  ): void {
    if (speed === 'fast') {
      console.log('swish');
    } else {
      console.log('nothing');
    }
  }
}

function classDecorator(constructor: typeof Boat) {
  console.log(constructor);
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log(key, index);
}

function testDecorator(target: any, key: string) {
  console.log(target);
  console.log(key);
}

function logError(errorMessage: string) {
  return function(target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function() {
      try {
        method();
      } catch (e) {
        console.log(errorMessage);
      }
    };
  };
}
