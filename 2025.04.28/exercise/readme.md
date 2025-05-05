# 📚 MongoDB Bookshop Database Setup & Operations 📘

---

## 🏗️ 1. Create the Database
```js
use bookshop
```
🏢 *Switches to (or creates) the `bookshop` database.*

## 📦 2. Create the Collection
```js
db.createCollection("books")
```
📚 *Creates a `books` collection in the database.*

![1](https://github.com/user-attachments/assets/18fe7894-d521-46e6-b331-70aaef3ad6dc)
![2](https://github.com/user-attachments/assets/5e18feb2-9367-4cc3-9bb9-31eebc3b4d7c)

---

## ✍️ 3. Insert Multiple Book Records
```js
db.books.insertMany([
  {
    "title": "The Hobbit",
    "author": "J.R.R. Tolkien",
    "published_year": 1937,
    "genres": ["Fantasy", "Adventure"],
    "pages": 310,
    "available": true,
    "rating": 4.8
  },
  {
    "title": "1984",
    "author": "George Orwell",
    "published_year": 1949,
    "genres": ["Dystopian", "Political Fiction"],
    "pages": 328,
    "available": true,
    "rating": 4.7
  },
  {
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "published_year": 1960,
    "genres": ["Southern Gothic", "Drama"],
    "pages": 281,
    "available": false,
    "rating": 4.6
  },
  {
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "published_year": 1925,
    "genres": ["Tragedy"],
    "pages": 180,
    "available": true,
    "rating": 4.4
  },
  {
    "title": "Brave New World",
    "author": "Aldous Huxley",
    "published_year": 1932,
    "genres": ["Science Fiction", "Dystopian"],
    "pages": 311,
    "available": true,
    "rating": 4.2
  }
])
```
📘 *Adds multiple books to your collection.*

![3_1](https://github.com/user-attachments/assets/a79d402d-66ae-455d-96c9-38a8468ca8f9)
![3_2](https://github.com/user-attachments/assets/c606d825-8141-4195-ab3c-c93a9be5fef6)

---

## 📖 4. Find All Books
```js
db.books.find()
```
🔍 *Shows all books in the collection.*

![4_1](https://github.com/user-attachments/assets/b6836858-ae69-44ec-84c9-ccde58758040)
![4_2](https://github.com/user-attachments/assets/4763a4b5-9695-436d-a58a-e5d0597a166c)
![4_3](https://github.com/user-attachments/assets/1ab73c8c-bdb7-43ac-bbbe-8d9860ee1c76)

---

## 📆 5. Books Published After 1950
```js
db.books.find({published_year: {$gt: 1950}})
```
📅 *Filters books published after 1950.*

![5](https://github.com/user-attachments/assets/e19253c0-5b06-4a60-b204-fb2d7afe7d16)

---

## ✅ 6. Find Available Books
```js
db.books.find({available: {$eq: true}})
```
📗 *Lists books currently available.*

![6_1](https://github.com/user-attachments/assets/4237f71d-5fb6-47d1-90f6-9741b4123cca)
![6_2](https://github.com/user-attachments/assets/36051ab4-c0a8-40f5-9cb9-44a566828c71)

---

## 🌍 7. Books in the "Dystopian" Genre
```js
db.books.find({genres: "Dystopian"})
db.books.find({genres: {$in: ["Dystopian"]}})
```
📕 *Finds books that include "Dystopian" in genres.*

![7_1](https://github.com/user-attachments/assets/eaf24285-0bdc-465a-ab55-50ded8654c3a)
![7_2](https://github.com/user-attachments/assets/0de07420-93e4-4c5e-a8f2-5230193db3d9)

---

## 🧪 8. Books Published After 1960 with Rating > 4.0
```js
db.books.find({published_year: {$gt: 1960}, rating: {$gt: 4.0}})
db.books.find({$and: [{published_year: {$gt: 1960}}, {rating: {$gt: 4.0}}]})
```
🧠 *Advanced filter combining conditions!*

![8_1](https://github.com/user-attachments/assets/32459bdd-b0b8-4d1d-b6eb-cd61816d1f89)
![8_2](https://github.com/user-attachments/assets/bd5be291-75b1-4e45-bb28-e7534059b5c5)

---

## ✂️ 9. Project Only Title and Author
```js
db.books.find({}, {title: 1, author: 1, _id: 0})
```
🧾 *Show just the book title and author.*

![9](https://github.com/user-attachments/assets/cbaa3d99-43d9-40b9-bb23-e31a0b65b502)

---

## 🔧 10. Update "1984" to Make It Unavailable
```js
db.books.updateOne({"title": "1984"}, {$set: {"available": false}})
db.books.findOne({"title": "1984"})
```
🚫 *Marks the book as unavailable.*

![10](https://github.com/user-attachments/assets/7018a5fe-f144-42b3-8bb0-995f2ca0c48f)

---

## 📈 11. Increase Rating of "Brave New World"
```js
db.books.updateOne({"title": "Brave New World"}, {$inc: {rating: 1}})
db.books.findOne({"title": "Brave New World"})
```
⭐ *Boosts the rating by 1 point!*

![11](https://github.com/user-attachments/assets/b188296b-fc43-4e2e-805b-46614f1ecc6f)

---

## ➕ 12. Add Genre "Classic" to "The Great Gatsby"
```js
db.books.updateOne({"title": "The Great Gatsby"}, {$push: {"genres": "Classic"}})
db.books.findOne({"title": "The Great Gatsby"})
```
🏷️ *Adds a new genre to the book.*

![12](https://github.com/user-attachments/assets/68bdd000-89a9-465e-b3ba-ababa72a3faa)

---

## 🔢 13. Sort Books by Published Year (Ascending)
```js
db.books.find().sort({"published_year": 1})
```
📚 *Oldest to newest!*

![13_1](https://github.com/user-attachments/assets/719e5ad4-f6a6-4455-a3b6-325f44abfcdf)
![13_2](https://github.com/user-attachments/assets/61a5b516-7841-4ff8-a7ad-9ba035675e9e)
![13_3](https://github.com/user-attachments/assets/33f206c6-95e4-4b4c-8034-8b668f32bcd7)

---

## 🔝 14. Sort Books by Rating (Descending)
```js
db.books.find().sort({"rating": -1})
```
🌟 *Highest-rated books first!*

![14_1](https://github.com/user-attachments/assets/ca654b99-aed6-4c27-93fa-18a2df066491)
![14_2](https://github.com/user-attachments/assets/274cab47-74c5-4a29-9b00-d076cf4384fe)
![14_3](https://github.com/user-attachments/assets/b935924f-d9b2-4ffa-8c74-f933fb7bc708)

---

## ❌ 15. Delete Books with Rating Below 4.5
```js
db.books.deleteMany({rating: {$lt: 4.5}})
db.books.find()
```
🗑️ *Cleans up books with low ratings.*

![15_1](https://github.com/user-attachments/assets/1003ca91-2d6e-49f0-a698-089b399d0c1b)
![15_2](https://github.com/user-attachments/assets/37f5d53e-b112-4a3c-9a5c-f41f682e90ec)
![15_3](https://github.com/user-attachments/assets/5eaf956b-8d72-4c28-b01c-7d4e40575426)

---


