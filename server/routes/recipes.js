import { Router } from "express";
import { createrecipes,getrecipes } from "../controllers/recipes.js";
const router = Router();

router.get("/",getrecipes);
router.post("/", createrecipes)
// router.put("/", updaterecipes)

export default router;