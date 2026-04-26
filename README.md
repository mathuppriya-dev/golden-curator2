# 🌟 Golden Curator

### Smart Event Management Platform

A full-stack web application designed to manage, curate, and explore events with an intuitive admin dashboard and modern UI.


## 🧠 Features

### 🎯 Core Features

* 📌 Create, update, and delete events
* ✅ Approve / reject event workflow
* 🔍 Advanced filtering and search
* 🧾 Organized admin dashboard

### 👤 User Features

* Browse events easily
* Clean UI with responsive design
* Real-time updates from backend

### 🛠️ Admin Features

* Manage all events centrally
* Approval system for event moderation
* Structured data handling

---

## 🏗️ Tech Stack

### Frontend

* React (Create React App)
* Axios
* React Router
* CSS

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)

---

## 📁 Project Structure

```bash
golden-curator2/
│
├── backend/
│   ├── config/
│   ├── Controllers/
│   ├── Models/
│   ├── Routes/
│   ├── seed/
│   ├── uploads/
│   └── server.js
│
├── frontend/
│   ├── public/
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

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/mathuppriya-dev/golden-curator2.git
cd golden-curator2
```

---

### 2️⃣ Install Dependencies

#### Backend

```bash
cd backend
npm install
```

#### Frontend

```bash
cd ../frontend
npm install
```

---

## 🔐 Environment Variables

Create `.env` file inside `backend/`

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

---

## ▶️ Run the Project

### Start Backend

```bash
cd backend
npm start
```

---

### Start Frontend

```bash
cd frontend
npm start
```

---

## 🌐 API Endpoints

### Events

* `GET /api/events` → Get all events
* `POST /api/events` → Create event
* `PUT /api/events/:id` → Update event
* `DELETE /api/events/:id` → Delete event

---

## 📦 Deployment

### Recommended Platforms

* Frontend → Vercel / Netlify
* Backend → Render / Railway
* Database → MongoDB Atlas

---

## 🧹 Best Practices Followed

* Clean folder structure
* Separation of concerns (MVC)
* Environment variables secured
* `.gitignore` configured properly
* Scalable backend architecture

---

## 👨‍💻 Author

**Mathuppriya Naguleswaran**

* GitHub: https://github.com/mathuppriya-dev

---

## 📜 License

This project is open-source and available under the MIT License.

