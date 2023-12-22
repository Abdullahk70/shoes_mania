import express from "express";
import { shoeGetController, shoePostController,shoeDeleteController, userPostController,testimonialsPostController,testimonialsGetController, UserLoginController } from "../controllers/shoe.js";

const router=express.Router();

router.get("/",shoeGetController);
router.post("/userLogin",UserLoginController);
router.get("/testimonials",testimonialsGetController);
router.post("/",shoePostController);
router.post("/createUser",userPostController);
router.post("/createTestimonial",testimonialsPostController);
router.delete("/:id",shoeDeleteController);
export default router;