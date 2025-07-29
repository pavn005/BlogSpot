// Database connection module

import mysql from "mysql2";  // import mysql2 for eliminating axios error 0f 500

export const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root@123",
    database:"blogdb"
});