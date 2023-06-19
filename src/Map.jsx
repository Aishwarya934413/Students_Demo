
// https://jsonplaceholder.typicode.com/todos
import { useEffect, useState } from "react"
import "./index.css"

function Map() {
    const [data, setData] = useState(null)
    useEffect(() => {
        fetch("http://localhost:3006/Employee")
            .then((res) => {
                return res.json()
            })
            .then((resp) => {
                console.log(resp)
                setData(resp)
            })
    })
    return (
        <div>
            <h1>Fetch data from backend</h1>
            <table>
                <thead>
                    <tr>
                        <th>userId</th>
                        <th>Id</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((item) => (


                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.city}</td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default Map;










// //












// import { useState } from "react";

// function EmpForm() {
//     const [id, setId] = useState("")
//     const [name, setName] = useState("")
//     const [city, setCity] = useState("")
//     const [mobile, setMobile] = useState("")
//     const sendData = () => {
//         const data={id,name,city,mobile}
//         fetch("http://localhost:3006/Employee",{
//             method: "POST",
//             headers: {"Content-type": "application-json"},
//             body:JSON.stringify(data)
//         })
//     }
//      return (
//         <div className="container">
//             <h2>Add New Employee Data</h2>
//             <form onSubmit={sendData}>
//                 <div class="mb-3">
//                     <label class="form-label">ID</label>
//                     <input value={id} type="text" onChange={e=>setId(e.target.value)} class="form-control" disabled="disabled" id="exampleInputEmail1" aria-describedby="emailHelp" />

//                 </div>
//                 <div class="mb-3">
//                     <label class="form-label">Name</label>
//                     <input value={name} type="text" onChange={e=>setName(e.target.value)} class="form-control" id="exampleInputPassword1" />
//                 </div>
//                 <div class="mb-3">
//                     <label class="form-label">City</label>
//                     <input value={city} type="text" onChange={e=>setCity(e.target.value)} class="form-control" id="exampleInputPassword1" />
//                 </div>
//                 <div class="mb-3">
//                     <label class="form-label">Mobile</label>
//                     <input value={mobile} type="number" onChange={e=>setMobile(e.target.value)} class="form-control" id="exampleInputPassword1" />
//                 </div>

//                 <button type="submit" class="btn btn-primary">Submit</button>
//             </form>
//         </div>
//     )
// }
// export default EmpForm;