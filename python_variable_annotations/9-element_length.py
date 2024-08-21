#!/usr/bin/env python3


from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Returns a list of tuples, where each tuple contains an element
    of the iterable and the length of that element."""
    return [(i, len(i)) for i in lst]
