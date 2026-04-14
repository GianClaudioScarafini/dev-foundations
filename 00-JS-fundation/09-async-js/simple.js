// ASYNC JS — Simple
// Timers, basic promises, async/await fundamentals

// ─────────────────────────────────────────────
// 1. Predict the order
//    Before running this, write the order you think things log.
//    Then run it and check.


console.log("A")
setTimeout(() => console.log("B"), 0)
console.log("C")


// predicted order:
// ACB
// actual order:
//ACB


// ─────────────────────────────────────────────
// 2. Create a simple promise
//    Write `wait(ms)` that returns a promise resolving after `ms` milliseconds
//    Then use it to log "done" after 500ms


function wait(ms) {
  // return new Promise(...)
  return new Promise((resolve,reject) =>{
    setTimeout(()=>{
        resolve()
        reject("this is wrong");
    },ms)
  })
}

console.log("// 2. Create a simple promise")
wait(100).then(() => console.log("done!!!!!!!"))


// ─────────────────────────────────────────────
// 3. Promise resolve and reject
//    Write `divide(a, b)` that returns a Promise:
//    - Resolves with a / b
//    - Rejects with an Error if b === 0
//
//    divide(10, 2).then(console.log)          → 5
//    divide(10, 0).catch(err => console.log(err.message))  → "Division by zero"

// your code here
function devide(a,b){
  return new Promise((resolve,reject)=>{
    if(b===0){
      const err = new Error ("Devide by zero")
      reject(err)
    }else{
      resolve(a/b)
    }
  })
}

console.log("// 3. Promise resolve and reject")
devide(10,2).then((a) => {console.log(a)})
devide(10, 0).catch(err => console.log(err.message))

// ─────────────────────────────────────────────
// 4. async/await basics
//    Rewrite this .then() chain using async/await

function fakeRequest() {
  return new Promise(resolve => setTimeout(() => resolve({ name: "Alice" }), 300))
}

// .then() version (already written):
fakeRequest().then(data => console.log(data.name))

// your async/await version:
async function loadUser() {
  const result = await fakeRequest()
  // your code here
  console.log(result.name)
}

loadUser()

// ─────────────────────────────────────────────
// 5. Chain two promises
//    Step 1: fetch a user (returns { id: 1, name: "Alice" })
//    Step 2: fetch their score using the id (returns { userId: 1, score: 95 })
//    Log: "Alice scored 95"

function getUser() {
  return new Promise(resolve => setTimeout(() => resolve({ id: 1, name: "Alice" }), 100))
}

function getScore(userId) {
  return new Promise(resolve => setTimeout(() => resolve({ userId, score: 95 }), 100))
}

// your code here — chain with .then() OR async/await
async function mylog(){
  const myUser = await getUser()
  const scoreData = await getScore(myUser.id)
  
  console.log("// 5. Chain two promises")
  console.log(`${myUser.name} scored ${scoreData.score}`)
}
mylog()
// ─────────────────────────────────────────────
// 6. try/catch with async/await
//    This function randomly fails. Handle the error and log "Request failed: <message>"

function riskyRequest() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.5 ? resolve("success") : reject(new Error("server error"))
    }, 400)
  })
}

async function safeLoad() {
  try{
    const response = await riskyRequest()
    console.log("// 6. try/catch with async/await")
    console.log(response)
  }catch (error){
    console.log("// 6. try/catch with async/await")
    console.log(`Request failed: ${error.message}`)
  }
}

safeLoad()


// ─────────────────────────────────────────────
// 7. Understand: await is not blocking the whole program
//    Predict what logs and in what order, then verify.

async function fetchData() {
  console.log("fetching...")
  const result = await new Promise(resolve => setTimeout(() => resolve("data"), 300))
  console.log("got:", result)
}

fetchData()
console.log("after fetchData() call")

// predicted order:
"fetching..."
"after fetchData() call"
"got: data"

