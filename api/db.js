import mysql from "mysql"

export const db = mysql.createConnection({
  host:"localhost",
  // user:"root",
  user: "newuser",
  password: "admin",
  // password: process.env.DB_KEY,
  database:"blog"
})