# StarterCode-Full-Stack-Laravel-NextJS

**A production-ready full-stack starter template with Laravel backend, Next.js frontend, MySQL database, and complete authentication system**

---

## Overview

StarterCode-Full-Stack-Laravel-NextJS is a modern, scalable boilerplate that provides a complete foundation for building full-stack web applications. This template comes with a pre-configured authentication system, database setup, API infrastructure, and a responsive frontend ready for immediate development.

**What's Included:**
- Complete authentication system (registration, login, logout, password reset)
- RESTful API with Laravel backend
- Modern React-based frontend with Next.js
- MySQL database with migrations
- CORS configuration for seamless frontend-backend communication
- TypeScript support for type-safe development

**Perfect for:**
- SaaS applications
- E-commerce platforms
- Admin dashboards
- API-driven web apps
- Rapid prototyping with authentication

---

## Tech Stack

### Frontend
- **Next.js 14+** - React framework with server-side rendering
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **React Hooks** - Modern state management

### Backend
- **Laravel 11** - PHP framework for web applications
- **Laravel Sanctum** - API authentication system
- **RESTful API** - Standardized API endpoints
- **Eloquent ORM** - Database query builder

### Database
- **MySQL 8.0+** - Relational database
- **Migrations** - Version-controlled database schema
- **Seeders** - Sample data generation

---

## Features

### Authentication System
- User registration with email verification
- Secure login/logout functionality
- Password reset via email
- Token-based API authentication (Laravel Sanctum)
- Protected routes on frontend and backend
- Session management
- CSRF protection

### Frontend Features
- Pre-built authentication pages (login, register, forgot password)
- Protected dashboard layout
- API integration utilities
- Form validation
- Error handling
- Responsive design
- Loading states and feedback

### Backend Features
- Authentication API endpoints
- User management
- Role-based access control ready
- Request validation
- Error handling middleware
- CORS configured for frontend
- API rate limiting
- Secure password hashing

### Database Setup
- User table with authentication fields
- Password reset tokens table
- Migration files for easy setup
- Seeder for test users
- Foreign key relationships configured

---

## Prerequisites

Before you begin, ensure you have the following installed:

- **PHP** 8.1 or higher
- **Composer** 2.x
- **Node.js** 18.x or higher
- **MySQL** 8.0 or higher
- **npm** or **yarn**
- **Git**

---

## Installation Guide

### Step 1: Clone the Repository

```bash
git clone https://github.com/NishulDhakar/StarterCode-Laravel-NextJS.git
cd StarterCode-Laravel-NextJS
```

---

## Backend Setup (Laravel + MySQL)

### Step 2: Navigate to Backend Directory

```bash
cd backend
```

### Step 3: Install PHP Dependencies

```bash
composer install
```

### Step 4: Environment Configuration

Copy the example environment file:

```bash
cp .env.example .env
```

Open the `.env` file and configure your database connection:

```env
APP_NAME=StarterCode
APP_ENV=local
APP_KEY=
APP_DEBUG=true
APP_URL=http://localhost:8000

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel_nextjs_db
DB_USERNAME=root
DB_PASSWORD=your_password

# Frontend URL for CORS
FRONTEND_URL=http://localhost:3000
SANCTUM_STATEFUL_DOMAINS=localhost:3000

# Mail Configuration (for password reset emails)
MAIL_MAILER=smtp
MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USERNAME=your_username
MAIL_PASSWORD=your_password
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=noreply@startercode.com
MAIL_FROM_NAME="${APP_NAME}"
```

### Step 5: Create Database

Create a new MySQL database:

```bash
mysql -u root -p
```

```sql
CREATE DATABASE laravel_nextjs_db;
EXIT;
```

### Step 6: Generate Application Key

```bash
php artisan key:generate
```

### Step 7: Run Database Migrations

This will create all necessary tables including users, password_resets, and personal_access_tokens:

```bash
php artisan migrate
```

### Step 8: Seed Database (Optional)

Create a test user for development:

```bash
php artisan db:seed
```

This creates a default user:
- **Email:** test@example.com
- **Password:** password

### Step 9: Start Laravel Development Server

```bash
php artisan serve
```

**Backend API running at:** `http://localhost:8000`

**Test the API:**
```bash
curl http://localhost:8000/api/health
```

---

## Frontend Setup (Next.js)

### Step 10: Navigate to Frontend Directory

Open a new terminal window:

```bash
cd frontend
```

### Step 11: Install Node Dependencies

```bash
npm install
# or
yarn install
```

### Step 12: Environment Configuration

Create environment file:

```bash
cp .env.example .env.local
```

Update `.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api
NEXT_PUBLIC_APP_NAME=StarterCode
```

### Step 13: Start Next.js Development Server

```bash
npm run dev
# or
yarn dev
```

**Frontend application running at:** `http://localhost:3000`

---

## Authentication Setup Complete

Your application is now fully configured with authentication! You can:

