#!/usr/bin/env python3
""" Insert school """


def insert_school(mongo_collection, **kwargs):
    """
    Inserts a new document into the kwargs-based collection.

    Args:
        mongo_collection: The pymongo collection object.
        **kwargs: Key-value arguments that will be inserted as a document.

    Returns:
        The _id of the new inserted document.
    """
    new_doc = mongo_collection.insert_one(kwargs)
    return new_doc.inserted_id
