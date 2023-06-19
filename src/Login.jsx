import React from "react"
// import { useNavigate } from "react-router-dom";
class Login extends React.Component {
    // let navigate=useNavigate()
    // const change1=()=>{
    //     navigate("/home")
    // }
    constructor() {
        super()
        this.state = {
            user: "",
            email: "",
            pswd: ""
        }
    }
    updateUser = (e) => {
        console.log(e.target.value)
        this.setState({
            user: e.target.value
        })
    }
    updateEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }
    updatePassword = (e) => {
        this.setState({
            pswd: e.target.value
        })
    }
    submitForm = (e) => {
e.preventDefault()
        let x = localStorage.getItem("user")
    
        let y = localStorage.getItem(" email")
    
        let z = localStorage.getItem("password")
        console.log(x,y,z)
        if (this.state.user != x || this.state.email != y || this.state.pswd != z) {
            alert("check the credentials")
        }
        else {
            alert("Logged in")
        }
    }
    render() {
        return (
            <div  style={{backgroundColor:"lavender",textAlign:"center",width:"300px",borderRadius:"15px",alignItems:"center",borderStyle:"solid" }}>
                <h2>Login</h2>
                <form onSubmit={this.submitForm}>
                    <label>Username:</label> 
                    <input value={this.state.user} type="text" required onChange={this.updateUser} style={{ borderRadius: "5px" }} />
                    <br /><br />
                    <label>Email:</label>
                    <input value={this.state.email} type="email" required onChange={this.updateEmail} style={{ borderRadius: "5px" }} />
                    <br /><br />
                    <label>Password</label>
                    <input value={this.state.pswd} type="password" required onChange={this.updatePassword} style={{ borderRadius: "5px" }} />
                    <br /><br />

                    <input type="submit" value="Login" style={{ color: "blueviolet" }} />
                    {/* <button onClick={this.change1}>Click To Back</button> */}
                </form>

            </div>
        )
    }
}
export default Login;