1. **Register a new account:** Visit `http://localhost:3000/register`
2. **Login:** Visit `http://localhost:3000/login`
3. **Access protected dashboard:** Visit `http://localhost:3000/dashboard` (requires login)
4. **Test API authentication:** Use the provided API endpoints

---

## API Endpoints

### Authentication Endpoints

| Method | Endpoint | Description | Authentication |
|--------|----------|-------------|----------------|
| POST | `/api/register` | Register new user | No |
| POST | `/api/login` | User login | No |
| POST | `/api/logout` | User logout | Yes |
| GET | `/api/user` | Get authenticated user | Yes |
| POST | `/api/forgot-password` | Request password reset | No |
| POST | `/api/reset-password` | Reset password | No |

### Example API Usage

**Register User:**
```bash
curl -X POST http://localhost:8000/api/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123",
    "password_confirmation": "password123"
  }'
```

**Login:**
```bash
curl -X POST http://localhost:8000/api/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "password123"
  }'
```

**Get Authenticated User:**
```bash
curl -X GET http://localhost:8000/api/user \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

---

## Project Structure

```
StarterCode-Laravel-NextJS/
│
├── backend/                           # Laravel Backend
│   ├── app/
│   │   ├── Http/
│   │   │   ├── Controllers/
│   │   │   │   └── Auth/             # Authentication controllers
│   │   │   └── Middleware/
│   │   │       └── Authenticate.php  # Auth middleware
│   │   ├── Models/
│   │   │   └── User.php              # User model
│   │   └── Providers/
│   ├── routes/
│   │   ├── api.php                   # API routes with auth
│   │   └── web.php
│   ├── database/
│   │   ├── migrations/
│   │   │   ├── create_users_table.php
│   │   │   ├── create_password_resets_table.php
│   │   │   └── create_personal_access_tokens_table.php
│   │   └── seeders/
│   │       └── UserSeeder.php        # Test user seeder
│   ├── config/
│   │   ├── auth.php                  # Auth configuration
│   │   ├── sanctum.php               # API auth config
│   │   └── cors.php                  # CORS settings
│   └── .env.example
│
├── frontend/                          # Next.js Frontend
│   ├── src/
│   │   ├── app/
│   │   │   ├── (auth)/               # Auth pages group
│   │   │   │   ├── login/
│   │   │   │   ├── register/
│   │   │   │   └── forgot-password/
│   │   │   ├── (protected)/          # Protected pages group
│   │   │   │   └── dashboard/
│   │   │   └── layout.tsx
│   │   ├── components/
│   │   │   ├── auth/                 # Auth components
│   │   │   └── ui/                   # UI components
│   │   ├── lib/
│   │   │   ├── api.ts                # API utilities
│   │   │   └── auth.ts               # Auth helpers
│   │   ├── hooks/
│   │   │   └── useAuth.ts            # Auth hook
│   │   └── middleware.ts             # Route protection
│   └── .env.example
│
└── README.md
```

---

## Database Schema

### Users Table

| Column | Type | Description |
|--------|------|-------------|
| id | BIGINT | Primary key |
| name | VARCHAR | User's full name |
| email | VARCHAR | Unique email address |
| email_verified_at | TIMESTAMP | Email verification timestamp |
| password | VARCHAR | Hashed password |
| remember_token | VARCHAR | Remember me token |
| created_at | TIMESTAMP | Creation timestamp |
| updated_at | TIMESTAMP | Last update timestamp |

### Password Resets Table

| Column | Type | Description |
|--------|------|-------------|
| email | VARCHAR | User's email |
| token | VARCHAR | Reset token |
| created_at | TIMESTAMP | Token creation time |

### Personal Access Tokens Table

| Column | Type | Description |
|--------|------|-------------|
| id | BIGINT | Primary key |
| tokenable_type | VARCHAR | Model type |
| tokenable_id | BIGINT | Model ID |
| name | VARCHAR | Token name |
| token | VARCHAR | Hashed token |
| abilities | TEXT | Token permissions |
| last_used_at | TIMESTAMP | Last usage time |
| expires_at | TIMESTAMP | Expiration time |
| created_at | TIMESTAMP | Creation timestamp |
| updated_at | TIMESTAMP | Update timestamp |

---

## Authentication Flow

### Registration Flow
1. User submits registration form on frontend
2. Frontend sends POST request to `/api/register`
3. Backend validates input and creates user
4. Password is hashed using bcrypt
5. User record saved to database
6. Authentication token generated
7. Token returned to frontend
8. User automatically logged in

### Login Flow
1. User submits login credentials
2. Frontend sends POST request to `/api/login`
3. Backend validates credentials
4. If valid, authentication token generated
5. Token stored in frontend (localStorage/cookies)
6. User redirected to dashboard
7. Subsequent requests include token in headers

### Protected Routes
1. User attempts to access protected route
2. Middleware checks for valid token
3. Token validated against database
4. If valid, request proceeds
5. If invalid, user redirected to login

---

## Common Commands

### Backend Commands

```bash
# Clear all caches
php artisan optimize:clear

