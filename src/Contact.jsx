import { useNavigate } from "react-router-dom";
function Contact(){
    let navigate=useNavigate()
    const change=()=>{
        navigate("/home")
    }
   
    return(
        <div>
        <h1>Contact Page</h1>
        <button onClick={change}>Click To Back</button>
        </div>
    )
}
export default Contact;