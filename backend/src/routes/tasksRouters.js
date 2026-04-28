import express from "express";
import { getAllTasks } from "../controllers/tasksControllers.js";
import { createTask } from "../controllers/tasksControllers.js";
import { updateTask } from "../controllers/tasksControllers.js";
import { deleteTask } from "../controllers/tasksControllers.js";

const router = express.Router();

router.get("/", getAllTasks);

router.post("/", createTask);

router.put("/:id", updateTask);

router.delete("/:id", deleteTask);

export default router;
