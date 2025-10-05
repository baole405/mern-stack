import express from "express";
import notesRoutes from "./routes/notes.routes.js";
import connectDB from "./config/db.js";

const app = express();

connectDB();

app.use("/api/notes", notesRoutes);


app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
