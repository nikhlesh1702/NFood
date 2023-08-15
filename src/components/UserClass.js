import React, { Component } from "react";

class UserClass extends Component{
    constructor(props){
    super(props);
    //console.log(this.props.name + "Child Construcotr");

    this.state ={
        userInfo:
        {
            name: "dummy",
            location :"dummy",
            avatar_url :"http:dummy"

        }
        
    }

}
async componentDidMount()
{
    //console.log(this.props.name + " Child class did mount");
    const data = await fetch("https://api.github.com/users/nikhlesh1702");
    const json = await data.json();

    console.log(json);

    this.setState(
        {
            userInfo:json
        }
    )
}

componentDidUpdate()
{
    console.log("component updated");
}

componentWillUnmount(){
    console.log("component unmounted");
}

render()
    {
        const{name, location, avatar_url} =this.state.userInfo;

        
        //console.log(name + " Child Render");
        return(
            <div>
                <h2>Name:{name}</h2>
                <h3>Location: {location}</h3>
                <img src = {avatar_url} ></img> 
                {/* Not required to mention all the state variable in the this.state with dummy value*/}
                <h3>Contact: nikhilesh1702@gmail.com</h3>
            </div>
        )
    }
}

export default UserClass;