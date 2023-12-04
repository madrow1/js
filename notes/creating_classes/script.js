/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Person from "./backpack.js"; 


const rightNow = new Date()

const rowan = new Person(
    "Rowan",
    25,
    "NB",
    "09/01/1997"
)

console.log(rowan.personAge())