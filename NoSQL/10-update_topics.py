#!/usr/bin/env python3
""" Update topics """


def update_topics(mongo_collection, name, topics):
    """
    Updates the topics of a school document based on its name.

    Args:
        mongo_collection: The pymongo collection object.
        name (str): The name of the school whose document will be updated.
        topics (list of str): The list of topics to update in the document.

    Returns:
        None
    """
    mongo_collection.update_many(
        {'name': name},
        {'$set': {'topics': topics}}
    )
