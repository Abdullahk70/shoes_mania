import express from "express";
import { shoeGetController, shoePostController,shoeDeleteController } from "../controllers/shoe.js";

const router=express.Router();

router.get("/",shoeGetController);
router.post("/",shoePostController);
router.delete("/:id",shoeDeleteController)
export default router;