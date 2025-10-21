# Nurture Health Backend

A Node.js/Express backend API for the Nurture Health platform with MVC architecture.

## Tech Stack

- **Framework**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Security**: bcryptjs for password hashing
- **Architecture**: MVC (Model-View-Controller)
- **CORS**: Enabled for cross-origin requests

## Setup Instructions

1. **Prerequisites**
   - Node.js 16+ installed
   - MongoDB running locally or MongoDB Atlas connection

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   - Create `.env` file in root directory:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/nurture-health
   JWT_SECRET=your-jwt-secret-key
   ```

4. **Start the Server**
   ```bash
   # Development mode with nodemon
   npm run dev
   
   # Production mode
   npm start
   ```

5. **Verify Setup**
   - Server runs on `http://localhost:5000`
   - MongoDB connection established
   - API endpoints accessible at `/api`

## Project Structure

```
nurture-backend/
├── db/
│   └── connection.js        # Database connection
├── models/
│   ├── User.js             # User model
│   └── HealthAssessment.js # Assessment model
├── controllers/
│   ├── authController.js   # Authentication logic
│   └── healthController.js # Health assessment logic
├── routes/
│   ├── authRoutes.js       # Auth endpoints
│   └── healthRoutes.js     # Health endpoints
├── middleware/
│   └── auth.js             # JWT middleware
└── server.js               # Main server file
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Health Assessment (Protected)
- `POST /api/health/assessment` - Submit assessment
- `GET /api/health/history` - Get user history

## Health Scoring

Scoring algorithm based on:
- Sleep Quality (1-5)
- Appetite (1-5)
- Stress Level (1-5, inverted)
- Energy Level (1-5)
- Activity Type (categorical)

Categories:
- 80-100: Excellent
- 60-79: Good
- 40-59: Fair
- 0-39: Poor