#!/usr/bin/env python3
""" List all """


def list_all(mongo_collection):
    """
    Lists all documents in a MongoDB collection.

    Args:
        mongo_collection: The pymongo collection object.

    Returns:
        A list of all documents in the collection.
        Returns an empty list if there are no documents.
    """
    return list(mongo_collection.find())
