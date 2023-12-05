import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema({
   name: String,
   description: String,
   
});

export const testimonialModel = mongoose.model("testimonial", testimonialSchema);