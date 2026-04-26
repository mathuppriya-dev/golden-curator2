# 🚀 Golden Curator

### Scalable Event Management Platform (Full-Stack MERN)

<p align="center">
  <img src="https://img.shields.io/badge/Architecture-Scalable-blue?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Frontend-React-blueviolet?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Backend-Node.js-yellow?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Database-MongoDB-darkgreen?style=for-the-badge" />
</p>

---

## 📌 Overview

Golden Curator is a full-stack event management system designed with scalability, maintainability, and real-world workflows in mind.

It implements a structured **event approval pipeline**, enabling administrators to control publishing while maintaining a seamless user experience.

---

## 🎯 Problem Statement

Modern event platforms often lack:

* Structured approval workflows
* Centralized admin control
* Scalable backend architecture

Golden Curator solves this using a **moderation-first system** with clear separation between pending and approved content.

---

## 🧠 System Design

### High-Level Architecture

```
Frontend (React)
        ↓
API Layer (Axios)
        ↓
Backend (Express.js)
        ↓
Database (MongoDB)
```

---

### Data Flow

```
User → Create Event → Stored as "Pending"
        ↓
Admin → Approve Event → Moves to "Approved"
        ↓
Frontend → Fetch Approved Events → Display
```

---

## ✨ Features

### 🎯 Core Features

* Create, update, delete events
* Admin approval workflow
* Event filtering and search

### 👤 Admin System

* Centralized control panel
* Event moderation system

### 🎨 UI/UX

* Responsive design
* Clean dashboard interface

---

## 🛠️ Tech Stack

| Layer    | Technology           |
| -------- | -------------------- |
| Frontend | React, Axios, CSS    |
| Backend  | Node.js, Express     |
| Database | MongoDB (Mongoose)   |
| Tools    | Git, GitHub, VS Code |

---

## 📁 Project Structure

```
golden-curator2/
│
├── backend/
│   ├── Controllers/
│   ├── Models/
│   ├── Routes/
│   ├── config/
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── context/
│
├── .gitignore
├── package.json
└── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```
git clone https://github.com/mathuppriya-dev/golden-curator2.git
cd golden-curator2
```

---

### 2️⃣ Install Dependencies

```
cd backend && npm install
cd ../frontend && npm install
```

---

### 3️⃣ Environment Variables

Create `.env` inside `backend/`

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

---

### 4️⃣ Run Application

```
# Backend
cd backend
npm start

# Frontend
cd frontend
npm start
```

---

## 🌐 Complete API Documentation

### 🔗 Base URL

```
http://localhost:5000/api
```

---

## 📌 Events API

| Method | Endpoint                | Description         |
| ------ | ----------------------- | ------------------- |
| GET    | /api/events             | Get all events      |
| GET    | /api/events/approved    | Get approved events |
| GET    | /api/events/pending     | Get pending events  |
| POST   | /api/events             | Create event        |
| PUT    | /api/events/:id         | Update event        |
| DELETE | /api/events/:id         | Delete event        |
| PUT    | /api/events/approve/:id | Approve event       |
| PUT    | /api/events/reject/:id  | Reject event        |

---

### 📥 Example Response

```json
{
  "total": 5,
  "events": [
    {
      "_id": "event_id",
      "title": "Gallery Night Draft",
      "category": "Arts",
      "location": "Kegalle",
      "status": "pending"
    }
  ]
}
```

---

## 👤 Users API

| Method | Endpoint   | Description   |
| ------ | ---------- | ------------- |
| GET    | /api/users | Get all users |
| POST   | /api/users | Create user   |

---

## 📁 File Upload API

| Method | Endpoint    | Description  |
| ------ | ----------- | ------------ |
| POST   | /api/upload | Upload image |

---

## 📊 Scalability Considerations

* Stateless backend → horizontal scaling
* Modular architecture → easy feature expansion
* MongoDB → flexible schema

---


## 🚀 Deployment

| Service  | Platform      |
| -------- | ------------- |
| Frontend | Vercel        |
| Backend  | Render        |
| Database | MongoDB Atlas |

---


## 👨‍💻 Author : **Mathuppriya Naguleswaran**
🔗 https://github.com/mathuppriya-dev

---

## 📜 License

MIT License © 2026
