# ES6 data manipulation

Of course, here's the translation of the previous explanation into English:

### 1. Using `map`, `filter`, and `reduce` on arrays

These are higher-order functions in JavaScript that operate on arrays and are very useful for transforming, filtering, and reducing data in them.

- **`map`**: Used to transform each element of an array according to a provided function, returning a new array with the transformed elements. Example:

  ```javascript
  const numbers = [1, 2, 3, 4];
  const doubled = numbers.map(x => x * 2); // [2, 4, 6, 8]
  ```

- **`filter`**: Used to filter elements in an array based on a boolean condition defined in a function. It returns a new array with elements that satisfy the condition. Example:

  ```javascript
  const numbers = [1, 2, 3, 4];
  const evens = numbers.filter(x => x % 2 === 0); // [2, 4]
  ```

- **`reduce`**: Allows you to reduce an array to a single accumulated value by applying a function to each element of the array. It's useful for summing, counting, or performing any cumulative operation on the array elements. Example:

  ```javascript
  const numbers = [1, 2, 3, 4];
  const sum = numbers.reduce((acc, current) => acc + current, 0); // 10
  ```

### 2. Typed arrays

Typed arrays are a feature in JavaScript that provides a mechanism to handle binary data in a more structured and memory-efficient way. These arrays allow storing data of specific types such as 8-bit integers, 16-bit unsigned integers, 32-bit floats, etc. Some examples of typed arrays include `Int8Array`, `Uint8Array`, `Float32Array`, and others.

```javascript
// Creating a Float32Array with 4 elements
const floatArray = new Float32Array([1.1, 2.2, 3.3, 4.4]);
console.log(floatArray); // Float32Array [1.1, 2.2, 3.3, 4.4]
```

Typed arrays are useful in scenarios where direct manipulation of binary data is needed or where a more efficient memory representation is required.

### 3. Set, Map, and WeakMap data structures

- **Set**: A collection of unique values, meaning each value can only occur once in a Set. It allows efficient addition, deletion, and checking of element existence.

  ```javascript
  const mySet = new Set();
  mySet.add(1);
  mySet.add(2);
  mySet.add(2); // Not added because it already exists
  mySet.has(1); // true
  mySet.size; // 2
  ```

- **Map**: A data structure that associates unique keys with values. It's similar to an object but keys can be of any type, not just strings.

  ```javascript
  const myMap = new Map();
  const keyObj = {};
  myMap.set('keyString', 'value associated with "a string"');
  myMap.set(keyObj, 'value associated with keyObj');
  myMap.get(keyObj); // 'value associated with keyObj'
  ```

- **WeakMap**: Similar to Map but keys must be objects and are not referenced in the structure, meaning they do not prevent the key objects from being garbage collected if there are no other references to them outside the WeakMap.

  ```javascript
  let wm = new WeakMap();
  let element = document.querySelector(".element");
  wm.set(element, "data");
  wm.get(element); // "data"
  element.parentNode.removeChild(element);
  element = null; // element is removed from DOM and memory
  ```

These data structures (`Set`, `Map`, and `WeakMap`) provide efficient ways to manage collections of data with specific characteristics and behaviors tailored to different programming needs.