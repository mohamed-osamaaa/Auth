

https://github.com/user-attachments/assets/a08b6db3-101c-4899-a144-cf09b838fb5c




# Auth - Advanced Authentication System

## Description
This is an advanced authentication system built with Vite, React, Node.js, Express, and MongoDB. It includes features such as user login, signup, logout, and an Admin dashboard. The system tracks profile information like the user's name, email, and activity details (last login, created at). Additionally, it sends designed emails for actions like verification codes, welcome emails, reset password links, and success confirmations.

## Features
- **User Authentication**: Secure login, signup, and logout functionality.
- **Profile Management**: Displays user profile details like name, email, last login time, and account creation time.
- **Admin Dashboard**: Admin panel for monitoring user activities and managing authentication-related tasks.
- **Email Notifications**: Sends verification codes, welcome emails, reset password links, and success confirmations.

## Technologies Used
- **Frontend**: Vite, React
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Token)
- **Email Service**: Mailtrap for email testing

## Environment Variables

To run this project, create a `.env` file in the root directory and define the following variables:

```
MONGO_URI=your_mongodb_connection_string
PORT=your_server_port
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development_or_production

MAILTRAP_TOKEN=your_mailtrap_token
MAILTRAP_ENDPOINT=your_mailtrap_endpoint

USER=your_email_address
APP_PASSWORD=your_app_password

CLIENT_URL=your_frontend_url
```

## Installation

### Clone the repository:

```bash
git clone https://github.com/mohamed-osamaaa/Auth.git
cd Auth
```

### Install dependencies:

For the backend (Node.js, Express):

```bash
cd backend
npm install
```

For the frontend (React):

```bash
cd frontend
npm install
```

### Configure the environment variables:

Create a `.env` file in both the backend and frontend directories and add the required environment variables (as outlined above).

### Running the app:

#### Start the backend:

```bash
cd backend
npm start
```

#### Start the frontend:

```bash
cd frontend
npm run dev
```

### Access the app:

Open your browser and go to `http://localhost:3000` (or the specified `CLIENT_URL` in the `.env` file).

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/feature-name`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/feature-name`)
5. Create a new Pull Request
