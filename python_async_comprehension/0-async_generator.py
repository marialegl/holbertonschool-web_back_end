#!/usr/bin/env python3
"""
Async Generator
"""

import random
import asyncio
from typing import Generator


async def async_generator() -> Generator[float, None]:
    """Definition of the coroutine"""
    for _ in range(10):
        """Loop that repeats 10 times"""
        await asyncio.sleep(1)
        """Asynchronous wait of 1 second"""
        yield random.uniform(0, 10)
        """Yields a random number between 0 and 10"""
