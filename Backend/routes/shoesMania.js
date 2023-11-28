import express from "express";
import { shoeGetController, shoePostController } from "../controllers/shoe.js";

const router=express.Router();

router.get("/",shoeGetController);
router.post("/",shoePostController);
export default router;