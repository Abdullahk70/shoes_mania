import axios from "axios"
const url="http://localhost:5000";

export const connectToAxios=async (data)=>{
    
    console.log(await axios.post(`${url}/shoesMania`,data));
}
export const getProducts=async ()=>{
    await axios.get(`${url}/shoesMania`);
}