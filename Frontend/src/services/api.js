import axios from "axios"
const url="http://localhost:5000";

export const connectToAxios=async (data)=>{
    
    console.log(JSON.stringify(await axios.post(`${url}/shoesMania`,data)));
}
export const getProducts=async (id)=>{
     console.log(await axios.get(`${url}/shoesManiaView`));
}