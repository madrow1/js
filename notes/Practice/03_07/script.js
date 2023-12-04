/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const keyboard= {
    keys: 62,
    brand: "Keycron",
    color: "grey",
    languages: {
        lan_1: "English",
        lan_2: "German",
    }
}

const mouse = { 
    keys: 5,
    brand: "Logitech",
    dpi: {
        min: 0,
        max: 10800,
    }
}

const updatepc = (update) => {
    let main = document.querySelector("main");
    main.innerHTML = markup(computer);
    console.info(update);
  };

const computer = { 
    case: "NZXT",   
    components: {
        GPU: "Nvidia",
        CPU: "Intel",
        RAM: 32,
    },
    power: false,
    power_status: function(pow_on_off) {
        this.power = pow_on_off;
    }
}

