#!/usr/bin/env python3


import asyncio
import time
from typing import List
from concurrent_coroutines import wait_n


def measure_time(n: int, max_delay: int) -> float:
    """Measures the total execution time of wait_n
    and returns the average time per coroutine."""
    start_time = time.time()  # Tiempo de inicio
    asyncio.run(wait_n(n, max_delay))  # Ejecuta la función wait_n
    end_time = time.time()  # Tiempo de finalización

    total_time = end_time - start_time  # Tiempo total de ejecución
    return total_time / n  # Tiempo promedio por corutina
