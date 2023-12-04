/**
 * Challenge: Build and modify an array
 * - 
 * - 
 * -  
 * - 
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */

let new_array = ["Case: NZXT","Colour: Black","GPU: RTX 2070","CPU: i7 6700K", "Fans: 6", "PSU: 650W", "RAM: 32G", "RGB = False"] // Build an array with 8 items

console.log(new_array)

new_array.pop(new_array.length) // Remove the last item

console.log(new_array)

new_array.unshift("RGB = False")

console.log(new_array) // Add the last item as the first item on the array

console.log(new_array.sort()) // Sort the items by alphabetical order

const found = new_array.find((item) => item === "Fans: 6")

console.log(found)

let remove = "Colour: Black"

new_array.splice(new_array.indexOf(remove), 1)

console.log(new_array)

