/**
 * Working with arrays
 * @link https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays
 */

let item = "flashlight";

const collection = ["Piggy", item, 5, true];

collection[2] = "new value" // items can be updated in an array the same as python by calling the array with the zero indexed position you would like up to in square brackets array[]

collection[collection.length] = "new item" // to add an item to a new last slot in an array you  can use array[array.length] = "new value" which tells js that the new item should be added in the array index = to the current length of the array

collection[9] = "test" // you can add an item to the array in a slot that is beyond the current length, this will create x number of empty slots between the current final index and the one you are adding 

console.log(collection);
