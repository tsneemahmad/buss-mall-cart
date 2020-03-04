//////////////you can find all the products here\\\\\\\\\\\\\\\\\

var names = [
    "bag.jpg",
    "banana.jpg",
    "bathroom.jpg",
    "boots.jpg",
    "breakfast.jpg",
    "bubblegum.jpg",
    "chair.jpg",
    "cthulhu.jpg",
    "dog-duck.jpg",
    "dragon.jpg",
    "pen.jpg",
    "pet-sweep.jpg",
    "scissors.jpg",
    "shark.jpg",
    "sweep.png",
    "tauntaun.jpg",
    "unicorn.jpg",
    "usb.gif",
    "water-can.jpg",
    "wine-glass.jpg"
];






/////////////////////////// create constructor function for the buss mall\\\\\\\\\\\\\\\\\\\\\\\\\

function BusMall(name, quantity) {

    this.name = name,
        this.quantity = quantity,
        this.imagepath = `img/${this.name}`,
        BusMall.all.push(this)

}
BusMall.all = [];



