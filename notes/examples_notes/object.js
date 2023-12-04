// Objects in JS work basically how they work in Python and C++

const bag = { 
    name: "bag", // these are object properties, they can be called using the same syntax as python objects i.e. bag.name() is = "bag", properties can only contain standard characters.
    volume: 35,
    color: "grey",
    strap_l: { // it is possible to have nested properties within an object
        right: 25,
        left: 25,
    },
    lidOpen: false,
    toggleLid: function(lidStatus){ // objects can contain functions, which can then be modified by the browser console
        this.lidOpen = lidStatus; // the "this" keyword can be used to reference the object in which it is called 
    },
    newStrapLength: function(lengthLeft,lengthRight) {
        this.strap_l.right = lengthLeft; // We can use functions within the object to modify object properties as we would in other languages 
        this.strap_l.left = lengthRight;
    },
};

console.log("Backpack object: ", bag)