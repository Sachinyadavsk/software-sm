import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDb from './db/config.js';
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    const sql = "SELECT * student";
    db.query(sql, (err, data)=>{
        if(err) return app.json('Error');
        return app.json(data)
    })
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});