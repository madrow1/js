/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */


const addPack = function (currentPack) { // sets up a function to create template code for objects, many objects can be passed into a single function 
    const newArticle = document.createElement("article");
    newArticle.innerHTML = `
      <h1>${currentPack.name}</h1>
      <ul>
        <li>Volume: ${currentPack.volume}</li>
        <li>Color: ${currentPack.color}</li>
        <li>Number of pockets: ${currentPack.pocketNum}</li>
      </ul>
    `;
    return newArticle;
  };
  

const test_obj = {
    test: "test"
}


const append_to_main = function (test_obj) { 
    const newArticle = document.createElement("article");
    newArticle.innerHTML = `
    <h1>${test_obj.test}</h1>
    <ul> 
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
    `;
    return newArticle;
}

const newArticle = append_to_main(test_obj)
const main = document.querySelector("main")
main.append(append_to_main)