⚡ StarterCode-Full-Stack-Laravel-NextJS

A modern full-stack starter template combining Laravel, Next.js, and MySQL — designed to get your next project up and running fast.
Comes with a clean backend API setup and a preconfigured frontend ready for integration.

🛠️ Tech Stack
🎨 Frontend

Next.js — React framework for server-side rendering & static site generation

Tailwind CSS — utility-first CSS framework for rapid UI design

🧠 Backend

Laravel — elegant PHP framework for robust backend APIs and authentication

MySQL — relational database for structured and scalable data management

📝 Language

TypeScript (Frontend) — for type safety and scalability

PHP (Backend) — for backend logic and RESTful API handling

🚀 Getting Started
1️⃣ Clone the Repository
git clone https://github.com/NishulDhakar/StarterCode-Laravel-NextJS.git
cd StarterCode-Laravel-NextJS

⚙️ Backend Setup (Laravel)
2️⃣ Navigate to the Backend Folder
cd backend

3️⃣ Install Dependencies
composer install

4️⃣ Configure Environment Variables

Duplicate the .env.example file and rename it to .env.
Then, update your database credentials:

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=your_database_name
DB_USERNAME=your_username
DB_PASSWORD=your_password

5️⃣ Generate App Key and Migrate Database
php artisan key:generate
php artisan migrate

6️⃣ Run the Laravel Server
php artisan serve


Your backend will now run on http://localhost:8000

💻 Frontend Setup (Next.js)
7️⃣ Navigate to the Frontend Folder
cd ../frontend

8️⃣ Install Dependencies
npm install

9️⃣ Create Environment File

Create a .env.local file in your frontend directory:

NEXT_PUBLIC_API_URL=http://localhost:8000/api

🔟 Start the Next.js App
npm run dev


Your frontend will now run on http://localhost:3000

🧩 Folder Structure
StarterCode-Laravel-NextJS/
│
├── backend/              # Laravel API
│   ├── app/
│   ├── routes/
│   ├── database/
│   └── .env
│
├── frontend/             # Next.js client
│   ├── pages/
│   ├── components/
│   └── .env.local
│
└── README.md

🧠 Example .env.example Files
Backend (backend/.env.example)
APP_NAME=Laravel
APP_ENV=local
APP_KEY=
APP_DEBUG=true
APP_URL=http://localhost:8000

LOG_CHANNEL=stack
LOG_LEVEL=debug

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel_nextjs_db
DB_USERNAME=root
DB_PASSWORD=

BROADCAST_DRIVER=log
CACHE_DRIVER=file
FILESYSTEM_DISK=local
QUEUE_CONNECTION=sync
SESSION_DRIVER=file
SESSION_LIFETIME=120

Frontend (frontend/.env.example)
NEXT_PUBLIC_API_URL=http://localhost:8000/api

🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to fork this repo and submit a pull request.

If you find this project helpful, consider giving it a ⭐ on GitHub!

📄 License

This project is licensed under the MIT License.
You’re free to use, modify, and distribute it as long as proper credit is given.

✨ Happy Coding with Laravel + Next.js + MySQL! ✨

