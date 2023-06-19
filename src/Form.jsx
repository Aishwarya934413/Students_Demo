import Reg from "./Reg";
import Log from "./Log";
import{BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"

function Form(){
    return(
         <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Reg/>}/>
                    <Route path="Log" element={<Log/>}/>
                </Routes>
            </Router>
         </div>
    )
}
export default Form;