import { db } from '../db.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'; // import jwt for token generation this ensures extra security while updating and deleting posts ensuring that only the user who created the post can update or delete it 


export const register = (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const q = "SELECT * FROM users WHERE email = ? OR username = ?";

  db.query(q, [email, username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json("User already exists!");

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const insertQuery = "INSERT INTO users(`username`,`email`,`password`) VALUES (?)";
    const values = [username, email, hash];

    // ✅ NEST values in another array
    db.query(insertQuery, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("User has been created.");
    });
  });
};



export const login = (req, res) => {
  //CHECK User

  const q = "select * from users where username=?"

  db.query(q,[req.body.username],(err,data)=>{
    if(err) return res.json(err);
    if(data.length === 0) return res.status(404).json("User Not found")

    // if USER exists then check password

    const isPasswordCorrect = bcrypt.compareSync(req.body.password,data[0].password) // by default it returns arr of users so you are choosing 1 among them

    if(!isPasswordCorrect) return res.status(400).json("Wrong Password or Username!!!")

  const token = jwt.sign({id : data[0].id},"jwtkey"); // Generate JWT token with user ID
  const { password, ...other } = data[0]; // Exclude password from the response

  res.cookie("access_token", token, {
    httpOnly: true, // Ensures the cookie is not accessible via JavaScript but only via api requests
  }).status(200).json(other); // Send other user data excluding password
})
}

export const logout = (req, res) => {
  // Logout logic here
  res.clearCookie("access_token", {
    sameSite: "none", // Clear the cookie
    secure: true // Ensure the cookie is cleared securely
  }).status(200).json("User has been logged out.");
}   


// Backend Issue in post method resolve it