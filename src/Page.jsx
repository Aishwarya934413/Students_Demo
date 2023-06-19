import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Formvalid  from "./Formvalid"
import Login from "./Login"



import{BrowserRouter as  Router,Routes,Route,Link} from "react-router-dom"
function Page(){
    return(
        <div>
            <Router>
                <ul style={{backgroundColor:"aqua",padding:"10px",display:"inline" ,width:"2300px"}}>
                    <li style={{padding:"20px",display:"inline"}}><Link to="/home">Home</Link></li>
                    <li style={{padding:"20px",display:"inline"}}><Link to="/about">About</Link></li>
                    <li style={{padding:"20px",display:"inline"}}><Link to="/contact">Contact</Link></li>
                    <li style={{padding:"20px",display:"inline"}}><Link to="/formvalid">Formvalid</Link></li>
                    <li style={{padding:"20px",display:"inline"}}><Link to="login">Login</Link></li>
                    <Routes>
                        <Route path="/home" element ={<Home/>}/>
                        <Route path="/about" element ={<About/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                        <Route path="/formvalid" element={<Formvalid/>}/>
                        <Route path="/login" element={<Login/>}/>
                        


                    
                    </Routes>
                </ul>
            </Router>
        </div>
    )
}
export default Page;