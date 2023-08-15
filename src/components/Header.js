import { useState } from "react";
import { LOGO_URL } from "../utils/config";
import { useState } from "react";
import { Link } from "react-router-dom";
import Signup from "./Signup";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";


const Header=() =>
{
   const [toggle, setToggle] = useState('Login');
   const [Toggler, setToggler] = useState(false);
   const onlineStatus = useOnlineStatus();

   const cartItems = useSelector((store) => store.cart.items);

   function handleClick()
   {
        
        setToggler(!Toggler);
        Toggler ? setToggle('Logout') : setToggle('Login');

   }
   return(
    <div className= "flex items-center  p-3  m-4  bg-pink-100 hover:border-stone-950">
        <img 
            src = {LOGO_URL}
            alt ="Site Logo Error in Rendering"
            className="w-[150px] p-3 "></img>
        <div className="flex items-center ml-[300px]">
           <ul className="flex items-center gap-6">
            <li>Online Status: {onlineStatus? "✅" : "🔴"}</li>
            <Link to ="/"><li>Home</li></Link>
            <Link to ="/About"><li>About</li></Link>
            <Link to ="/ContactUs"><li>Contact Us</li></Link>
            <Link to  ="/Grocery"> <li>Grocery</li></Link>
            <Link to = "/Signup"><li>Signup</li></Link>
            <Link to ="/Cart"><li className="px-4 font bold">Cart -({cartItems.length} items)</li></Link>
            <button onClick={() =>
            {
              handleClick();
            } } className = "border">{toggle}</button>
           </ul>
        </div>
    </div>
   )
}

export default Header;