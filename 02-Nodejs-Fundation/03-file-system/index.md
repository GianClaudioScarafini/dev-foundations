# 03 — File System

## Why it matters

The file system is one of the main reasons to use Node on a server. Your app needs to read config files, write logs, process uploaded files, serve static assets. All of that goes through the `fs` module.

## Two styles: callbacks vs promises

```js
const fs = require('fs')           // callback style (original)
const fs = require('fs/promises')  // promise style (use this — it's cleaner)
```

## Reading files

```js
const fs = require('fs/promises')

// Read as a string
const content = await fs.readFile('./notes.txt', 'utf8')
console.log(content)

// Read as a Buffer (raw bytes — for images, binary files)
const buffer = await fs.readFile('./photo.jpg')
```

## Writing files

```js
// Overwrite (creates file if it doesn't exist)
await fs.writeFile('./output.txt', 'Hello, file!')

// Append (adds to end of file without overwriting)
await fs.appendFile('./log.txt', 'New log entry\n')
```

## Working with directories

```js
await fs.mkdir('./new-folder')                   // create directory
await fs.mkdir('./deep/nested/path', { recursive: true })  // create nested

const entries = await fs.readdir('./src')         // list contents
const stat = await fs.stat('./myfile.txt')        // file info (size, dates)

console.log(stat.isFile())        // true
console.log(stat.isDirectory())   // false
console.log(stat.size)            // bytes
```

## Handling errors

File operations fail — the file doesn't exist, wrong permissions, disk full. Always handle errors:

```js
try {
  const content = await fs.readFile('./missing.txt', 'utf8')
} catch (err) {
  if (err.code === 'ENOENT') {
    console.log('File not found')
  } else {
    throw err  // re-throw unexpected errors
  }
}
```

Common error codes:
- `ENOENT` — file or directory does not exist
- `EACCES` — permission denied
- `EEXIST` — file already exists

## Key questions to answer before coding
- What is the difference between `readFile` and `readFileSync`? When would you use each?
- What does `utf8` do in `readFile('./file.txt', 'utf8')`? What happens without it?
- What is `ENOENT`?
- Why is `fs/promises` preferred over the callback-style `fs`?

---

Go to `simple.js` when ready.
