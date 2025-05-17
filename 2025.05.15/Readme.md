# 📚 University Student Records

---

## 📦 Collections

### 🧑‍🎓 `students`
This collection stores personal and academic info of students such as:
- Name
- Gender
- Age
- Major
- Enrollment Year
- Email

### 📝 `grades`
This collection records academic performance:
- Subject
- Score
- Term
- Linked Student ID

---

## 🔍 Sample Queries

### 1️⃣ Insert Students & Grades

```javascript
// Insert 10 students
db.students.insertMany([ /* student documents */ ])

// Insert grades for students
db.grades.insertMany([ /* grade documents */ ])
```
### 2️⃣ 👩‍🔬 Find All Female Students

```javascript
db.students.find(
  { gender: "Female" },
  { _id: 0, name: 1, age: 1, gender: 1 }
)
```
🧾 Returns: Only name, age, and gender for all female students.

### 3️⃣ 📅 Students Enrolled After 2020 & Younger Than 22

```javascript
db.students.find({
  age: { $lt: 22 },
  enrollmentYear: { $gt: 2020 }
})
```
📘 Useful for: Identifying recent and young enrollees.

### 4️⃣ 📊 Grades of a Specific Student (Alice Johnson)

```javascript
db.grades.find({
  studentId: ObjectId('64b1fcd1f4a13a001e3d41a1')
})
```
👩‍💻 Tracks: Alice’s academic performance across subjects.

### 5️⃣ ➕ Count of Students Who Took Mathematics

```javascript
db.grades.aggregate([
  { $match: { subject: "Mathematics" } },
  { $group: { _id: "$studentId" } },
  { $count: "mathStudentsCount" }
])
```
📈 Result: Total number of unique students enrolled in Mathematics.

### 6️⃣ 🍁 All Grades from Fall 2022

```javascript
db.grades.find({
  term: "Fall 2022"
})
```
📅 Purpose: List all grades recorded in the Fall 2022 semester
