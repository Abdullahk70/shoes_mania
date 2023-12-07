import express from "express";
import { shoeGetController, shoePostController,shoeDeleteController, userPostController,testimonialsPostController,testimonialsGetController, UsersGetController } from "../controllers/shoe.js";
import multer from "multer";


const router=express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.get("/",shoeGetController);
router.get("/Users",UsersGetController);
router.get("/testimonials",testimonialsGetController);
router.post("/",upload.single('pic'),shoePostController);
router.post("/createUser",userPostController);
router.post("/createTestimonial",testimonialsPostController);
router.delete("/:id",shoeDeleteController);
export default router;