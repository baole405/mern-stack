import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db.js";
import notesRoutes from "./routes/notes.routes.js";
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); //middleware
app.use(rateLimiter); // Apply rate limiter globally
app.use(cors())

app.use("/api/notes", notesRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
