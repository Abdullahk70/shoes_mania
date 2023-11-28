import axios from "axios"
const url="http://localhost:5000";

export const connectToAxios=async (data)=>{
    alert(JSON.stringify(data));
    console.log(await axios.post(`${url}/shoesMania`,data));
}