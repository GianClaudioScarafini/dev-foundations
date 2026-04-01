# 05 — HTTP Module

## Why learn this before Express?

Express is built on top of Node's built-in `http` module. Understanding what's underneath makes you a better Express developer — you'll know what `req` and `res` actually are.

## Creating a server

```js
const http = require('http')

const server = http.createServer((req, res) => {
  // req = IncomingMessage — the request from the client
  // res = ServerResponse — what you send back

  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello, World!')
})

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000')
})
```

## The request object (req)

```js
req.method    // 'GET', 'POST', 'PUT', 'DELETE'
req.url       // '/api/users?page=2'
req.headers   // { 'content-type': 'application/json', ... }
```

## The response object (res)

```js
res.statusCode = 404              // HTTP status code
res.setHeader('Content-Type', 'application/json')
res.write('chunk of data')        // stream data in parts
res.end('final data')             // must call this to finish the response
// OR just:
res.end(JSON.stringify({ error: 'not found' }))
```

## Reading request body

The body comes in as a stream — you must collect the chunks:

```js
let body = ''
req.on('data', chunk => { body += chunk.toString() })
req.on('end', () => {
  const data = JSON.parse(body)
  // now you have the parsed body
})
```

## Basic routing

```js
const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    res.end('Home page')
  } else if (req.method === 'GET' && req.url === '/about') {
    res.end('About page')
  } else {
    res.statusCode = 404
    res.end('Not found')
  }
})
```

## Key questions to answer before coding
- What does `res.end()` do? What happens if you forget to call it?
- How is a body different from headers? Which arrives first?
- Why do you have to collect body chunks instead of just reading `req.body`?
- What HTTP status code means "resource created successfully"?

---

Go to `simple.js` when ready.
