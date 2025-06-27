## NoteVerse Backend

## 📌 Project Overview 
NoteVerse Backend is the secure and scalable backend API for the NoteVerse application. It is built using Node.js, Express.js, and MongoDB, providing complete CRUD operations and download feature for notes , user authentication via JWT, secure password hashing, AES-256 encrypted data storage, and support for real-time user feedback.

🚀 Features
1. 👤 User authentication using **JWT**  
2. 🔐 Passwords hashed with **bcrypt**  
3. 🔒 Notes data encrypted with **AES-256 (CryptoJS)**  
4. 📁 Full **CRUD operations** for notes  
5. 🧠 Middleware-based **route protection**  
6. 📊 **Audit logging** system to track user activity  
7. ⚙️ **Scalable architecture** with modular routing  
8. 🧪 Input **validation and error handling**  
9. 🌍 **RESTful API** structure for seamless frontend integration  
10. 🔍 **User info and profile management**

## 🛠️ Tech Stack


1. 🟢 **Node.js** – JavaScript runtime  
2. ⚙️ **Express.js** – Web framework  
3. 🍃 **MongoDB & Mongoose** – Database and ODM  
4. 🛡️ **JWT** – Authentication  
5. 🔑 **Bcrypt.js** – Password hashing  
6. 🔐 **CryptoJS** – AES-256 encryption  
7. 🔄 **CORS & dotenv** – Configuration and environment management  


## 🛠️ Installation & Setup

1️⃣ **Clone the Repository**
```sh
git clone https://github.com/your-username/noteverse-backend.git
cd noteverse-backend
```

2️⃣ **Install Dependencies**
```sh
npm install
```


3️⃣ **Set Up Environment Variables**
Create a `.env` file in the root directory:
```env

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CRYPTO_SECRET=your_crypto_secret
```

4️⃣**Run the Development Server**
```sh
npm run dev
```

5️⃣**Build for Production**
```sh
npm run build
```


📄 License
This project is licensed under the MIT License.





