
📌 Project Overview
NoteVerse Backend is the secure and scalable backend API for the NoteVerse application. It is built using Node.js, Express.js, and MongoDB, providing complete CRUD operations for notes and folders, user authentication via JWT, secure password hashing, AES-256 encrypted data storage, and support for real-time user feedback.

.

🚀 Features
👤 User authentication using JWT

🔐 Passwords hashed with bcrypt

🔒 Notes data encrypted with AES-256 (CryptoJS)

📁 Full CRUD operations for notes and folders

🧠 Middleware-based route protection

📊 Audit logging system to track user activity

⚙️ Scalable architecture with modular routing

🧪 Input validation and error handling

🌍 RESTful API structure for seamless frontend integration

🔍 User info and profile management

🛠️ Tech Stack

🟢 Node.js (JavaScript runtime)

⚙️ Express.js (web framework)

🍃 MongoDB & Mongoose (database + ODM)

🛡️ JWT (for authentication)

🔑 Bcrypt.js (password hashing)

🔐 CryptoJS (AES encryption)

🔄 CORS & dotenv (config and security)

📁 Modular folder structure

🛠️ Installation & Setup

1️⃣ Clone the Repository
sh

git clone https://github.com/your-username/noteverse-backend.git
cd noteverse-backend

2️⃣ Install Dependencies
sh

npm install


3️⃣ Set Up Environment Variables
Create a .env file in the root directory:

env

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CRYPTO_SECRET=your_crypto_secret

4️⃣ Run the Development Server
sh

npm run dev


5️⃣ Build for Production
sh

npm run build


📄 License
This project is licensed under the MIT License.





