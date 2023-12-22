import axios from "axios"
import { json } from "react-router-dom";
const url="https://shoes-mania-api.vercel.app";
// http://localhost:5000

export const connectToAxios=async (data)=>{
    
    await axios.post(`${url}/shoesMania`,data);
}
export const getProducts=async ()=>{
   return await axios.get(`${url}/shoesManiaView`);
}
export const LoginUser=async (view)=>{
     return await axios.post(`${url}/shoesMania/UserLogin`,view);
    // alert(JSON.stringify(view));
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
 export const delTestimonials=async(id)=>{
    
    await axios.delete(`${url}/shoesManiaDeleteTestimonials/:${id}`,id);
}
