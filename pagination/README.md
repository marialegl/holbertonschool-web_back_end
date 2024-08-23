## Pagination

This pagination project aims to teach you how to implement various pagination techniques on a dataset using Python. Here’s a detailed explanation of each part:

### 1. **Paginate a dataset with `page` and `page_size` parameters**
   - **Concept:** Pagination with `page` and `page_size` is a basic technique where you divide a dataset into pages. The `page` parameter indicates the page number you want to retrieve, and `page_size` indicates how many items each page should contain.
   - **Example:** If you have a dataset with 100 items, and `page_size` is 10, you will have a total of 10 pages. If you request `page=2`, you will get items 11 to 20.

### 2. **Paginate a dataset with hypermedia metadata**
   - **Concept:** Hypermedia metadata (HATEOAS: Hypermedia As The Engine Of Application State) allows an API to not only return the requested data but also provide additional information to facilitate navigation, such as links to the next and previous pages, and data on the total number of pages.
   - **Example:** In addition to returning the items of the requested page, the API could also include links to `next`, `prev`, `first`, and `last` pages in the response.

### 3. **Resilient pagination to deletions**
   - **Concept:** In scenarios where items in the dataset may be deleted, it’s important that pagination is handled in a way that avoids inconsistencies. For example, if an item is deleted, subsequent pages should adjust automatically to avoid "gaps" in the displayed data.
   - **Example:** If you are displaying page 3 with 10 items and an item from page 2 is deleted, page 3 should now display an additional new item that moved from page 4.

### 4. **Technical Requirements**
   - **Python 3.9:** All code must be compatible with Python 3.9.
   - **Documentation:** Both your modules and functions/coroutines must be documented. The documentation should be clear and explanatory.
   - **Type Annotations:** All functions and coroutines must have type annotations to indicate the expected input and output data types.
   - **Code Style:** Your code should follow the `pycodestyle` convention (version 2.5.*).

### 5. **File `Popular_Baby_Names.csv`**
   - **File Usage:** You will need to use the `Popular_Baby_Names.csv` file as the dataset for this project. This file contains a list of popular baby names and will be the database you paginate.

### **Learning Objectives**
By the end of this project, you should be able to:
- Implement simple pagination on a dataset.
- Utilize and handle hypermedia metadata for an API.
- Create pagination that properly manages item deletions.

This project will help you understand how to efficiently handle large datasets and how to design APIs that are robust and easy for developers to use.