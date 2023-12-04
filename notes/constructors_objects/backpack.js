class Backpack { 
    constructor(
        name,
        volume,
        colour,
        pocketNum,
        strapLengthL,
        strapLengthR,
        lidOpen
    ) {
        this.name = name;
        this.volume = volume;
        this.colour = colour;
        this.pocketNum = pocketNum;
        this.straplength = {
            left : strapLengthL,
            right : strapLengthR,
        };
    }
    toggleLid(lidStatus){
        this.lidOpen = lidStatus;
    }
    newStrapLength(lengthLeft,lengthRight) {
        this.straplength.left = lengthLeft;
        this.straplength.right = lengthRight;
    }

}

export default Backpack;