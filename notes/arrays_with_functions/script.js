/**
 * Working with array methods
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Instance_methods
 */

let backpackContents = ["piggy", "headlamp", "pen"];

console.log(backpackContents.join(", ")); // join works much like it does in Python, outputting without ", " returns a comma seperated list with no spaces 

backpackContents.push("Pencil", 5) // .push() can be used to add new items to the end of an array, this is safer than the array.length = "new" method since it reduces the risk of the array being overloaded 

console.log(backpackContents)

backpackContents.unshift("Pencil") // to add items to the front of the array use .unshift()

console.log(backpackContents)

backpackContents.pop("Pencil") // Removes last elements from the array 
 
backpackContents.forEach(function (item) { // the forEach method can be used to loop over items in an array
    item = `<li>${item}</li>`; // in this example forEach is used to loop and add <li> to each item
    console.log(item);
});

 
let longItems = backpackContents.find(function (item) {
   if (item.length >= 5) {
     return item;
   }
});


 console.log("longItems:", longItems);
