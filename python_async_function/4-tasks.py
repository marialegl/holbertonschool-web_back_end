#!/usr/bin/env python3
"""
Let's execute multiple coroutines at the same time with async
"""


import asyncio
from typing import List
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """
    Executes task_wait_random n times concurrently and
    returns the results in ascending order.

    Parameters:
    n: int
    max_dalay: int

    Returns:
    return the list of all the delays (float values)
    """
    tasks = [task_wait_random(max_delay) for _ in range(n)]
    delays = []

    for task in asyncio.as_completed(tasks):
        delay = await task
        delays.append(delay)

    return delays
