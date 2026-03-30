//what are the 7 primitive in JS? 


// string
// number
// undefined 
// boolean
// symbol (where i can leann them? )
// bigint (where i can leann them? )
// null ( for exaple there is the toilet papaer holder but not that toilert paper)
// undefined (for example there is not the toilet papaer holder)


// 2. Fix this without changing the console.log:
let r = "5"
console.log(parseInt(r) + 10) // should output 15, not "510"

// 3. Why does this happen? Add a comment explaining it:
console.log("// 3. Why does this happen? Add a comment explaining it:")
console.log((0.1 + 0.2).toFixed(1) == 0.3) // however I am not sure how to fix this. 
// there is a difference between binderty and deciimal computer use binary and therefoe the 0.1+0.2 is ueqully something that is slightly more then 0.3 is lik e 0.30000004


// 4. What's the difference? When would each be useful?
console.log("// 4. What's the difference? When would each be useful?")
console.log(null == undefined)  ////answer:  loos quelisty compare them if they have different type
console.log(null === undefined) // //answer: strict equality consider always type it they are different it will retun false 

// 5. Write a function that takes any value and returns
console.log("// 5. Write a function that takes any value and returns")
// its type as a string — but fixes the typeof null bug
//answer:  the documentation said "This is considered a bug, but one which cannot be fixed because it will break too many scripts."
function getType(value) {
  // your code
  return value === null ? "null" : typeof(value)
}

console.log(getType(null))

function foo() {}
console.log(foo())
console.log(typeof foo())