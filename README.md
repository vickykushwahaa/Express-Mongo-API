# Express-Mongo-API
A RESTful CRUD API built with Express.js and MongoDB. Supports basic Create, Read, Update, and Delete operations. Designed for scalability and easy integration with frontend applications.


# Express MongoDB CRUD API

A simple and RESTful CRUD API built using **Node.js**, **Express.js**, and **MongoDB**. This backend application allows you to perform basic Create, Read, Update, and Delete operations on a MongoDB collection.

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose

## 📂 Project Structure


## 🚀 Getting Started

### Prerequisites

- Node.js installed
- MongoDB installed and running locally or use MongoDB Atlas

### Installation

```bash
git clone https://github.com/your-username/express-mongo-crud.git
cd express-mongo-crud
npm install
PORT=8080
MONGO_URI=mongodb://localhost:8080/User

npm start
Method | Endpoint | Description
GET | /api/users | Get all users
GET | /api/users/:id | Get user by ID
POST | /api/users | Create a new user
PUT | /api/users/:id | Update user by ID
DELETE | /api/users/:id | Delete user by ID

POST /api/users
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com"
}


---

Want to include Swagger docs, Postman collection, or anything else in the README?
