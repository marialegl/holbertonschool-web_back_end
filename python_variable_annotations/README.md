## Python - Variable Annotations


### Type Annotations in Python 3

**Type annotations** allow you to specify the expected data types for variables, function arguments, and return values in your Python code. This functionality was introduced in Python 3.5 and improves code clarity, facilitates debugging, and enables static type checking with tools like MyPy.

Here's an example of a function with type annotations:

```python
def add_numbers(a: int, b: int) -> int:
    return a + b
```

In this case, the parameters `a` and `b` are annotated as integers (`int`), and the function is expected to return an integer. Although type annotations do not enforce the type at runtime, they help developers better understand the code and allow static analysis tools, such as MyPy, to validate types.

### Duck Typing

**Duck typing** is a concept in Python where the type of an object is not checked; instead, it is relied upon to have the necessary methods or attributes to perform an action. The phrase "If it walks like a duck and quacks like a duck, then it must be a duck" illustrates this concept.

For example:

```python
class Duck:
    def quack(self):
        print("Quack")

class Person:
    def quack(self):
        print("Duck imitation")

def make_quack(entity):
    entity.quack()

duck = Duck()
person = Person()

make_quack(duck)  # Quack
make_quack(person)  # Duck imitation
```

Here, although `person` is not a duck, it can "quack," so it can be used in the `make_quack` function.

### Code Validation with MyPy

**MyPy** is a static type checker used to ensure that your code adheres to type annotations correctly. This is useful for catching errors before they occur at runtime.

Example:

```python
def divide(a: int, b: int) -> float:
    return a / b
```

To validate this code with MyPy, you would run:

```bash
mypy file.py
```

If there are inconsistencies between type annotations and the actual types used, MyPy will indicate them.

### Additional Requirements

- Use text editors like `vi`, `vim`, or `emacs`.
- All files must be interpreted with Python 3.9 on Ubuntu 20.04 LTS.
- Code style should follow `pycodestyle` (version 2.5).
- All modules, classes, and functions must have clear documentation explaining their purpose.