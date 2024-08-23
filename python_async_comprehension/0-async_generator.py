#!/usr/bin/env python3


import random
import asyncio


"""Definition of the coroutine"""
async def async_generator():
    for _ in range(10):
        """Loop that repeats 10 times"""
        await asyncio.sleep(1)
        """Asynchronous wait of 1 second"""
        yield random.uniform(0, 10)
        """Yields a random number between 0 and 10"""
