## Python - Async


The project you're working on is focused on asynchronous programming in Python, a powerful technique that allows for more efficient execution of tasks, especially those that involve I/O operations. Here's an overview of the key concepts:

### 1. **`async` and `await` Syntax**
   - **`async`**: This keyword is used to define a function as a coroutine, which can be paused and resumed during its execution. These functions are defined using `async def` instead of the usual `def`.
   - **`await`**: Inside an `async` function, `await` is used to pause the execution of the coroutine until the awaited task is complete. It can be used with coroutines, tasks, or futures.

   Example:
   ```python
   import asyncio

   async def say_hello():
       print("Hello")
       await asyncio.sleep(1)
       print("World")

   asyncio.run(say_hello())
   ```

### 2. **Executing an Async Program with `asyncio`**
   - `asyncio` is a Python module that provides tools to write asynchronous code using `async`/`await`.
   - To run an async function, you typically use `asyncio.run()`, which handles the event loop and runs the coroutine until it completes.

   Example:
   ```python
   async def main():
       print("Starting...")
       await asyncio.sleep(2)
       print("Finished!")

   asyncio.run(main())
   ```

### 3. **Running Concurrent Coroutines**
   - **Coroutines** can be run concurrently using `asyncio.gather()` or by creating multiple tasks.
   - This allows multiple asynchronous operations to run "simultaneously" (though they are actually interleaved by the event loop).

   Example:
   ```python
   async def task1():
       await asyncio.sleep(2)
       print("Task 1 complete")

   async def task2():
       await asyncio.sleep(1)
       print("Task 2 complete")

   async def main():
       await asyncio.gather(task1(), task2())

   asyncio.run(main())
   ```

### 4. **Creating `asyncio` Tasks**
   - An `asyncio` task is an object that wraps a coroutine and schedules it to run. You can create tasks using `asyncio.create_task()`.
   - This is useful when you want to start a coroutine but not wait for it to finish immediately.

   Example:
   ```python
   async def my_task():
       await asyncio.sleep(3)
       print("Task done!")

   async def main():
       task = asyncio.create_task(my_task())
       print("Task started...")
       await task

   asyncio.run(main())
   ```

### 5. **Using the `random` Module**
   - The `random` module is used to generate random numbers. `random.uniform(a, b)` returns a random floating-point number between `a` and `b`.
   - This can be useful in asynchronous programs to simulate varying delays or other randomized behaviors.

   Example:
   ```python
   import random

   async def random_delay_task():
       delay = random.uniform(1, 5)
       await asyncio.sleep(delay)
       print(f"Task delayed by {delay:.2f} seconds")

   asyncio.run(random_delay_task())
   ```

### Additional Requirements
- **Documentation**: Ensure all your modules and functions are well-documented.
- **Type Annotations**: All your functions and coroutines must include type annotations, which specify the expected types of arguments and return values.
- **Coding Standards**: Follow the `pycodestyle` guidelines for formatting your code, and ensure that your code is compatible with Python 3.7, as specified.

This project is a deep dive into asynchronous programming, which is essential for efficiently handling tasks like I/O-bound operations where waiting for responses can be done concurrently, improving overall performance.