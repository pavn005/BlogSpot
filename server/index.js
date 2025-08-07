import express from 'express';
import postRouter from './routes/posts.js';
import authRouter from './routes/auth.js';
import userRouter from './routes/users.js';
import cors from 'cors'; // Importing CORS for cross-origin requests
import cookieParser from 'cookie-parser'; // Importing cookie-parser for handling cookies
import multer from 'multer';

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
})); // Use CORS middleware to allow cross-origin requests
app.use(express.json()); // Middleware to parse JSON bodies
app.use(cookieParser()); // Middleware to parse cookies

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../client/public/uploads'); // Set the destination for uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, Date.now()+file.originalname)
  }
})


const upload = multer({ storage: storage });

app.post('/api/upload', upload.single('file'), (req, res,next) => {
const file = req.file; // Get the uploaded file from the request
  res.status(200).json(file.filename); // Respond with the filename of the uploaded file

});

app.use('/api/posts', postRouter); // Use the postRouter for routes starting with /posts
app.use('/api/auth',authRouter); // Use the authRouter for routes starting with /api/auth
app.use('/api/users',userRouter); // Use the userRouter for routes starting with /api/users

app.listen(5000,()=>{
    console.log("Server is running on port 5000");
})