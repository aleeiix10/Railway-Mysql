import express from "express";
import { PORT } from "./config.js";
import { pool } from "./db.js";

const app = express()

app.get('/', (req,res) => {
    res.send("No soy pijo ni tengo piano pero me gusta la pija y soy un marrano")
})

app.get('/test',async (req,res) => {
    let result = await pool.query("SELECT * FROM city");
    res.json(result[0])
})


app.listen(PORT,()=>{
    console.log(`Server on port: ${PORT}`);
})


