import express from "express";

import {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
  patchTask,
} from "./controllers/task.controller.js";

const router = express.Router();

// GET all tasks
router.get("/", getTasks);

// GET one task
router.get("/:id", getTaskById);

// CREATE task
router.post("/", createTask);

// PUT task
router.put("/:id", updateTask);

// DELETE task
router.delete("/:id", deleteTask);

// PATCH task
router.patch("/:id", patchTask);

export default router;
