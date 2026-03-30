// 1. What's the difference between these three?
//    When would you use each?

// in juavascipt there are 3 way to define a function 
// declared function: one is declare a function using the kwyword function that means that means you can call the function before. 
// store a function to a variable: is storing a unnamed function agasint the variable you can call the function only if you declare it before
// arrow function : similar to the expressed one  I 
function declared() {
    return "I am a function declaration"
}

const expressed = function() {
    return "I am a function expression"
}

const arrow = () => "I am an arrow function"

// 2. What does this output and why?
// 5
console.log(add(2, 3))

function add(a, b) {
    return a + b
}

// 3. What does this output and why?
// answer retunr an error the function is not declare question is there a way to say if there is an error keep loggin what is next?


const multiply = function(a, b) {
    return a * b
}

console.log(multiply(2, 3))
// 4. What does this output? Explain scope.
//answer: "local" --> the are 2 levels one outseide the fucntion and the other inside the function that means there are two variable that yes have the same name but
let name = "global"

function greet() {
    let name = "local"
    console.log(name)
}

greet() // local
console.log(name) // global

// 5. Fix this without moving the console.log:
function makeCounter() {
    let count = 0
    return function(){
        return count += 1 
    }
}

var counter = makeCounter()
console.log(counter()) //
console.log(counter()) //
console.log(counter()) //
var counter = makeCounter()
console.log(counter()) //
console.log(counter()) //
console.log(counter()) //