import express from "express";
import { shoeGetController, shoePostController,shoeDeleteController, userPostController,testimonialsPostController,testimonialsGetController, UsersGetController } from "../controllers/shoe.js";

const router=express.Router();

router.get("/",shoeGetController);
router.get("/Users",UsersGetController);
router.get("/testimonials",testimonialsGetController);
router.post("/",shoePostController);
router.post("/createUser",userPostController);
router.post("/createTestimonial",testimonialsPostController);
router.delete("/:id",shoeDeleteController);
export default router;