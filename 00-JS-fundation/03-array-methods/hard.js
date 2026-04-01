// ARRAY METHODS — Hard
// Implement methods from scratch, complex pipelines, real data problems

// ─────────────────────────────────────────────
// 1. Implement map using reduce
//    Write `myMap(arr, fn)` using only .reduce() — no .map() allowed
//    myMap([1, 2, 3], x => x * 2)  → [2, 4, 6]

// your code here


// ─────────────────────────────────────────────
// 2. Implement filter using reduce
//    Write `myFilter(arr, fn)` using only .reduce() — no .filter() allowed
//    myFilter([1, 2, 3, 4, 5], x => x % 2 === 0)  → [2, 4]

// your code here


// ─────────────────────────────────────────────
// 3. Flatten deeply nested array
//    Write `deepFlatten(arr)` without using .flat(Infinity)
//    deepFlatten([1, [2, [3, [4, [5]]]]]) → [1, 2, 3, 4, 5]

// your code here


// ─────────────────────────────────────────────
// 4. Zip two arrays
//    Write `zip(a, b)` that pairs elements by index.
//    zip([1, 2, 3], ["a", "b", "c"]) → [[1,"a"], [2,"b"], [3,"c"]]
//    If arrays have different lengths, stop at the shorter one.

// your code here


// ─────────────────────────────────────────────
// 5. Complex data pipeline
//    Given the sales data below, produce a report:
//    - Only include completed sales
//    - Group by rep name
//    - For each rep: total sales amount and number of deals
//    - Sort reps by total descending
//
//    Expected shape:
//    [
//      { rep: "Alice", total: 4500, deals: 2 },
//      { rep: "Bob",   total: 2200, deals: 1 },
//      ...
//    ]

const sales = [
  { rep: "Alice", amount: 2500, status: "completed" },
  { rep: "Bob",   amount: 2200, status: "completed" },
  { rep: "Alice", amount: 2000, status: "completed" },
  { rep: "Carol", amount: 1800, status: "pending"   },
  { rep: "Bob",   amount: 3100, status: "cancelled" },
  { rep: "Carol", amount: 950,  status: "completed" }
]

// your code here


// ─────────────────────────────────────────────
// 6. Sliding window average
//    Write `movingAverage(arr, windowSize)` that returns
//    an array of averages for each window.
//    movingAverage([1, 2, 3, 4, 5], 3) → [2, 3, 4]
//    (avg of [1,2,3]=2, [2,3,4]=3, [3,4,5]=4)

// your code here


// ─────────────────────────────────────────────
// 7. Transpose a matrix
//    Write `transpose(matrix)` that flips rows and columns.
//    transpose([[1,2,3],[4,5,6],[7,8,9]])
//    → [[1,4,7],[2,5,8],[3,6,9]]

// your code here


// ─────────────────────────────────────────────
// 8. Chunk array
//    Write `chunk(arr, size)` that splits arr into groups of `size`.
//    chunk([1,2,3,4,5,6,7], 3) → [[1,2,3],[4,5,6],[7]]
//    chunk([1,2,3,4], 2)       → [[1,2],[3,4]]

// your code here
