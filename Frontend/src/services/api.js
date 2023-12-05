import axios from "axios"
const url="http://localhost:5000";

export const connectToAxios=async (data)=>{
    
    await axios.post(`${url}/shoesMania`,data);
}
export const getProducts=async ()=>{
   return await axios.get(`${url}/shoesManiaView`);
}
export const delProduct=async(id)=>{
    
    await axios.delete(`${url}/shoesManiaDelete/:${id}`,id);
}
export const addUser=async(data)=>{
    
     await axios.post(`${url}/shoesMania/createUser`,data);
  
}
export const addTestimonials=async(data)=>{
   
     await axios.post(`${url}/shoesMania/createTestimonial`,data);
  
}

export const getTestimoanial=async ()=>{
    return await axios.get(`${url}/shoesMania/testimonials`);
 }