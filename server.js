process.loadEnvFile("./.env");

// Import express
import express from "express";
import taskRoutes from "./task.routes.js";
import { errorHandler } from "./middleware/error.middleware.js";
import { logger } from "./middleware/logger.middleware.js";
import { auth } from "./middleware/auth.middleware.js";
import { connectDB } from "./config/db.js";

// Create the Express application instance
const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/api/tasks", logger);
app.use("/api/tasks", auth);
app.use("/api/tasks", taskRoutes);

// Connect task routes
app.use("/api/tasks", taskRoutes);

// Define a basic route
app.get("/", (req, res) => {
  res.send("Task Manager API is running");
});

// Error handler
app.use(errorHandler);

connectDB();

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
