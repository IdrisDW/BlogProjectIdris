import mysql from "mysql"

export const db = mysql.createConnection({
  host:"localhost",
  // user:"root",
  user: "root",
  password: "admin",
  // password: process.env.DB_KEY,
  database:"blog"
})