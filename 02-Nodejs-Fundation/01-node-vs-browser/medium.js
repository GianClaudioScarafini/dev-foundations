// 01 — Node vs Browser — Medium
// Goal: use process and Node globals in realistic scenarios
// Run with: node medium.js

// ─────────────────────────────────────────────
// 1. Build a simple CLI tool
//    This script should work like a calculator from the terminal.
//    Usage: node medium.js 10 + 5
//           node medium.js 20 / 4
//           node medium.js 7 * 3
//
//    Read three CLI arguments: num1, operator, num2
//    Perform the operation and log the result.
//    Handle +, -, *, /
//    If the operator is unknown, log "Unknown operator" and exit with code 1
//    If the user passes the wrong number of args, log usage instructions.
//
//    Tip: process.argv values are strings — remember to convert numbers.

// your code here
console.log("// 1. Build a simple CLI tool")
var passedArg = process.argv.slice(2)
function calculator () {

  if(passedArg.length < 3){
    console.log("you did not add all the arguments")
  }
  else if(['+', '-', '*', '/'].includes(passedArg[1])){
    firstVal = Number(passedArg[0])
    secondVal = Number(passedArg[2])
    switch(passedArg[1]){
      case "+":
        console.log(firstVal + secondVal)
        break
      case "-":
        console.log(firstVal - secondVal)
        break
      case "*":
        console.log(firstVal * secondVal)
        break
      case "/":
        console.log(firstVal / secondVal)
        break
    }
  }else{
    console.log("Unknown operator")
  }}
calculator()

// ─────────────────────────────────────────────
// 2. Environment detection
//    Write a function getEnvironment() that returns the current environment.
//    Check process.env.NODE_ENV:
//    - If it equals 'production'  → return 'production'
//    - If it equals 'test'        → return 'test'
//    - Anything else (or missing) → return 'development'
//
//    Then log a different startup message depending on the environment:
//    - development  → "Dev server starting — hot reload enabled"
//    - test         → "Running in test mode — DB will be reset"
//    - production   → "Production mode — errors will be logged to file"
//
//    Test it by running:
//    node medium.js
//    NODE_ENV=production node medium.js
//    NODE_ENV=test node medium.js

console.log("// 2. Environment detection")
function getEnvironment() {
  // your code here
  if(process.env.NODE_ENV == "production"){
    console.log('production')
  }else if(process.env.NODE_ENV == "test"){
    console.log('test')
  }else{
    console.log('development')
  }
}
getEnvironment()
// your startup message logic here


// ─────────────────────────────────────────────
// 3. Process uptime tracker
//    Node exposes process.uptime() — seconds the process has been running.
//    Write code that:
//    - Logs "Server started at: <current time as ISO string>"
//    - Every 2 seconds, logs "Uptime: X seconds"
//    - After 8 seconds, logs "Shutting down gracefully" and exits with code 0
//
//    Use setInterval and setTimeout. You are NOT allowed to use a counter variable.
//    Read the actual uptime from process.uptime() on each tick.

// your code here
console.log("// 3. Process uptime tracker")


//sudocode 
// start the settimeout (myfunction, delay)
//myfunction will have process.uptime() using Math.flor that lot "uptine: x second" (counter)
// after 8 second this will terminate ( i will use myfuntion to exit)
function processUptimeTracker(){
  const start = new Date().toISOString();
  const stop = 8000;
  console.log(`Server started at: ${start}`)

  const interval = setInterval(()=>{
    const  time = process.uptime()
    console.log(`Uptime: ${Math.floor(time)} seconds`)
  },2000);

  setTimeout(() => {
    clearInterval(interval);
    console.log("Shutting down gracefully")
    process.exit(0);
    }, stop)
}

processUptimeTracker()