#!/usr/bin/env python3
""" Log stats """


from pymongo import MongoClient


def log_stats():
    """
    Connects to a MongoDB database and gets statistics
    from the Nginx log collection.

    The function performs the following actions:
    1. Connect to the MongoDB database on localhost.
    2. Select the database 'logs' and the collection 'nginx'.
    3. Count the total number of documents in the collection.
    4. Counts the number of documents for
       each of the specified HTTP methods.
    5. Count the number of documents with
       the 'GET' method and the '/status' path.
    6. Print the results in the required format.
    """
    client = MongoClient('mongodb://127.0.0.1:27017')
    db = client.logs
    collection = db.nginx

    # Contar el número total de documentos
    total_logs = collection.count_documents({})

    # Contar los documentos por método
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    method_counts = {method:
                     collection.count_documents({"method": method})
                     for method in methods}

    # Contar documentos con method=GET y path=/status
    status_check_count = collection.count_documents({
        "method": "GET",
        "path": "/status"
    })

    # Mostrar los resultados
    print(f"{total_logs} logs")
    print("Methods:")
    for method in methods:
        print(f"\tmethod {method}: {method_counts[method]}")
    print(f"{status_check_count} status check")


if __name__ == "__main__":
    log_stats()
