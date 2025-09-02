import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import mongoose from "mongoose"


dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())


const PORT = process.env.PORT || 3000
const URL = process.env.URL

mongoose.connect(URL)
  .then(() => {
    console.log("Database Connected!");
  })
  .catch((err) => {
    console.error("Database Connection Failed:", err.message);
    process.exit(1);
  });


app.get('/', (req, res) => {
  res.json({ message: 'Hello from TriMedi Backend!' });
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
