const express = require("express");
const app = express();
const port = 3000;
console.log("server starting....");


app.use(express.json());


let books = [
  { id:1, title: "engineering mathematics", author: "SK Das"},
    { id:2, title: "data structure and algorithm", author: "SS Soumya"},
    { id:3, title: "analog electronics", author: "DD Dasgupta"},
    { id:4, title: "digital electronis", author: "H Chakraborty"},
    { id:5, title: "macbeth", author: "Shakespere"},
    {id: 6,title: "And Then There Were None",author: "Agatha Christie"},
    {id: 7,title: "Murder on the Orient Express",author: "Agatha Christie"}
];


app.get("/books", (req, res) => {
  res.json(books);
});


app.post("/books", (req, res) => {
  const { title, author } = req.body;

  if (!title || !author) {
    return res.status(400).json({ message: "Title and author are required" });
  }

  const newBook = {
    id: books.length + 1,
    title,
    author
  };

  books.push(newBook);
  res.status(201).json(newBook);
});


app.put("/books/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  const { title, author } = req.body;
  const book = books.find(b => b.id === bookId);

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  if (title) book.title = title;
  if (author) book.author = author;

  res.json(book);
});


app.delete("/books/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  const index = books.findIndex(b => b.id === bookId);

  if (index === -1) {
    return res.status(404).json({ message: "Book not found" });
  }

  books.splice(index, 1);
  res.json({ message: "Book deleted successfully" });
});


app.listen(port, () => {
  console.log(`📚 Book API server running at http://localhost:${port}`);
});
