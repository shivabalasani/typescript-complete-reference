/*Type: Easy way to refer to the different properties and functions that a value has.

           Primitive Types - number, boolean, void, undefined, string, symbol, null  
          /  
Types ---
          \        
           Object Types - functions, arrays, classes, objects

Types are used by the typescript compiler to analyze our code for errors
---------------------------------------------------------------------------------------------------------------

Type Annotations - Code we add to tell Typescript what type of value a variable will refer to. We tell Typescript the type.
Type Inference - Typescript tries to figure out what type of value a variable refers to. Typescript guesses the type.

---------------------------------------------------------------------------------------------------------------
Type Inference : -
    const   color           =      'red';
variable Declaration            Variable Initialization

If declaration and initialization are on the same line, Typescript will figure out the type of 'color' for us.
---------------------------------------------------------------------------------------------------------------

Type Inference - When to use
    - Always

Type Annotations - When to use 
    - When a function returns the 'any' type and we need to clarify the value
    - When we declare a variable on one line then  initialize it later.
    - When we want a variable to have a type that can't be inferred.
---------------------------------------------------------------------------------------------------------------

Any Type - A type, just as 'string' or 'boolean' are
         - Meanst TS has no idea what this is - can't check for correct property references.
         - Avoid variables with 'any' at all costs

Abstract classes 
        - Can't be used to create an object directly.
        - Only used as a parent class
        - Can contain real implementation for some methods.
        - The implemented methods can refer to other methods that don't actually exists yet. 
            (we still have to provide name and types for the un-implemented methods)
        - Can make child classes promise to implement some other method.

Interfaces 
        - Sets up a contract between different classes.
        - Use when we have very different objects that we want to work together.
        - Promotes loose coupling.

Inheritance/Abstract Classes
        - Sets up a contract between different classes.
        - Use when we are trying to build up a definition of an object.
        - Strongly couples classes together.

Enums
    - Follows near identical syntax rules as normal objects.
    - Creates an object with the same keys and values when converted from TS to JS.
    - Primary goal is to signal to other engineers that these are all closely related values.
    - Use whenver we have a small fixed set of values that are all closely related and known at compile time.


Generics 
    - Like function arguments, but for types in class/function definitions.
    - Allows us to define the type of a property/argument/return value at a future point.
    - Used heavily when writing reusable code.

Inheritance
    - Charecterized by an is-a relationship between two classes.

Composition
    - Charecterized by an has-a relationship between two classes.

In Typescript, strings can be types
In JS (and therefore in TS), all object keys are strings.

Integration Issues :-
CONS 
    - Type definition files alone can't express what is going on in the JS world accurately(Example: BodyParser Middleware).
    - Type definition files provided to us aren't always accurate.
    - Inputs to a server (or any program with external inputs) are not guaranteed to exist, or be of the correct type.

PROS    
    - Addressing these type issues with Typescript can force us to write better code.

*/
