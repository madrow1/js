// functions declarations // functions declared like this may be overwritten layer in the code 
function doMath(a,b){
    let c = a + b 
    return c 
}


// function expression, this creates an anonomous function, which means it cannot be overwritten 
const doMoreMath = function(a,b){
    let c = a + b 
    return c 
}

