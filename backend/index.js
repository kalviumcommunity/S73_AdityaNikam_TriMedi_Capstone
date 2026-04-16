import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import mongoose from "mongoose"
import authRoutes from "./routes/auth.js"


dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())
app.use("/api/auth", authRoutes)


const PORT = process.env.PORT || 3000
const MONGODB_URI = process.env.MONGODB_URI || process.env.URL

if (!MONGODB_URI) {
  console.error("Database Connection Failed: Add MONGODB_URI to backend/.env");
  process.exit(1);
}

mongoose.connect(MONGODB_URI)
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
