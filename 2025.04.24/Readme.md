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

  ![2](https://github.com/user-attachments/assets/6a48872e-a04f-4544-9a21-18ba5c484331)

- Insert your document.

  ![27](https://github.com/user-attachments/assets/eed147c7-4872-4b21-83f2-7d7a0feaccda)

- Click **"Format"** for better readability.
- Then click **"Insert"** to save.

  ![28](https://github.com/user-attachments/assets/cc23b1ea-d57f-4b65-a932-14052a69f226)

- To duplicate a document, click **"Clone Document"**.

  ![7](https://github.com/user-attachments/assets/234da5d9-56df-4d33-ac06-3c71d4ff24ea)


---

## ✏️ Edit Data (via UI)

- Click **"Edit document"**.

  ![4](https://github.com/user-attachments/assets/7b179d4f-8e00-4a15-a2c9-00ac36d8ce62)

- Press **"+"** then **"Add field"**.

  ![5](https://github.com/user-attachments/assets/4be90ad4-88e9-4161-9268-0ce6cba2364b)

- Add a new field (e.g., `gender`) and click **"Update"**.

  ![6](https://github.com/user-attachments/assets/2f4565f9-9797-4bda-93a7-c41f05507ff9)


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
![9](https://github.com/user-attachments/assets/e2cd5e72-52bb-4911-8324-d5ffca93672e)

---

### Insert many students:

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
![10](https://github.com/user-attachments/assets/56342608-a044-4f5b-af58-0a7923d83ecc)

![11](https://github.com/user-attachments/assets/6fc4c5e5-0359-42cc-a0e3-ef12e4dcd543)

![13](https://github.com/user-attachments/assets/31d0545a-7ebd-497d-aeab-2d3b5192c28c)

---
### 🔍 Query Students

#### Display name and age (with ID):

![35](https://github.com/user-attachments/assets/950dc75e-105c-47a1-81eb-f8b22ff3fa2c)

#### Using command lines

```javascript
db.students.find({}, {name: 1, age: 1})
```

---

### Display name and age (without ID):

![14](https://github.com/user-attachments/assets/0bda91f4-1d22-4024-9a87-4bcbcb09a2f0)

#### Using command lines 

```javascript
db.students.find({}, {name: 1, age: 1, _id: 0})
```
#### 🛠️ Use the "Reset" button to clear applied filters in the UI.

![36](https://github.com/user-attachments/assets/7f9833bb-05ec-4dfa-bf5d-c169d8abfe06)

---

### 👨‍🎓 Find Students (Shell)

#### Find students by id:
![15](https://github.com/user-attachments/assets/d38f0e70-05cd-441c-8f4a-0c6070f02904)


#### Find one male student:
```javascript
db.students.findOne({"gender": "Male"})
```
![12](https://github.com/user-attachments/assets/ebf9c5bc-1ff9-49d2-8c81-5af2eaffefdf)


---
#### Find all male students:
```javascript
db.students.find({"gender": "Male"})
```
![20](https://github.com/user-attachments/assets/372b3a91-24d4-4630-be2f-847be3d1d95d)

---

### Age conditions:

#### Greater than 25:

![17](https://github.com/user-attachments/assets/def9902e-5774-4154-822c-19fc7f601ce0)

#### Using command lines

```javascript
db.students.find({age: {$gt: 25}})
```
![21](https://github.com/user-attachments/assets/9a383f9d-29d5-42f4-98ea-a65f27535ad3)

---
#### Less than 25:

![18](https://github.com/user-attachments/assets/96298a92-6228-4fe5-8f9a-69a6d98dfcd3)

#### Using command lines

```javascript
db.students.find({age: {$lt: 25}})
```
---

#### Equal to 25:

![19](https://github.com/user-attachments/assets/16a65821-1a90-4431-8cae-ecd1753724e7)

#### Using command lines

```javascript
db.students.find({age: {$eq: 25}})
```
---
### Find students with MongoDb skills:

![39](https://github.com/user-attachments/assets/7ca6aa6c-5385-4ac9-87ed-7861d909cb0f)

#### Using command lines

```javascript
db.students.find({skills: "MongoDb"})
```
#### Or:

![22](https://github.com/user-attachments/assets/45169c4e-b963-4e9f-af32-acd2b1e11408)

#### Using command lines

```javascript
db.students.find({skills: {$in: ["MongoDb"]}})
```
---
#### Find students NOT in IT:

![34](https://github.com/user-attachments/assets/6bd08774-158b-4027-a167-d2754744391c)

#### Using command lines

```javascript
db.students.find({degree: {$nin: ["IT"]}})
```
---

### 📈 Sorting Students

#### Sort by GPA (Ascending):

![23](https://github.com/user-attachments/assets/41594dd1-4f99-4679-b0b0-f5650b14186b)

#### Using command lines

```javascript
db.students.find().sort({gpa: 1})
```
![42_1](https://github.com/user-attachments/assets/80dc2464-15ed-4939-90da-95aed2219b1c)
![42_2](https://github.com/user-attachments/assets/cd964297-8f1a-4e6e-8cb3-0db61adabad2)
![42_3](https://github.com/user-attachments/assets/5cb4d0f5-86ab-4624-b0b4-f1e67c1bf578)

---
#### Sort by GPA (Descending):

![24](https://github.com/user-attachments/assets/1cf8220b-fcb6-453b-8e7d-f7a951fcbc90)

#### Using command lines

```javascript
db.students.find().sort({gpa:-1})
```
---
### Sort IT male students by GPA (Ascending):
```javascript
db.students.find({degree: "IT", gender: "male"}).sort({gpa: 1})
```
![26](https://github.com/user-attachments/assets/4febc894-b2da-4d05-8f8a-e1a03558600d)

----

### 🧮 Limit & Skip Students

#### Limit to 3 students (showing regno and name):

![43](https://github.com/user-attachments/assets/dcdc1a3b-436a-4cdd-b85b-f68050f27187)

#### Using command lines

```javascript
db.students.find({}, {regno: 1, name: 1}).limit(3)
```
---
### Skip 1 and show next 3:

![44](https://github.com/user-attachments/assets/6b009119-4cd6-4b7f-8119-d840c448d82f)


#### Using command lines

```javascript
db.students.find().skip(1).limit(3)
```
---



 
