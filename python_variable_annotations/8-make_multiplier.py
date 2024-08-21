#!/usr/bin/env python3


from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """Returns a function that multiplies a number by the given multiplier."""
    def multiplier_function(x: float) -> float:
        return x * multiplier

    return multiplier_function
