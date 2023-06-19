import { Component, useEffect } from "react"

// lifecycle methods--->only applicable in class based components
                // 1. birth initialization--->info Component 
                // update 2.Mounting phase --->update similar to the useEffect
                            // 1.componentWillMount()--->processing
                            // 2.componentDidMount()--->its updated
            //    growth 3.updating phase---> confirmation&receipt
            // 1.componentWillUpdate()--->confirmation
            // 2.componentDidUpdate()--->receipt
    // death 4.Unmounting phase ---> delete
 import React from "react"
      class Lifecycle extends React.Component{
        constructor()
        {
            super();
            this.state={
                name:"Welcome All"
            }
        }
        
        componentWillMount(){
            alert("we ar learning lifecycle method")
        }
        getSnapshotBeforeUpdate(prevProps,prevState){
          document.getElementById("para2").innerHTML=prevState.name
        }
        render(){
            return(
                <div>
                    <h1>life cycles</h1>
                    {this.state.name}
                    <button onClick={this.delete}>Delete</button>
                    <p id="para"></p>
                    <p id="para2"></p>
                </div>
            )
        }
        componentDidMount(){
            setTimeout(()=>{
                this.setState({
                    name:"Gm All"
                })
            },2000)
            
        }
        componentWillUpdate(){
            alert("you have update the state values?")
        }
        componentDidUpdate(){
            document.getElementById("para").innerHTML="updated state is :"+this.state.name
        }
        delete=()=>{
            this.setState({
            name:false
       })
    }
}
       export default Lifecycle;

