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

const evenOrOdd = (num) => {
    if (num % 2 === 0) {
        console.log("Even")
    } else {
        console.log("Odd")
    }
}

const array = [34, 58, 0, 3, 897]

for (const one of array) {
    evenOrOdd(one)  
}


//---------------- Double Functions -------------------------------

const words = [
    "The", "killing", "complex", "houses",
    "married", "kittens", "and", "single",
    "soldiers", "and", "their", "kleptomaniacal",
    "families"
]

/*
    Function to filter out `k` words
    (Google 'javascript startswith' to get started)
 */

const no = []
for (let i = 0,  )
    if (words.startsWith("k",0)) {
        no.push(words)
}

/*
    Function to build a single string from the array
    (Google 'javascript combine all items in array' to get started)
 */


/*
    Invoke the filtering function and store its return value
 */


/*
    Invoke the string building function, and pass the
    return value of the previous function as an argument
*/


console.log()