# Create new migration
php artisan make:migration create_posts_table

# Create model with migration
php artisan make:model Post -m

# Create controller
php artisan make:controller PostController

# Create seeder
php artisan make:seeder PostSeeder

# Run seeders
php artisan db:seed

# Rollback migrations
php artisan migrate:rollback

# Reset database
php artisan migrate:fresh --seed

# Create new API route
# Edit routes/api.php
```

### Frontend Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Lint code
npm run lint

# Type check
npm run type-check
```

---

## Configuration Details

### CORS Configuration

The backend is configured to accept requests from your frontend. In `config/cors.php`:

```php
'paths' => ['api/*', 'sanctum/csrf-cookie'],
'allowed_origins' => [env('FRONTEND_URL', 'http://localhost:3000')],
'allowed_methods' => ['*'],
'allowed_headers' => ['*'],
'supports_credentials' => true,
```

### Sanctum Configuration

API authentication is handled by Laravel Sanctum. Configuration in `config/sanctum.php`:

```php
'stateful' => explode(',', env('SANCTUM_STATEFUL_DOMAINS', 'localhost:3000')),
'expiration' => null, // Tokens don't expire
'middleware' => [
    'verify_csrf_token' => App\Http\Middleware\VerifyCsrfToken::class,
    'encrypt_cookies' => App\Http\Middleware\EncryptCookies::class,
],
```

---

## Troubleshooting

### Backend Issues

**Problem:** Database connection refused

**Solution:** 
- Verify MySQL is running: `sudo systemctl status mysql`
- Check database credentials in `.env`
- Ensure database exists: `SHOW DATABASES;`

**Problem:** 419 CSRF token mismatch

**Solution:**
- Clear Laravel cache: `php artisan config:clear`
- Verify CORS settings in `config/cors.php`
- Check `SANCTUM_STATEFUL_DOMAINS` in `.env`

**Problem:** Migration errors

**Solution:**
- Drop all tables and re-migrate: `php artisan migrate:fresh`
- Check database user permissions
- Verify migration file syntax

### Frontend Issues

**Problem:** API connection refused

**Solution:**
- Verify backend is running on `http://localhost:8000`
- Check `NEXT_PUBLIC_API_URL` in `.env.local`
- Test API endpoint with curl

**Problem:** Authentication not persisting

**Solution:**
- Check token storage implementation
- Verify API token is included in request headers
- Check browser console for errors

**Problem:** CORS errors

**Solution:**
- Verify `FRONTEND_URL` in backend `.env`
- Check CORS configuration in `config/cors.php`
- Ensure credentials are included in fetch requests

### Database Issues

**Problem:** Access denied for user

**Solution:**
- Verify MySQL user exists: `SELECT User FROM mysql.user;`
- Grant permissions: `GRANT ALL PRIVILEGES ON laravel_nextjs_db.* TO 'root'@'localhost';`
- Flush privileges: `FLUSH PRIVILEGES;`

---

## Security Best Practices

### For Production Deployment

**Backend:**
- Set `APP_ENV=production` in `.env`
- Set `APP_DEBUG=false` in `.env`
- Use strong `APP_KEY`
- Enable HTTPS only
- Configure proper CORS origins
- Set up database backups
- Use environment variables for secrets
- Enable rate limiting on API routes
- Keep Laravel and dependencies updated

**Frontend:**
- Store tokens securely (httpOnly cookies recommended)
- Implement CSRF protection
- Sanitize user inputs
- Use environment variables for API URLs
- Enable HTTPS
- Implement proper error handling
- Add request/response interceptors
- Set up proper Content Security Policy

**Database:**
- Use strong passwords
- Limit database user permissions
- Enable SSL connections
- Regular backups
- Keep MySQL updated
- Monitor for suspicious activity

---

## Testing

### Backend Tests

```bash
cd backend

# Run all tests
php artisan test

# Run specific test file
php artisan test tests/Feature/AuthenticationTest.php

# Run with coverage
php artisan test --coverage
```

### Frontend Tests

```bash
cd frontend

# Run all tests
npm run test

# Run in watch mode
npm run test:watch

# Run with coverage
npm run test:coverage
```

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

### Contribution Guidelines

- Follow existing code style
- Write tests for new features
- Update documentation
- Ensure all tests pass
- Keep commits atomic and descriptive

---

## License

This project is licensed under the MIT License. You are free to use, modify, and distribute this software as long as proper credit is given.

---

## Support

For questions, issues, or feature requests, please open an issue on GitHub.

---

## Acknowledgments

Built with:
- [Laravel](https://laravel.com/) - Backend framework
- [Next.js](https://nextjs.org/) - Frontend framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [MySQL](https://www.mysql.com/) - Database
- [Laravel Sanctum](https://laravel.com/docs/sanctum) - API authentication

---

**Happy Coding!**

