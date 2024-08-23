## NoSQL

### 1. **What does NoSQL mean?**
   - **NoSQL** refers to a type of database that does not follow the traditional relational model of SQL. Instead of using tables with rows and columns, NoSQL databases offer more flexible and scalable data structures. These databases are designed to handle large volumes of data, high read/write speeds, and support distributed storage across multiple servers.
   - **Types of NoSQL databases**:
     - **Document-oriented**: Example, MongoDB. Data is stored in documents (similar to JSON) that can have flexible and varied structures.
     - **Key-Value**: Example, Redis. Data is stored as key-value pairs, where each key is unique.
     - **Columnar**: Example, Cassandra. Data is stored in columns rather than rows, optimized for queries over large amounts of data.
     - **Graph**: Example, Neo4j. Data is stored as nodes and edges, ideal for representing and querying complex relationships.

### 2. **Differences between SQL and NoSQL**
   - **SQL**:
     - Uses a fixed, structured schema of tables.
     - Supports ACID (Atomicity, Consistency, Isolation, Durability) transactions to ensure reliability of operations.
     - Ideal for applications where data integrity is critical, such as financial systems.
   - **NoSQL**:
     - Offers more flexible schemas that can quickly adapt to changes in data requirements.
     - Sacrifices some of the ACID guarantees in favor of performance and scalability, sometimes following the BASE (Basically Available, Soft state, Eventually consistent) model.
     - Ideal for applications that require horizontal scalability and handling large volumes of unstructured data.

### 3. **MongoDB: A Document-Oriented Database**
   - **Documents in MongoDB**: In MongoDB, data is stored in BSON documents (a binary extension of JSON). Each document can have a different schema, providing flexibility to store various types of data.
   - **Collections**: Instead of tables, MongoDB uses collections, which are groupings of documents.
   - **Queries in MongoDB**: Queries are performed using MongoDB's specific query language, which allows for filtering, projecting, and aggregating documents.
   - **Indexing**: MongoDB supports indexes to speed up queries. You can create indexes on one or more fields of a document.
   - **Aggregation**: MongoDB has an aggregation framework that allows for complex operations, such as summing, averaging, or grouping data, similar to SQL aggregation operations.

### 4. **CRUD Operations in MongoDB**
   - **Inserting Data**: You can insert individual or multiple documents into a collection.
     ```python
     collection.insert_one({"name": "Alice", "age": 30})
     collection.insert_many([{"name": "Bob", "age": 25}, {"name": "Charlie", "age": 35}])
     ```
   - **Querying Data**: Queries allow you to retrieve documents from a collection based on specific criteria.
     ```python
     results = collection.find({"age": {"$gt": 30}})
     for document in results:
         print(document)
     ```
   - **Updating Data**: You can modify fields of an existing document.
     ```python
     collection.update_one({"name": "Alice"}, {"$set": {"age": 31}})
     ```
   - **Deleting Data**: You can delete documents from a collection.
     ```python
     collection.delete_one({"name": "Charlie"})
     ```

### 5. **Technical Requirements and Best Practices**
   - **Operating System**: The project is designed to run on **Ubuntu 20.04 LTS**. Ensure that MongoDB and Python are correctly installed and configured in this environment.
   - **MongoDB 4.4 Installation**: You will be provided with an official guide to install this version of MongoDB on Ubuntu 20.04.
   - **Python 3.9 and PyMongo 4.8.0**: You will use this combination to interact with MongoDB from Python. `PyMongo` is the library that enables developers to work with MongoDB from Python.
   - **Code Style**: All scripts should follow `pycodestyle` conventions to ensure clean and well-documented code. Additionally, scripts should include a header (`#!/usr/bin/env python3`) to be executable from the command line.

### 6. **Documentation and Code Organization**
   - **Comments and Documentation**: Each module and function should have clear and complete comments describing their purpose and functionality. This not only aids understanding but is also crucial for code maintenance.
   - **Project Structure**: You should have a `README.md` file at the root of the project explaining the purpose, setup, and usage of the project. Code files should be well-organized and adhere to line length and structural norms.

### 7. **Learning Objectives**
   By completing this project, you should be able to:
   - Explain what a NoSQL database is and its benefits.
   - Differentiate between SQL and NoSQL databases, and when to use each.
   - Understand the concepts of ACID and how they are applied or omitted in NoSQL.
   - Perform CRUD operations in MongoDB using Python.
   - Apply advanced queries and aggregations in MongoDB.
   - Document and properly structure a technical project to ensure clarity and maintainability.

This project will provide you with a deep and practical understanding of using NoSQL databases, specifically MongoDB, in real-world applications using Python.