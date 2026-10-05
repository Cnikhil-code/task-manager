# Task Manager REST API

A RESTful Task Manager API built with **Node.js, Express.js, MongoDB, and Mongoose**.

This project was built as a backend practice project to learn REST APIs, CRUD operations, MongoDB, authentication middleware, validation, and centralized error handling.

---

## Features

- Create tasks
- Get all tasks
- Get a single task by ID
- Update a task completely
- Partially update a task
- Delete tasks
- MongoDB Atlas database
- Mongoose ODM
- API key authentication
- Request validation
- ObjectId validation
- Centralized error handling
- Environment variables with `.env`
- Tested using Postman

---

## Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB Atlas**
- **Mongoose**
- **Postman**
- **Git & GitHub**

---

## Project Structure

```text
task-manager/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── task.controller.js
│
├── data/
│   └── tasks.js
│
├── middleware/
│   ├── auth.middleware.js
│   ├── error.middleware.js
│   └── logger.middleware.js
│
├── models/
│   └── task.js
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
└── task.routes.js
