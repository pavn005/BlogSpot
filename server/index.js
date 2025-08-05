import express from 'express';
import postRouter from './routes/posts.js';
import authRouter from './routes/auth.js';
import userRouter from './routes/users.js';
import cors from 'cors'; // Importing CORS for cross-origin requests
import cookieParser from 'cookie-parser'; // Importing cookie-parser for handling cookies

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
})); // Use CORS middleware to allow cross-origin requests
app.use(express.json()); // Middleware to parse JSON bodies
app.use(cookieParser()); // Middleware to parse cookies
app.use('/api/posts', postRouter); // Use the postRouter for routes starting with /posts
app.use('/api/auth',authRouter); // Use the authRouter for routes starting with /api/auth
app.use('/api/users',userRouter); // Use the userRouter for routes starting with /api/users

app.listen(5000,()=>{
    console.log("Server is running on port 5000");
})