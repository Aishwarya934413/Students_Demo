// map metod--->no of collection data in single element
// https://jsonplaceholder.typicode.com/todos
import { useEffect, useState } from "react";
import "./index.css"



function Api() {
    const [data, setData] = useState("")
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
            <h1>Fetch Data From Backend</h1>
            <table>
                <thead>
                    <tr>
                        <th>userId</th>
                        <th>ID</th>
                        <th>Title</th>

                    </tr>
                </thead>
                <tbody>
                       {data.map((item)=>(
                         <tr>
                           <td>{item.userId}</td>
                            <td>{item.id}</td>
                            <td>{item.title}</td>

                        </tr> 
                      ))}  
                </tbody>
            </table>
        </div>
    )
}
export default Api;