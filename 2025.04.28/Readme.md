# 📚 MongoDB Operations for University Database 🏫

---

## 💣 1. Delete Entire Database
```js
db.dropDatabase()
```
![2](https://github.com/user-attachments/assets/ece3e484-58c6-418e-b9ee-4a4303a3410c)

🧹 *Clears everything from the current database. Use with caution!*

---

## 🗑️ 2. Delete a Collection
```js
db.sampledata.drop()
```
![4](https://github.com/user-attachments/assets/9d642ffd-c80c-436c-acdb-fa156e604b68)


🚫 *Deletes the `sampledata` collection.*

---

## 🗃️ 3. Delete a Degree by ID
```js
db.degree.deleteOne({_id:ObjectId('680ee9420a3f4fba5ed366ae')})
```
![8](https://github.com/user-attachments/assets/c7134f4b-4789-4dce-80ad-a2b7cd6fea57)
![9](https://github.com/user-attachments/assets/682204bc-36a0-4c1b-8758-f9e12e8f949c)

🔍 *Removes one specific degree document using its unique ID.*

---

## 📄 4. Display Degree Programs (Name & Duration)
```js
db.degree.find().projection(['name','duration'])
db.degree.find({},{name:1,_id:0}).pretty()
```
👀 *Displays degree names and durations in a clean format.*

![10](https://github.com/user-attachments/assets/7490cdee-2010-4aa7-84a2-c4e20c41471a)
![11](https://github.com/user-attachments/assets/a085985c-961a-47f2-b25b-614c59a7f77c)

---

## ✂️ 5. Delete Degrees with Duration Less Than 4
```js
db.degree.deleteMany({duration:{$lt:4}})
```
🧮 *Removes all degrees that last fewer than 4 years.*

![12](https://github.com/user-attachments/assets/a32736fe-0008-409e-9c40-63b2ae610d5c)
![13](https://github.com/user-attachments/assets/30935c5b-9194-4069-b20c-844a9cac7d55)

---

## 👓 6. Show Remaining Degrees
```js
db.degree.find({},{name:1,duration:1,_id:0}).pretty()
```
📋 *Lists all remaining degrees with name and duration.*

![14](https://github.com/user-attachments/assets/c151093a-c1f3-41a3-b5b2-66372dd67215)

---

## 🔁 7. Update a Degree by ID
```js
db.degree.updateOne(
  {_id:ObjectId('680eef350a3f4fba5ed366b4')},
  {$set:{name:'BIT', duration:3}}
)
```
📝 *Updates the name and duration of a specific degree.*

![17](https://github.com/user-attachments/assets/68454bfa-1b20-45e4-9f05-03030b3a3cb1)
![18](https://github.com/user-attachments/assets/60fea754-2f08-455d-af46-d5e81d83491a)


---

## 🔎 8. Find Degree by ID
```js
db.degree.findOne({_id:ObjectId('680eef5ea6a40ec6c45a968e')})
```
🧭 *Finds one degree using its ID.*

---

## ⏫ 9. Increment Duration by 1 Year for Long Degrees
```js
db.degree.updateMany({duration:{$gte:4}},{$inc:{duration:1}})
```
⏳ *Increases the duration of degrees that are 4+ years long.*

![19](https://github.com/user-attachments/assets/042b5965-dfab-4919-90a2-1fe692570ee0)
![20](https://github.com/user-attachments/assets/e3fa6596-f9cd-42ca-96fe-96124fe5bb0d)
![21](https://github.com/user-attachments/assets/44fb486c-9bd8-4450-8714-4fbc4a3a6a89)

---

## 📚 10. Show All Degrees
```js
db.degree.find()
```
🗂️ *Displays every document in the `degree` collection.*

---

## 🛠️ 11. Add New Skill to a Student
```js
db.students.updateOne({regno:'2021ICT01'},{$push:{skills:'PHP'}})
```
🧑‍💻 *Adds a new skill ("PHP") to a student’s skill set.*

![22](https://github.com/user-attachments/assets/da566a40-fd4b-42f8-b60d-167603e7f8d3)


---

## 🧾 12. Display Student by Registration Number
```js
db.students.findOne({regno:'2021ICT01'})
```
🎓 *Shows the complete student record for a given registration number.*

![23](https://github.com/user-attachments/assets/2379858f-a4a7-407f-bcbd-9aac0bfd6a2a)


