#!/usr/bin/env python3
"""
The basics of async
"""


import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    """
    Waits for a random time between 0
    and max_delay seconds and returns it.

    Args:
    max_delay (int): The maximum delay time (in seconds).
    Defaults to 10.

    Returns:
    float: The actual delay time.
    """
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay
