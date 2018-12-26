const add = (a, b) => {
    return a + b;
}

console.log(add(5, 1));

const user = { 
    name: "Andrew",
    cities: ["Montreal", "Toronto", "Ottawa"],
    printPlacesLived() {        
        return this.cities.map((city) => this.name + " has lived in  " + city + "!");
    }
}

console.log(user.printPlacesLived())

const multiplier = {
    numbers: [10, 20, 30, 40],
    multiplier: 2,
    multiply() {
        return this.numbers.map((number) => number  * this.multiplier)
    }
}

console.log(multiplier.multiply())