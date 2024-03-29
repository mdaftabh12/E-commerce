import express from "express";
import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";
import { createCategory } from "../controllers/categoryController.js";
const router = express.Router();

router.route("/").post(createCategory);

export default router;
