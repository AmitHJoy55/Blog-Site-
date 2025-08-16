
# SWEConnect 

> A comprehensive educational platform connecting students and teachers in Software Engineering

##  Overview
SWEConnect serves as a centralized hub for academic resources, blog sharing, and fostering collaboration between students and educators. The platform streamlines access to educational materials while building a supportive academic community.

##  Key Features

### Authentication & Profiles
-  Secure JWT-based authentication
-  Customizable user profiles
-  Role-based access (Student/Teacher/Admin)
-  Profile picture management

### Academic Resources
-  Semester-wise course materials
-  Subject categorization
-  Digital library system
-  Advanced search functionality

### Blog System
-  CRUD operations for blog posts
-  Rich text editor with image support
-  Category management
-  Comment system

### Community Features
-  User interaction tools
-  Admin dashboard
-  Dark/Light theme toggle
-  Responsive design

##  Tech Stack

### Frontend
```typescript
{
    "framework": "React.js",
    "routing": "React Router v6",
    "stateManagement": "React Context",
    "styling": ["CSS3", "Tailwind CSS"],
    "notifications": "React Hot Toast",
    "networking": "Axios"
}

Backend

{
    "runtime": "Node.js",
    "framework": "Express.js",
    "database": "MongoDB",
    "ODM": "Mongoose",
    "authentication": "JWT",
    "fileStorage": "Cloudinary",
    "security": ["bcrypt", "cors"]
}

Getting Started

Prerequisites
  .Node.js (v14+)
  .MongoDB
  .Git

Backend Setup
# Clone repository
git clone https://github.com/AmitHJoy55/Blog-Site-
cd Blog-Site-/Backend

# Install dependencies
npm install

# Configure environment
cp .env.example .env
# Edit .env with your credentials

# Start server
npm run dev


Environment Variables

# Backend (.env)
PORT=4000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
FRONTEND_URL=http://localhost:5173

# Frontend (.env)
VITE_API_URL=http://localhost:4000


* Documentation
API Routes
/api/auth - Authentication endpoints
/api/users - User management
/api/blogs - Blog operations
/api/resources - Educational resources


*Project Structure

sweconnect/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   └── utils/
└── backend/
    ├── controllers/
    ├── models/
    ├── routes/
    └── middleware/