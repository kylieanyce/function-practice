//---------------- Best In Show -----------------------------------

const favoriteBreed = (dogtype) => {
    if (dogtype === "schnauzer") {
        return " my favorite dog breed is " + dogtype
    } else if (dogtype === "meow") {
        return "I like cats"
    }
}
console.log("when it comes to pets" + favoriteBreed("meow"))


//-------------------- Addition ------------------------------------

let add = (num, another, ber) => {
    let digit = (another + num + ber)
    console.log(digit)
}
add(5, 17, 6)


//---------------- Self-Driving Cars --------------------------------

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


//------------------- Evens or Odds ----------------------------------

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


//---------------- Double Functions ----------------------------------

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
const filter = (anArray) => {
    for (let i = 0; i < anArray.length; i++) {
        if (!anArray[i].startsWith("k")) {
            no.push(anArray[i])
        }
    }
    return no
}
/*
    Function to build a single string from the array
    (Google 'javascript combine all items in array' to get started)
 */
const build = (anotherArray) => {
    return anotherArray.join(' ')
}
/*
    Invoke the filtering function and store its return value
 */
const returnValue = filter(words)
/*
    Invoke the string building function, and pass the
    return value of the previous function as an argument
*/
console.log(build(returnValue))


//------------------- Piano Function ----------------------------------

const hooked = (num) => {
    const fishing = Math.random() * num
    if (fishing > 2) {
        console.log(fishing)
        console.log("got one!")
        return true
    } else {
        console.log(fishing)
        console.log("nope")
        return false
    }
}
hooked(3)


//--------------------- Fast Food --------------------------------------

const meal = []

const Order = (orderOne, orderTwo, orderThree, orderFour) => {
    meal.push({sandwich: orderOne, side: orderTwo, drink: orderThree, dessert: orderFour })
    console.log(meal)
}

Order("ultimate Slammer", "Potato wedges", "Mr. Pepper", "Fudge Sundae")


//--------------------- Chores ------------------------------------------

const person = {
    firstName: "Terry",
    lastName: "Feinstein"
}

const one = person => `${person.firstName} ${person.lastName} went to the DMV`
const two = person => `${person.firstName} ${person.lastName} got a haircut`
const three = person => `${person.firstName} ${person.lastName} had their oil changed`
const four = person => `${person.firstName} ${person.lastName} cleaned the kitchen`
const five = person => `${person.firstName} ${person.lastName} made some food`
const six = person => `${person.firstName} ${person.lastName} swept the porch`

const answer = three(person)
console.log(answer)

const monday = "monday"
const chore = {
    one: "mowed the lawn",
    two: "got a haircut",
    three: "made some food"
}

const dayPlanner = (chore, person, day) => {
    return `${chore(person)} on ${day}.`
}

console.log(dayPlanner(three, person, monday))