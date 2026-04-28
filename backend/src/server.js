import express from "express";

import tasksRouter from "./routes/tasksRouters.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

import cors from "cors";
import e from "express";

dotenv.config();

const PORT = process.env.PORT || 5001;

const app = express();

//middleware
app.use(express.json());

// Cấu hình CORS cho phép Vercel (khi deploy) và localhost (khi code)
app.use(cors({ 
  origin: [process.env.CLIENT_URL, "http://localhost:5173"],
  credentials: true 
}));

app.use("/api/tasks", tasksRouter);

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(
        `Server is running on port ${PORT}: http://localhost:${PORT}`,
      );
    });
  })
  .catch((error) => {
    console.error("Lỗi kết nối cơ sở dữ liệu:", error);
    process.exit(1);
  });
