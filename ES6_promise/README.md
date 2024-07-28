# ES6_promise

Sure! Let's break down each of these topics related to JavaScript promises, error handling, and asynchronous functions.

### **1. Promises: How, Why, and What**

**What is a Promise?**
A Promise is an object representing the eventual completion or failure of an asynchronous operation. It's a way to handle asynchronous operations in a more manageable and readable way compared to traditional callback-based approaches.

**How Does a Promise Work?**
A Promise has three states:
1. **Pending**: The initial state, neither fulfilled nor rejected.
2. **Fulfilled**: The operation completed successfully.
3. **Rejected**: The operation failed.

**Why Use Promises?**
Promises provide a cleaner and more manageable way to handle asynchronous code. They help avoid callback hell (nested callbacks) and allow chaining operations.

### **2. Using `then`, `resolve`, and `catch` Methods**

**Creating a Promise:**
You create a Promise using the `Promise` constructor:

```javascript
let myPromise = new Promise((resolve, reject) => {
    // Do some async operation
    let success = true; // Simulating an outcome

    if (success) {
        resolve("Operation was successful!");
    } else {
        reject("Operation failed.");
    }
});
```

**`then` Method:**
The `then` method is used to specify what should happen when the Promise is fulfilled:

```javascript
myPromise.then((result) => {
    console.log(result); // "Operation was successful!"
}).catch((error) => {
    console.log(error); // In case of error
});
```

**`resolve` Method:**
The `resolve` function is used inside the Promise constructor to mark it as fulfilled and provide a result.

**`catch` Method:**
The `catch` method is used to handle errors (rejections) from the Promise:

```javascript
myPromise.catch((error) => {
    console.log(error); // Handles any error
});
```

### **3. Every Method of the Promise Object**

**`Promise.all`**:
Used to run multiple promises in parallel and wait for all of them to complete.

```javascript
Promise.all([promise1, promise2]).then((results) => {
    console.log(results); // Array of results
}).catch((error) => {
    console.log(error); // Handles any error
});
```

**`Promise.allSettled`**:
Waits for all promises to settle (either fulfilled or rejected), and returns an array of objects describing the outcome of each promise.

```javascript
Promise.allSettled([promise1, promise2]).then((results) => {
    results.forEach((result) => {
        if (result.status === 'fulfilled') {
            console.log(result.value);
        } else {
            console.log(result.reason);
        }
    });
});
```

**`Promise.any`**:
Takes an iterable of Promise objects and, as soon as one of the promises in the iterable fulfills, returns a single promise that resolves with the value from that promise. If no promises fulfill (only rejections), it returns a promise that rejects with an `AggregateError`.

```javascript
Promise.any([promise1, promise2]).then((result) => {
    console.log(result); // Value of the first fulfilled promise
}).catch((error) => {
    console.log(error); // All promises were rejected
});
```

**`Promise.race`**:
Returns a promise that resolves or rejects as soon as one of the promises in the iterable resolves or rejects.

```javascript
Promise.race([promise1, promise2]).then((result) => {
    console.log(result); // Result of the first promise that settles
}).catch((error) => {
    console.log(error); // Error of the first promise that rejects
});
```

**`Promise.resolve`**:
Returns a promise that is resolved with a given value.

```javascript
Promise.resolve("Immediate Value").then((value) => {
    console.log(value); // "Immediate Value"
});
```

**`Promise.reject`**:
Returns a promise that is rejected with a given reason.

```javascript
Promise.reject("Immediate Error").catch((error) => {
    console.log(error); // "Immediate Error"
});
```

### **4. Throw / Try**

**Throwing Errors:**
You can throw errors in synchronous code using the `throw` statement. This will create an exception that can be caught with a `try...catch` block.

```javascript
function riskyFunction() {
    throw new Error("Something went wrong!");
}

try {
    riskyFunction();
} catch (error) {
    console.error(error); // "Something went wrong!"
}
```

**Error Handling with Promises:**
To handle errors in Promises, use the `catch` method or provide a rejection handler in the `then` method.

```javascript
myPromise.then((result) => {
    console.log(result);
}).catch((error) => {
    console.error(error); // Handles the error
});
```

### **5. The `await` Operator**

The `await` operator is used inside `async` functions to wait for a Promise to resolve or reject. It makes asynchronous code look and behave more like synchronous code.

```javascript
async function fetchData() {
    try {
        let response = await fetch('https://api.example.com/data');
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error); // Handles any error
    }
}
```

### **6. Using an `async` Function**

An `async` function is a function declared with the `async` keyword. It implicitly returns a Promise, and the `await` operator can be used inside it.

**Basic Structure:**

```javascript
async function myAsyncFunction() {
    return "Hello, world!";
}

myAsyncFunction().then((message) => {
    console.log(message); // "Hello, world!"
});
```

**Handling Errors in Async Functions:**

```javascript
async function myAsyncFunction() {
    try {
        let result = await someAsyncOperation();
        console.log(result);
    } catch (error) {
        console.error(error); // Handles any error
    }
}
```