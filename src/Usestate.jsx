import { useState } from "react";
import { useEffect } from "react";

function Usestate(){
    const [data,setData]=useState("React js")
    const [count,setCount]=useState(0)
    const change=()=>{
setData("Hello")
    }
   const inc=()=>{
    setCount(count+1)
   }
   useEffect(()=>{
 setTimeout(()=>{
 setCount(count+1)
 },200)
   })
    return(
          <div>
            <h1> Hooks Method</h1>
            <Usestate1  value={data} count={count}/>
            <button onClick={change}>Update</button>
            <br/><br/>
            <h1>count:{count}</h1>
            <button onClick={inc}>inc</button>

          </div>
    )
}
function Usestate1(props){
    const{value,count}=props
    return(
          <div>
            <h1> Child Method</h1>
            <p>{value}</p>
            <h2>{ count}</h2>
          
          </div>
    )
}
export default Usestate;