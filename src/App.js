//  export function App(){
//     return(
//         <div>
//             <h1 style={{color:"red",backgroundColor:"yellow"}}>React</h1>
//             <p style={{colour:"violet"}}>Iam Learning React </p>
//             <button style={{backgroundColor:"green"}}>Click</button>
//         </div>   
//     )
// }
// Composition
// import {Data} from "./Data"
// export function App(){
//     return(
//         <div>
//             <h1>Composition Method</h1>
//             <App1></App1>

//         </div>
//     )
// }
//  function App1(){
//     return(
//         <div>
//             <h1>combining</h1>
//             <App2></App2>
//         </div>
//     )
// }
// function App2(){
//     return(
//         <div>
//             <h1>combining app</h1>

//         </div>
//     )
// }

// Inheritance
// 



// props--->properties
// function App(props) {

//     return (
//         <div>
//             <h1>first element</h1>
//             <button>Click</button>
//             <p>{props.data}</p>
//             <p>{props.demo}</p>
//         </div>
//     )

// }

// function Appli(props) {
//     let x="gm"
//      let y="gn"
//     return (
//         <div>
//             <h1>second element </h1>
//             <button>Click</button>
//             <App data={x} demo={y}/>
//         </div>
//     )

// }
// export default Appli;




// propTypes from "prop-types"
// npm install prop-types

//  import React from "react"
//  import propTypes from "prop-types"

//  class App extends React.Component {

//     render() {
//         const {Id,User,Fname,City,Mobile} = this.props
//         return (

//             <div>
//                 <h1>first element</h1>
//              <button>Click</button>
//         <p>ID:{Id}</p>
// <p>USER:{User}</p>
// <p>FIRSTNAME:{Fname}</p>
// <p>CITY:{City}</p>
// <p>MOBILE:{Mobile}</p>
//             </div>
//         )
//      }
//  }
// //  data types are validated
//  App.propTypes={
//     Id:propTypes.number,
//     User:propTypes.array,
//     Fname:propTypes.string,
//     City:propTypes.string,
//     Mobile:propTypes.number

//  }
//  App.defaultProps={
//     Id:1,
//     User:"abc123",
//     Fname:"Aish",
//     City:"Hosur",
//     Mobile:23456789
//  }

//  export default App;




// class Appli extends React.Component {
//     render(){
//         return (
//             <div>
//                 <h1>second element </h1>
//                 <button>Click</button>
//                 <App data={gm} demo={gn}/>
//             </div>
//         )

//     }
// }
//     export default Appli;




// states--->pass the information in the same component
// declare--->{}
// states are mutable object
// it is applicable for both,function,class
// 2 methods:-
// 1.constructor method--->is a function used for defining instance of object
// 2.without constructor method

// 1.constructor
// import React from "react"
// class App extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             id: 1,
//             name: "Aishwarya",
//             mobileno: 234567890,
//             Count:0,
//             value:""
//         }
//     }
    
//      change=()=>{
//         this.setState(
//             {
//                 id:2,
//             name:"Aish",
//             mobileno:34567890
//             }
//         )
//      }
//      inc=()=>{
//         this.setState(
//             {
//                 Count:this.state.Count+1
//             }
//         )
//      }
//      dec=()=>{
//         this.setState(
//             {
//                 Count:this.state.Count-1
//             }
//         )
//      }
//      getData=(e)=>{
//         this.setState(
//             {
//                 value:e.target.value
//             }
//         )
//      }
//     render() {
//         return (
//             <div>
//                 <h1>Constructor Method</h1>
//                 <p> Id:{this.state.id}<br></br>
//                     name:{this.state.name}<br></br>
//                     mobileno:{this.state.mobileno}
//                     </p>
                
//                     <button onClick={this.change}>Update</button>
//                     <br/><br/>
//                     <h3>Count:{this.state.Count}</h3>
//                     <button onClick={this.inc}>Inc</button>
//                     <button onClick={this.dec}>Dec</button>
//                     <br/><br/>
//                     <input type="text"onChange= {this.getData}/>
//                     <p>current user input values:{this.state.value}</p>
                
//                     <App1 count={this.state.Count} value={this.state.id} name= {this.state.name} mobileno={this.state.mobileno}/>
//             </div>
//         )
//     }
// }
//  class App1 extends React.Component{
//     render(){
//         return(
//             <div>
//                 <h1>Child component</h1>
//                  <h3>{this.props.Count}</h3>
//                 <p> Id:{this.props.value}<br></br>
//                     name:{this.props.name}<br></br>
//                     mobileno:{this.props.mobileno}
//                     </p>
                


//             </div>
//         )
//     }
//  }
// export default App;



