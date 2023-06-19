// https://jsonplaceholder.typicode.com/todos
import{useEffect, useState} from "react";
import "./index.css"
import{Link, useNavigate} from "react-router-dom"
import axios from "axios";

function EmpList(){
   const  [data,setData]=useState(null)
   const navigate=useNavigate()
   const [value,setValue]=useState("")
   const option=["name","city","mobile"]
   const  [sort,setSort]=useState("")
   useEffect(()=>{
    //   fetch("http://localhost:3006/Employee")
      fetch("http://localhost:3006/Student")
    //    fetch("http://localhost:3006/Employee?_start=${4}&_end=${6}")
       .then((res)=>{
           return res.json()
       })
       .then((resp)=>{
           console.log(resp)
           setData(resp)
       })
        
   },[])
   const deleteData=(id)=>{
    if(window.confirm("Do You Want To Delete it...?")){
//    fetch("http://localhost:3006/Employee/"+id,{
    fetch("http://localhost:3006/Student/"+id,{
    method:"DELETE"
   })
   .then((s)=>{
    alert("Deleted successfully")
    window.location.reload()
   })
   .catch((err)=>{
    console.log(err)
   })
}
   
   }
   const EditData=(id)=>{
    navigate("/empedit/"+id)
   }
   const DetailsData=(id)=>{
    navigate("/empdetails/"+id)
   }
   const updateUser=(e)=>{
    console.log(e.target.value)
     setValue(e.target.value)
   }
   const searchData= async (e)=>{
    e.preventDefault()
    // return await axios.get(`http://localhost:3006/Employee?q=${value}`)
    return await axios.get(`http://localhost:3006/Student?q=${value}`)
    .then((res)=>{
        console.log(res)
        setData(res.data)
        setValue("")
    })
   }
   const loadData=(e)=>{
    e.preventDefault()
    // fetch("http://localhost:3006/Employee")
    fetch("http://localhost:3006/Student")
       .then((res)=>{
           return res.json()
       })
       .then((resp)=>{
           console.log(resp)
           setData(resp)
       })
        
   }
   const sortData= async(e)=>{
    let value=e.target.value
    console.log(value)
    setSort(value)
    // return await axios.get(`http://localhost:3006/Employee?_sort=${value}&_order=asc`)
    return await axios.get(`http://localhost:3006/Student?_sort=${value}&_order=asc`)
    .then((res)=>{
        console.log(res)
        setData(res.data)
        
    })


   }
   
   
   return(
       <div className="container">
        <div className="card">
            <div className="card-title">
              <h1>STUDENT MANAGEMENT SYSTEM</h1>
            </div>
            <div className="card-body">
          <Link to="/form"  className="btn btn-success">Add New(+)</Link>
          <form onSubmit={searchData}>
          <input value={value} onChange={updateUser} type="text" placeholder="Filter Record's"  className="form-control" id="exampleInputPassword1"/>
          <button  className= "btn btn-primary"type="submit">Search</button>
          <button onClick={loadData} className="btn btn-danger">Reset</button>
          </form>
          <select value={sort} onChange={sortData}>
                 <option>---choose---</option>
                {option.map((data)=>(
                    <option>{data}</option>
                ))}
            
          </select>
         <table className="table table-bordred">
           <thead>
               <tr className="table-dark text-white">
                   <th>userId</th>
                   <th>name</th>
                   <th>city</th>
                   <th>Mobile No</th>
                   <th>Action</th>
               </tr>

           </thead>
           <tbody>
               {data?.map((item)=>(


               <tr>
                   
                    <td>
                        
                            < input type="checkbox" width="10px"/>
                            
                        
                        {item.id}</td>
                   <td>{item.name}</td>
                   <td>{item.city}</td>
                   <td>{item.mobile}</td>
                   <td>
                    <button onClick={()=>{deleteData(item.id)}} className="btn btn-danger">Delete</button>
                    <button onClick={()=>{EditData(item.id)}} className="btn btn-primary">Edit</button>
                    <button onClick={()=>{DetailsData(item.id)}} className="btn btn-success">Show Data</button>
                   </td>
               </tr>
                               ))}

           </tbody>
         </table>
       </div>
       </div>
       </div>
   )
}
export default EmpList;