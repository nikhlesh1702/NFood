import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "react";

const Carts =()=>
{
    const cartI = useSelector((store) => store.cart.items);
   // console.log(cartI);
  const dispatch = useDispatch();
   const handleClearCart =() =>
    {  
       dispatch(clearCart());
    }
  
    return(
      <div className="text-center m-4 p-4">
        <h1 className=" text-2xl font-bold">Cart</h1>
        <button className="bg-black w-28 rounded-md text-white mt-5 p-2" onClick={handleClearCart}>clearCart</button>
        <div className="w-6/12 m-auto mb-3">
          {cartI.length ===0 && <h1>Cart is empty. Add items to cart</h1>}
          <ItemList Items = {cartI} className="border border-black mb-2" />
        </div>
     </div>  
    )
}

export default Carts;