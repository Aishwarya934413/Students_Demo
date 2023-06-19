import{BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
import EmpList from "./EmpList";
import EmpForm from "./EmpForm";
import EmpEdit from "./EmpEdit";
import EmpDetails from "./EmpDetails";

import Login1 from "./Login1";

import Register1 from "./Register1";

function Data(){
    return(
        <div>
          <Router>
            <Routes>
            <Route path="/" element={<Register1/>}/>
            <Route path="/login1" element={<Login1/>}/>

                <Route path="/empList" element={<EmpList/>}/>
                <Route path="/form" element={<EmpForm/>}/>
                <Route path="/empedit/:empid" element={<EmpEdit/>}/>
                <Route path="/empdetails/:empid" element={<EmpDetails/>}/>


            </Routes>
          </Router>
        </div>
    )
}
export default Data;