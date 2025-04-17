
# 📝 MERN Stack To-Do App

A simple and clean **To-Do application** built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js).  
This project helps users **create**, **read**, **update**, and **delete** (CRUD) their daily tasks efficiently.

## 🚀 Features

- Add new tasks
- View all tasks
- Edit existing tasks
- Delete tasks
- Responsive UI
- Connected to a MongoDB database for persistent storage

## 🛠 Tech Stack

- **Frontend:** React.js, Axios, CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Tools:** Postman (for API testing), Vite or Create React App (depending on setup)

## 📂 Folder Structure

```
client/    # React frontend
server/    # Node.js + Express backend
```

## 🧩 How It Works

1. The frontend sends API requests to the backend.
2. The backend handles the logic and interacts with the MongoDB database.
3. MongoDB stores all the tasks.
4. Data flows smoothly between client and server with RESTful APIs.

## 🧪 Installation & Setup

1. Clone the repository
   ```bash
   git clone <your-repo-link>
   ```
2. Install frontend dependencies
   ```bash
   cd client
   npm install
   ```
3. Install backend dependencies
   ```bash
   cd server
   npm install
   ```
4. Create a `.env` file in `server/` and add your MongoDB connection string:
   ```
   MONGO_URI=your_mongodb_connection_url
   ```
5. Start the backend server
   ```bash
   npm run server
   ```
6. Start the frontend
   ```bash
   npm start
   ```

✅ Now your app should be running on `http://localhost:3000` (frontend) and `http://localhost:5000` (backend)!

## 🎯 Future Improvements

- User authentication (Login/Signup)
- Add due dates or priority to tasks
- Deploy on platforms like Vercel (frontend) and Render (backend)
- Dark mode UI

## 🙌 Acknowledgements

This project helped me learn and understand the MERN stack basics, CRUD operations, and how frontend and backend connect in a full-stack application!

