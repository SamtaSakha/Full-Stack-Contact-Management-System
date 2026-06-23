# Full-Stack-Contact-Management-System

## Overview

The She Can Foundation Submission Management System is a full-stack web application developed to collect, store, and manage user inquiries and messages.
It's an internship project for She Can Foundation.
The application provides a responsive contact form where users can submit their name, email address, and message. Submitted data is sent to a backend API built with Node.js and Express.js and is stored securely in MongoDB Atlas.

This project demonstrates full-stack web development concepts including frontend development, backend API creation, database integration, form validation, and data management.

---

## Features

### User Features

* Submit inquiries through a responsive web form
* Enter Name, Email, and Message
* Receive instant submission confirmation
* Mobile-friendly user interface
* Clean and professional design

### Backend Features

* REST API using Express.js
* JSON request handling
* Cross-Origin Resource Sharing (CORS) support
* MongoDB database integration
* Data persistence and retrieval

### Database Features

* MongoDB Atlas cloud database
* Automatic timestamp generation
* Structured data storage
* Centralized submission management

---

## Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose ODM

### Development Tools

* Visual Studio Code
* Git
* GitHub
* Postman
* Live Server

---

## Project Architecture

User fills Contact Form
↓
Frontend (HTML, CSS, JavaScript)
↓
POST Request to Backend API
↓
Express.js Server
↓
MongoDB Atlas Database
↓
Data Stored Successfully

---



## Project Structure

she-can-foundation/

├── frontend/

│ ├── index.html

│ ├── style.css

│ ├── script.js

│ ├── dashboard.html

│ └── login.html

│

├── backend/

│ ├── server.js

│ ├── models/

│ │ └── Submission.js

│ ├── routes/

│ ├── middleware/

│ ├── package.json

│ ├── package-lock.json

│ └── .env

│

└── README.md

---

## Database Schema

Submission

* name : String
* email : String
* message : String
* createdAt : Date

Example Document

{
"name": "Samta",
"email": "[example@gmail.com](mailto:example@gmail.com)",
"message": "Hello She Can Foundation",
"createdAt": "2026-06-23"
}

---

## API Endpoints

### Submit Form

POST /api/contact

Request Body

{
"name": "Samta",
"email": "[example@gmail.com](mailto:example@gmail.com)",
"message": "Hello"
}

Response

{
"message": "Saved Successfully"
}

---

### Get All Submissions

GET /api/submissions

Response

[
{
"name": "Samta",
"email": "[example@gmail.com](mailto:example@gmail.com)",
"message": "Hello"
}
]

---

## HOME PAGE SCREENSHOT
![HOME](https://github.com/SamtaSakha/Full-Stack-Contact-Management-System/blob/main/Screenshot%202026-06-23%20154320.png#:~:text=README.md-,Screenshot%202026%2D06%2D23%20154320.png,-Screenshot%202026%2D06)


## ADMIN DASHBOARD
![ADMIN](https://github.com/SamtaSakha/Full-Stack-Contact-Management-System/blob/main/Screenshot%202026-06-23%20161927.png#:~:text=23%20154344.png-,Screenshot%202026%2D06%2D23%20161927.png,-Screenshot%202026%2D06)


## MONGODB DATABASE
![secureData](https://github.com/SamtaSakha/Full-Stack-Contact-Management-System/blob/main/Screenshot%202026-06-23%20162008.png#:~:text=23%20161927.png-,Screenshot%202026%2D06%2D23%20162008.png,-Breadcrumbs)


## Installation Guide

### Clone Repository

git clone <repository-url>

### Navigate to Backend

cd backend

### Install Dependencies

npm install

### Start Server

node server.js

Server runs on:

http://localhost:5000

---

## Environment Variables

Create a .env file inside the backend directory.

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

---

## Learning Outcomes

Through this project, the following concepts were implemented and learned:

* Frontend Form Development
* Responsive Web Design
* JavaScript Event Handling
* REST API Development
* Express.js Server Configuration
* MongoDB Atlas Integration
* Mongoose Schema Creation
* HTTP Requests and Responses
* Backend Routing
* JSON Data Processing
* Environment Variable Management
* Full-Stack Application Development

---

## Future Enhancements

* JWT Authentication
* Admin Login Panel
* Search and Filter Submissions
* Delete and Update Records
* Email Notifications
* User Registration System
* Analytics Dashboard
* Role-Based Access Control
* Deployment on Vercel and Render

---

## Project Outcome

Successfully developed a full-stack submission management system that enables users to submit inquiries through a responsive web interface while allowing administrators to manage and view submissions stored in MongoDB Atlas.

This project demonstrates practical implementation of modern web development technologies including HTML, CSS, JavaScript, Node.js, Express.js, MongoDB, and REST APIs.


---


-BY
## SAMTA SAKHA
