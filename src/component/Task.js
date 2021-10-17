import React from "react";

class Task extends React.Component{
    constructor(){
        super();
        this.state={
            logIn:true
        }
    }
    logedOut(){
        this.setState({
            logIn:false
        })
    }
    logedIn(){
        this.setState({
            logIn:true
        })
    }
    render(){
        if(this.state.logIn){
            return(
                <div>
                    <h1>Welcome, You are logIn</h1>
                    <button onClick={()=>this.logedOut()}>LogOut</button>
                </div>
            )
        }
        else{
            return(
                <div>
                <h1>Please Login</h1>
                <button onClick={()=>this.logedIn()}>LogIn</button>
                </div>
            )
        }
    }
}

export default Task