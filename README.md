# PassportJs Node App

Simple full-stack authentication project built with:

- React
- Node.js
- Express
- Passport.js
- Google OAuth 2.0
- GitHub OAuth

## Project Structure

```text
PassportjsApp/
├── backend/
└── client/
```

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/omnyazer/PassportJs-node-App.git
cd PassportjsApp
```

### 2. Install dependencies

Backend:

```bash
cd backend
npm install
```

Frontend:

```bash
cd ../client
npm install
```

## Environment Variables

Create a `backend/.env` file and add your OAuth credentials:

```env
PORT=5000
CLIENT_URL=http://localhost:3000
SESSION_SECRET=change_this_secret

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_CALLBACK_URL=http://localhost:5000/auth/google/callback

GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
GITHUB_CALLBACK_URL=http://localhost:5000/auth/github/callback
```

## Run the Project

### Start the backend

```bash
cd backend
npm start
```

### Start the frontend

```bash
cd client
npm start
```

## Available URLs

- Frontend: `http://localhost:3000`
- Backend: `http://localhost:5000`

## Features

- Google login
- GitHub login
- Session-based authentication
- Protected post detail page
- Logout

