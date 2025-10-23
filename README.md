****📚 Book Management REST API****

A simple REST API built with Node.js and Express to manage a list of books.
The data is stored in-memory (no database required). This API supports basic CRUD operations: Create, Read, Update, Delete.

**🛠️ Tools Used**

Node.js (Free)

Express.js

VS Code (Free)

Postman (Free, for testing API endpoints)

**⚡ Project Objective**

Build a REST API to:

Store a list of books in memory.

Implement GET, POST, PUT, DELETE endpoints.

Understand REST API basics, routing, HTTP methods, and JSON handling.

**🚀 Setup Instructions (Command Line)**

Create project folder:

mkdir book-api
cd book-api


Initialize Node.js project:

npm init -y


Install Express:

npm install express


Create server.js file and paste your server code.

Run the server:

node server.js


You should see:

✅ Server running at http://localhost:3000

**🌐 API Endpoints**
1. Get all books

Method: GET

URL: http://localhost:3000/books

Response: Array of book objects {id, title, author}

2. Add a new book

Method: POST

URL: http://localhost:3000/books

Headers: Content-Type: application/json

Body Example:

{
  "title": "Book Title",
  "author": "Author Name"
}


Response: Newly created book object with assigned id.

3. Update a book

Method: PUT

URL: http://localhost:3000/books/:id

Headers: Content-Type: application/json

Body Example:

{
  "title": "Updated Title",
  "author": "Updated Author"
}


Response: Updated book object.

4. Delete a book

Method: DELETE

URL: http://localhost:3000/books/:id

Response Example:

{
  "message": "Book deleted successfully"
}

**📝 Notes**

Use app.use(express.json()) in server.js to parse JSON request bodies.

Test endpoints using Postman or any API client.

Data is stored in memory, so it resets every time the server restarts.

🎯 Outcome

By completing this task, you will understand:

How to set up a Node.js Express server

How to implement REST API routes for CRUD operations

How to handle JSON data in requests and responses

How to test APIs with Postman
