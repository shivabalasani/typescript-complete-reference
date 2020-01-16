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

*/
