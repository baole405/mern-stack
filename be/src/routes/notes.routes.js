import express from "express";
import {
  createNote,
  deleteNote,
  getAllNotes,
  getNoteById,
  updateNote,
} from "../controllers/notes.controller.js";
import rateLimiter from "../middleware/rateLimiter.js";

const router = express.Router();

// Apply rate limiter to all routes
router.use(rateLimiter);

router.get("/", getAllNotes);
router.get("/:id", getNoteById);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;
