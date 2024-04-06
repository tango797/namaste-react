import {  useDispatch, useSelector } from "react-redux";
import  ItemList  from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const store = useSelector ((store)=>store)
  console.log(store);

  console.log(cartItems);
const dispatch = useDispatch();
const handleClearCart = ()=>{
    dispatch(clearCart())
}

  return (
    <div className="text-center m-2 p-2 text-lg ">
      <h1 className="font-bold">Cart</h1>
      <div className=" w-9/12 m-auto">
        <button className="m-1 p-2 bg-black text-white rounded-lg "
        onClick={handleClearCart}>clear cart</button>
        {cartItems.length===0 &&<h1>Cart empty please add items</h1>}
        <ItemList item={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
