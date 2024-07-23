# ES6 classes


## JavaScript: Classes, Methods, Static Methods, Inheritance, and Metaprogramming

### How to define a Class in JavaScript

In JavaScript, classes were introduced in ECMAScript 6 (ES6). You can define a class using the `class` keyword.

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
```

### How to add methods to a class in JavaScript

Methods are added within the body of the class. You can define them as regular functions.

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}
```

### Why and how to add a static method to a class in JavaScript

A static method belongs to the class itself, not to the instances of the class. It is used for utility functions that do not require access to instance data.

```javascript
class MathUtils {
  static sum(a, b) {
    return a + b;
  }
}

// Using the static method without creating an instance
const result = MathUtils.sum(3, 4);
console.log(result); // Output: 7
```

### How to extend a class from another in JavaScript

Inheritance is achieved using the `extends` keyword.

```javascript
class Employee extends Person {
  constructor(name, age, salary) {
    super(name, age);
    this.salary = salary;
  }

  getSalary() {
    return this.salary;
  }
}
```

### Metaprogramming and symbols in JavaScript

Metaprogramming involves writing code that manipulates the structure and behavior of other code. JavaScript offers some metaprogramming capabilities:

* **Symbols:** Unique values that can be used as object properties.
* **Proxies:** Allow interception of operations on objects.
* **Reflect API:** Provides functions to reflect the structure of objects.

```javascript
const mySymbol = Symbol('mySymbol');
const obj = {
  [mySymbol]: 'value'
};

console.log(obj[mySymbol]); // Output: 'value'
```

**Note:** Metaprogramming is an advanced topic and requires a deep understanding of the language.

**Would you like to delve deeper into a specific topic or do you have any particular questions?**
