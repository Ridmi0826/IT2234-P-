# 🔐 User Authentication API (Express + MongoDB)

This implements a simple user authentication system using **Node.js**, **Express**, **MongoDB**, **bcrypt** for password hashing, and **JWT (JSON Web Token)** for secure token generation.

---

## 📦 Features

- ✅ User Registration (`/register`)
- ✅ User Login (`/login`)
- ✅ Password Hashing with **bcrypt**
- ✅ Token-based authentication using **JWT**

---

## 🚀 Technologies Used

- Node.js
- Express.js
- MongoDB + Mongoose
- bcrypt
- jsonwebtoken

![1](https://github.com/user-attachments/assets/e15028d9-d5d4-4ffe-88aa-ea03810b68e0)

---

## 📮 API Endpoints
### 🔐 Register a New User
URL: /register

Method: POST

Request Body:

``` json
{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "yourPassword"
}
```
Responses:

200 OK: Returns created user data

400 Bad Request: Missing fields

409 Conflict: Username already taken

![userRegistered](https://github.com/user-attachments/assets/b025bcc1-e06e-4392-8a69-f47921cd744b)
![userRegisteredM](https://github.com/user-attachments/assets/fdbf254b-a6f1-4350-8d59-128b4b64b58b)


### 🔑 Login User
URL: /login

Method: POST

Request Body:

```json
{
  "username": "john_doe",
  "password": "yourPassword"
}
```
Responses:

200 OK: Returns a JWT token

400 Bad Request: Missing fields

409 Conflict: Invalid username or password

![login](https://github.com/user-attachments/assets/e084e908-bc29-43db-bd8e-290b2506b161)
![incorrectLogin](https://github.com/user-attachments/assets/dcb78ba8-95cf-40b3-9efc-55b6f482418d)


### 🔐 JWT Token
The login response will return a signed JWT token.

The token can be used for authorization in protected routes.

Payload example:

```json

{
  "username": "john_doe",
  "password": "userId123"
}
```
![login_payLoad](https://github.com/user-attachments/assets/286f886f-c3e9-4a4d-94bb-cf6c4c84aaaa)

Secret Key Used: "vau.phy@2025"

⚠️ In production, store your secret key securely using environment variables.



