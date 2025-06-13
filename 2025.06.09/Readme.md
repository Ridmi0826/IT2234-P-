# 📚 Library Management System (Express + MongoDB)

A simple RESTful API built using **Node.js**, **Express**, and **MongoDB** for managing students, books, and book borrowing in a library.

---

## 🚀 Features

- View all books and filter by genre
- View all students and filter by academic year
- Borrow books with smart validation
- Reusable generic service for filtering and fetching
- Book availability and borrow eligibility checks

---

## 📂 API Endpoints
### 📘 Books
Method	Endpoint	Description
GET	/book/	Fetch all books
GET	/book/genre/:gen	Filter books by genre

## 🧑‍🎓 Students
Method	Endpoint	Description
GET	/student/	Fetch all students
GET	/student/year/:yr	Filter students by year

## 📖 Borrow
Method	Endpoint	Description
GET	/borrow/	Get all borrow records
GET	/borrow/student/:id	Get borrowed books for a student
POST	/borrow/	Borrow a book (with validation)

## 🔐 Borrowing Conditions
✅ Student and Book IDs must be valid

❌ Students with more than 2 unreturned books cannot borrow more

❌ At least 1 non-lendable copy of the book must be retained

📉 Available copies decrease by 1 when a book is borrowed

🛑 Clear error messages are returned when conditions are not met

🔁 Common Service Functions
Path: services/genericFindService.js

findFun(res, Model) — fetches all data from a model

filterFun(res, Model, filter) — fetches filtered data from a model

Used by both books and students routes for DRY (Don't Repeat Yourself) code.

 
