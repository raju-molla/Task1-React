import React from "react";
import ChildComp from "./ChildComp";

class ParentComp extends React.Component{
    constructor(){
        super();
        this.state={
            name: 'Hello'
        }
        this.ChangeNameHandler= this.ChangeNameHandler.bind(this)
    }
    ChangeNameHandler(n){
        this.setState({
            name: n
        })
    }

    render(){
        return(
            <div>
                <h1>My name is : {this.state.name}</h1>
                <ChildComp ChangeNameHandler={this.ChangeNameHandler} />
            </div>
        )
    }
}

export default ParentComp