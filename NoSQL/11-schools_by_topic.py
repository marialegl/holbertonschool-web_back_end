#!/usr/bin/env python3
""" Schools by topic """


def schools_by_topic(mongo_collection, topic):
    """
    Returns a list of documents in the collection
    that have the specified topic.

    Args:
        mongo_collection: The pymongo collection object.
        topic (str): The topic to search for in the documents.

    Returns:
        List[dict]: A list of documents containing the specified topic.
    """
    return list(mongo_collection.find({'topics': topic}))
