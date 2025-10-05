import express from "express";
import notesRoutes from "./routes/notes.routes.js";

const app = express();


app.use("/api/notes", notesRoutes);
// app.get("/api/notes", (req, res) => {
//   res.status(200).send("Hello World!!!");
// });

// app.post("/api/notes", (req, res) => {
//   res.status(201).send("Post Request");
// });

// app.put("/api/notes/:id", (req, res) => {
//   res.status(200).send("Put Request");
// });

// app.delete("/api/notes/:id", (req, res) => {
//   res.status(200).send("Delete Request");
// });


app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
