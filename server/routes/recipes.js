import { Router } from "express";
import { createrecipes,getrecipes,getrecipe,getsavedrecipes,updaterecipes} from "../controllers/recipes.js";
const router = Router();


router.post("/", createrecipes);

router.get("/",getrecipes);
router.get("/savedrecipes/id", getrecipe)
router.get("/savedrecipes",getsavedrecipes)

router.put("/", updaterecipes)


export default router;