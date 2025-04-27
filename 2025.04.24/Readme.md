# 📚 MongoDB Tutorial
 

A simple and beginner-friendly guide to MongoDB basics using UI and Shell commands.

---

## ➕ Add a New Connection

- Click **"Add new connection"**.

 ![45](https://github.com/user-attachments/assets/312bf2cd-6965-4d1a-8a5f-114ff88e6fba)
  
- Then click **"Save & Connect"** to save the connection.

  ![46](https://github.com/user-attachments/assets/1a469a30-3269-4e01-8e2a-76e5c73314df)




---

## 🗄️ Create a New Database

- Click **"Create database"**.
- Enter the **Database Name** and **Collection Name**.
- Click **"Create Database"**.

  ![1](https://github.com/user-attachments/assets/9b0fe193-34e8-4427-9940-02162bf963bf)


---

## 💻 Open MongoDB Shell

- Click **"Open MongoDB shell"**.

  ![47](https://github.com/user-attachments/assets/e7fdf7ff-d562-4d1d-8054-9a5f27509d78)

- Useful commands:
  ```bash
  use unidb            # Change to 'unidb' database
  show databases       # Display all databases
  show collections     # Display collections in the current database
  cls                  # Clear the shell screen

![8](https://github.com/user-attachments/assets/213a30c8-c312-44dd-9d9c-5d1adf50808f)

---

## 📝 Insert Data (via UI)

- Click **"Add Data"** > **"Insert document"**.
- Insert your document.
- Click **"Format"** for better readability.
- Then click **"Insert"** to save.
- To duplicate a document, click **"Clone Document"**.

---

## ✏️ Edit Data (via UI)

- Click **"Edit document"**.
- Press **"+"** then **"Add field"**.
- Add a new field (e.g., `gender`) and click **"Update"**.

---
## 📜 Insert Data (via Command Line)

### Insert one student:

```bash
db.students.insertOne({
  "regno": "2021ict110",
  "name": "Pavan",
  "age": 27,
  "gender": "Male",
  "degree": "CSC",
  "gpa": 3.4,
  "skills": ["js", "Mongodb", "C#"]
})
```
---

### Insert one student:

```javascript
db.students.insertMany([
  {
    "regno": "2021ict117",
    "name": "Kamal",
    "age": 25,
    "gender": "male",
    "degree": "IT",
    "gpa": 3.7,
    "skills": ["java", "Mongodb", "node"]
  },
  {
    "regno": "2021ict115",
    "name": "Kalani",
    "age": 26,
    "gender": "female",
    "degree": "CSC",
    "gpa": 3.4,
    "skills": ["js", "Mongodb", "node"]
  }
])
```
---
### 🔍 Query Students

#### Display name and age (with ID):
```javascript
db.students.find({}, {name: 1, age: 1})
```
---

### Display name and age (without ID):
```javascript
db.students.find({}, {name: 1, age: 1, _id: 0})
```
#### 🛠️ Use the "Reset" button to clear applied filters in the UI.
---

### 👨‍🎓 Find Students (Shell)

#### Find one male student:
```javascript
db.students.findOne({"gender": "Male"})
```
---
#### Find all male students:
```javascript
db.students.find({"gender": "Male"})
```
---

### Age conditions:

#### Greater than 25:
```javascript
db.students.find({age: {$gt: 25}})
```
---
#### Less than 25:
```javascript
db.students.find({age: {$lt: 25}})
```
---

#### Equal to 25:
```javascript
db.students.find({age: {$eq: 25}})
```
---
### Find students with MongoDb skills:
```javascript
db.students.find({skills: "MongoDb"})
```
### Or:

```javascript
db.students.find({skills: {$in: ["MongoDb"]}})
```
---
#### Find students NOT in IT:
```javascript
db.students.find({degree: {$nin: ["IT"]}})
```
---

### 📈 Sorting Students

#### Sort by GPA (Ascending):
```javascript
db.students.find().sort({gpa: 1})
```
---
### Sort IT male students by GPA (Ascending):
```javascript
db.students.find({degree: "IT", gender: "male"}).sort({gpa: 1})
```
----

### 🧮 Limit & Skip Students

#### Limit to 3 students (showing regno and name):
```javascript
db.students.find({}, {regno: 1, name: 1}).limit(3)
```
---
### Skip 1 and show next 4:
```javascript
db.students.find().skip(1).limit(4)
```
---

### 🧪 Playground - Try These Commands!
```bash
show databases
use unidb
db.students.find()
db.students.find({age: {$gt: 25}})
db.students.find({skills: {$in: ["MongoDb"]}})
```

 
