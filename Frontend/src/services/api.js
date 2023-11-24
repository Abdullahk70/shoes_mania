import axios from "axios"
const url="http://localhost:8000";

export const connectToAxios=async ()=>{
    console.log("Request recieved");
    return await axios.get(url);
}