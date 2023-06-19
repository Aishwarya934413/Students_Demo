import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Reg() {
    const[user,setUser]=useState("")
    const[email,setEmail]=useState("")
    const[pswd,setPswd]=useState("")
    const[cpswd,setCpswd]=useState("")
    const changeUser=(e)=>{
        setUser(e.target.value)

    }
    const changeEmail=(e)=>{
        setEmail(e.target.value)

    }
    const changePswd=(e)=>{
        setPswd(e.target.value)

    }
    const changeCpswd=(e)=>{
        setCpswd(e.target.value)

    }
    const navigate=useNavigate()
    const submitData=()=>{
       if(user.length<=5){
        alert("user should be>5 characters")
       }
       else if(pswd!=cpswd){
        alert("password does not match")
       }
       else{
        alert("form is successfully submitted")
        navigate("./Log")
       }
    }
    return (
        <div>
            <form onSubmit={submitData}>
                <label>Username:</label>
                <input value={user} type="text" required onChange={changeUser} />
                <br /><br />
                <label>Email:</label>
                <input value={email} type="email" required onChange={changeEmail} />
                <br /><br />
                <label>Password</label>
                <input value={pswd} type="password" required onChange={changePswd} />
                <br /><br />
                <label>confirmPassword</label>
                <input value={cpswd} type="password" required onChange={changeCpswd} />
                <br /><br />
                <input type="submit" value="Registered" />
            </form>
        </div>
    )
}
export default Reg;