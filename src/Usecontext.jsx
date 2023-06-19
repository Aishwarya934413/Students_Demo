


// useContext()--->          1.create context
                         // 2.provider
                        // 3.consumer

import React, { useState,useContext } from "react";




   let Context=React.createContext()

function Usecontext() {
    const [data,setData]=useState("React js")
    return (
        <div>
            <Context.Provider value={data}>
            <h1>main component</h1>
            
            </Context.Provider>
        </div>
    )
}
function Parent() {
    return (
        <div>
            <h1>parent component</h1>
        </div>
    )
}
function Child() {
    const value=useContext(Context)
    return (
        <div>
            <h1> child component{value}</h1>
        </div>
    )
}
export default Usecontext;
