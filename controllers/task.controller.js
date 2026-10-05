import Task from "../models/task.js";
import mongoose from "mongoose";

// GET all tasks
export const getTasks = async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
};

// GET task by ID
export const getTaskById = async (req, res) => {
  // Validate ID
  if (!mongoose.isObjectIdOrHexString(req.params.id)) {
    const error = new Error("Invalid task ID");
    error.statusCode = 400;
    throw error;
  }

  const task = await Task.findById(req.params.id);

  if (!task) {
    const error = new Error("Task not found");
    error.statusCode = 404;
    throw error;
  }

  res.json(task);
};

// CREATE a new task
export const createTask = async (req, res) => {
  // Validate title
  if (typeof req.body.title !== "string" || req.body.title.trim() === "") {
    const error = new Error("Title is required");
    error.statusCode = 400;
    throw error;
  }

  const task = await Task.create({
    title: req.body.title.trim(),
    completed: req.body.completed,
  });

  res.status(201).json(task);
};

// UPDATE a task
export const updateTask = async (req, res) => {
  // Validate ID
  if (!mongoose.isObjectIdOrHexString(req.params.id)) {
    const error = new Error("Invalid task ID");
    error.statusCode = 400;
    throw error;
  }

  // Validate title
  if (typeof req.body.title !== "string" || req.body.title.trim() === "") {
    const error = new Error("Title is required");
    error.statusCode = 400;
    throw error;
  }

  const task = await Task.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.title.trim(),
      completed: req.body.completed,
    },
    {
      new: true,
      runValidators: true,
    },
  );

  if (!task) {
    const error = new Error("Task not found");
    error.statusCode = 404;
    throw error;
  }

  res.json(task);
};

// DELETE a task
export const deleteTask = async (req, res) => {
  // Validate ID
  if (!mongoose.isObjectIdOrHexString(req.params.id)) {
    const error = new Error("Invalid task ID");
    error.statusCode = 400;
    throw error;
  }

  const task = await Task.findByIdAndDelete(req.params.id);

  if (!task) {
    const error = new Error("Task not found");
    error.statusCode = 404;
    throw error;
  }

  res.json({
    message: "Task deleted successfully",
  });
};

// PATCH a task (partial update)
export const patchTask = async (req, res) => {
  // Validate ID
  if (!mongoose.isObjectIdOrHexString(req.params.id)) {
    const error = new Error("Invalid task ID");
    error.statusCode = 400;
    throw error;
  }

  const updates = {};

  if (req.body.title !== undefined) {
    if (typeof req.body.title !== "string" || req.body.title.trim() === "") {
      const error = new Error("Title is required");
      error.statusCode = 400;
      throw error;
    }

    updates.title = req.body.title.trim();
  }

  if (req.body.completed !== undefined) {
    if (typeof req.body.completed !== "boolean") {
      const error = new Error("Completed must be a boolean");
      error.statusCode = 400;
      throw error;
    }

    updates.completed = req.body.completed;
  }

  if (Object.keys(updates).length === 0) {
    const error = new Error("At least one field is required");
    error.statusCode = 400;
    throw error;
  }

  const task = await Task.findByIdAndUpdate(
    req.params.id,
    { $set: updates },
    { new: true, runValidators: true },
  );

  if (!task) {
    const error = new Error("Task not found");
    error.statusCode = 404;
    throw error;
  }

  res.json(task);
};
