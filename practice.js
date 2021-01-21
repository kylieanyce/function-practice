//---------------- Best In Show -------------------------------

const favoriteBreed = (dogtype) => {
    if (dogtype === "schnauzer") {
        return " my favorite dog breed is " + dogtype
    } else if (dogtype === "meow") {
        return "I like cats"
    }
}
console.log("when it comes to pets" + favoriteBreed("meow"))


//-------------------- Addition ----------------------------------

let add = (num, another, ber) => {
    let digit = (another + num + ber)
    console.log(digit)
}
add(5, 17, 6)


//---------------- Self-Driving Cars -------------------------------

const go = (direction, speed) => {
    if (speed <= 75) {
        console.log("The car is moving " + direction + " at " + speed + " mph.")
    } else {
        console.log("The car is moving " + direction + " at " + speed + " mph. SLOW DOWN!")
    }
}
const northwest = "north-west"
const south = "south"
go(northwest, 52)
go(south, 89)


//---------------- Evens or Odds -------------------------------

