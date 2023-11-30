import { shoeModel } from "../models/shoes.js";

export const shoeGetController = async(req, res) => {
    const shoes=await shoeModel.find();
    res.json(shoes);
    
}
export const shoePostController = (req, res) => {
    console.log(req.body);
    const model=new shoeModel({
      name:req.body.name,
      id:req.body.id,
      pic:req.body.pic,
      price:req.body.price,
      description:req.body.description,
      category:req.body.description,
      uploadDate:new Date(),
      size:req.body.size,
    });
    model.save();

}