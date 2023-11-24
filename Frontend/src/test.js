import { connectToAxios } from "./services/api";

function Test(){

    async function handleMessageSending(){
        console.log("button clicked.");
        await connectToAxios();
    }
    
    return (
    <div>
        <button onClick={handleMessageSending}>Send request to server.</button>
    </div>)
}

export default Test;