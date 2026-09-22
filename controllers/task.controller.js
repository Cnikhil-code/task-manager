import { tasks, getNextId } from "../data/tasks.js";

export const getTasks = (req, res) => {
  res.json(tasks);
};

export const getTaskById = (req, res) => {
  const taskId = req.params.id;

  const task = tasks.find((task) => task.id === Number(taskId));

  if (!task) {
    const error = new Error("Task not found");
    error.statusCode = 404;

    throw error;
  }

  res.json(task);
};

export const createTask = (req, res) => {
  if (!req.body.title) {
    const error = new Error("Title is required");
    error.statusCode = 400;

    throw error;
  }

  const task = {
    id: getNextId(),
    ...req.body,
  };

  tasks.push(task);

  res.status(201).json(task);
};

export const updateTask = (req, res) => {
  const taskId = req.params.id;

  const task = tasks.find((task) => task.id === number(taskId));

  if (!task) {
    const error = new Error("Task not found");
    error.statusCode = 404;

    throw error;
  }

  if (!req.body.title) {
    const error = new Error("Title is required");
    error.statusCode = 400;

    throw error;
  }

  task.title = req.body.title;

  res.json(task);
};

export const deleteTask = (req, res) => {
  const taskId = req.params.id;

  const taskIndex = tasks.findIndex((task) => task.id === Number(taskId));

  if (taskIndex === -1) {
    const error = new Error("Task not found");
    error.statusCode = 404;

    throw error;
  }

  tasks.slice(taskIndex, -1);

  res.json({
    message: "Task deleted successfully",
  });
};
