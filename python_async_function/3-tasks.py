#!/usr/bin/env python3


import asyncio
from basic_async_syntax import wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """Creates an asyncio task for the wait_random
    coroutine and returns it."""
    task = asyncio.create_task(wait_random(max_delay))
    return task
