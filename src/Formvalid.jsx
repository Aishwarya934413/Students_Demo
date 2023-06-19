
// import { useNavigate } from "react-router-dom";
import Login from "./Login";
import React from "react";
// import { useNavigate } from "react-router-dom";
class Formvalid extends React.Component{
//   const navigate=useNavigate()
    constructor(){
        super();
            this.state={
                user:"",
                email:"",
                pswd:"",
                cpswd:""

        
        }
    }
    updateUser=(e)=>{
        console.log(e.target.value)
        this.setState({
            user:e.target.value
        })
    }
    updateEmail=(e)=>{
        this.setState({
            email:e.target.value
        })
    }
    updatePassword=(e)=>{
        this.setState({
            pswd:e.target.value
        })
    }
    updateCpassword=(e)=>{
        this.setState({
            cpswd:e.target.value
        })
    }
    submitData=(e)=>{
        e.preventDefault()
        if(this.state.user.length<=5){
            alert("user should be >5 characters")
        }
        else if(this.state.pswd!== this.state.cpswd){
            alert("password does not match")
        }
        else{
            alert("form is submitted successfully")
            this.storeData()
        }
    }
    storeData=()=>{
        localStorage.setItem("user",this.state.user)
        localStorage.setItem(" email",this.state.email)
        localStorage.setItem("password",this.state.pswd)
    }
    // regularExpression=()=>{
    //     let user=input.value
    //     let pattern=/^[A-Z]?[a-z]+[0-9]+[!@#$%^&*()]+$/
    //     if(pattern.regularExpression(user)){
    //     text.innerHtml="User is Valid"
    //     text.style.color="green"}
    //     text.innerHtml=""}

    // }
    //   else{
    //     text.innerHtml="User is Invalid";
    //     text.style.color="green"}
    //  ) }
      
    
    render(){
        return(
            <div style={{backgroundColor:"lavender",textAlign:"center",width:"300px",borderRadius:"15px",alignItems:"center",borderStyle:"solid"}}>
                <h2>Registration</h2>
                <form onSubmit={this.submitData}>
                    <label>Username:</label>
                    <input value={this.state.user} type="text" required onChange={this.updateUser} style={{borderRadius:"5px"}}/>
                    <br/><br/>
                    <label>Email:</label>
                    <input value={this.state.email} type="email" required onChange={this.updateEmail} style={{borderRadius:"5px"}}/>
                    <br/><br/>
                    <label>Password</label>
                    <input value={this.state.pswd} type="password"  required onChange={this.updatePassword} style={{borderRadius:"5px"}}/>
                    <br/><br/>
                    <label>confirmPassword</label>
                    <input value={this.state.cpswd} type="password" required  onChange={this.updateCpassword} style={{borderRadius:"5px"}}/>
                    <br/><br/>
                    <input type="submit" value="Registered" style={{color:"blueviolet"}}/>
                </form>
                
            </div>
        )
    }
}
export default Formvalid;