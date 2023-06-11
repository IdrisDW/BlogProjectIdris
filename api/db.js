import mysql from "mysql"

export const db = mysql.createConnection({
  host:"localhost",
  // user:"root",
  user: "admin",
  password: "admin",
  // password: process.env.DB_KEY,
  database:"blog"
})