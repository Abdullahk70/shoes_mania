import { shoeModel } from "../models/shoes.js";

export const shoeGetController = async(req, res) => {
    const shoes=await shoeModel.find();
    res.json(shoes);
    
}
export const shoeDeleteController = async(req, res) => {
  const id=req.param.id;
  console.log(id);
  // await shoeModel.findOneAndDelete({"id":id});
}
export const shoePostController = (req, res) => {
    
    const model=new shoeModel({
      name:req.body.name,
      id:req.body.id,
      pic:req.body.pic,
      price:req.body.price,
      description:req.body.description,
      category:req.body.category,
      uploadDate:new Date(),
      size:req.body.size,
    });
    model.save();

}