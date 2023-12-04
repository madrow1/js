class Mouse {
    constructor ( 
        buttons,
        colour,
        brand,
    ) {
        this.buttons = buttons;
        this.colour = colour;
        this.brand = brand;
    }
}

class Keyboard {
    constructor (
        colour,
        keys,
        brand,
    ) {
        this.colour = colour;
        this.keys = keys;
        this.brand = brand;
    }
}

class Person {
    constructor (
        name,
        age,
        gender,
        dob
    ) {
        this.name = name;
        this.age = age;
        this.gender = gender;  
        this.dob = dob;      
    }
    personAge(){
        let now = new Date();
        let born = new Date(this.dob);
        let elapsed = now - born;
        let daysold = Math.floor(elapsed/(1000 * 3600 * 24))
        return daysold;
    }

}

export default Person;
