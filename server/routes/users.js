import { Router } from "express";
import { register, login } from "../controllers/users.js";

const router = Router();

router.post("/register", register); // Corrected route path
router.post("/login", login);

export default router;