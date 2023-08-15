import { Component } from "react";
import UserClass from "./UserClass";

class About extends Component
{
   constructor(props)
   {
      super(props);

      //console.log("Parent Construcotr");
   }
    componentDidMount()
    {
      //console.log("Parent Class Mounted");
    }

   render()
   {
      //console.log("Parent Render");
      return(
         <>
         <p>Welcome to About Page</p>
         <UserClass name = "Nikhilesh " location ="Hyderabad" />
      
         </>
      )
   }
}

export default About;