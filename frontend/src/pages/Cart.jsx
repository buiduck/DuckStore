/* eslint-disable no-unused-vars */
import { useContext } from "react"
import { ShopContext } from "../context/ShopContext"
import { TbTrash } from "react-icons/tb"
import { useNavigate } from "react-router-dom"
const Cart = () => {
  const navigate = useNavigate();
  const {all_products,cartItems,removeFromCart,getTotalCartAmount} =useContext(ShopContext)
  return (
    <section className="max-padd-container pt-20">
      <div className=" py-10">
        <table className=" w-full">
          <thead>
            <tr className=" border-b border-slate-900/20 text-gray-30 regular-14 xs-regular-16 text-start py-12">
              <th className=" p-1 text-left">Product</th>
              <th className="p-1 text-left">Title</th>
              <th className="p-1 text-left">Price</th>
              <th className="p-1 text-left">Quantity</th>
              <th className="p-1 text-left">Total</th>
              <th className="p-1 text-left">Remove</th>
            </tr>
          </thead>
          <tbody>
            {all_products.map((product) =>{
              if(cartItems[product._id] > 0){
                return(
                  <tr key={product._id} className="border-b border-slate-900/20 text-gray-50 p-6 medium-14 text-left">
                    <td className="p-1">
                      <img src={product.image} alt="productImg" height={58} width={58} 
                      className="rounded-lg ring-1 ring-slate-900/5 m-1 "/>  
                    </td>  
                    <td className="p-1" >
                      <div className="line-clamp-3">{product.name}</div>
                    </td>
                    <td className="p-1">${product.price}</td> 
                    <td className="p-1">{cartItems[product._id]}</td> 
                    <td className="p-1">${product.price * cartItems[product._id]}</td>
                    <td className="p-1">
                      <div className=" bold-22" onClick={() => removeFromCart(product._id)}> 
                        <TbTrash/>  
                      </div>  
                    </td> 
                  </tr>
                )
              }
              return null;
            })}
          </tbody>
        </table>

        {/*  */}
        <div className="flex flex-col xl:flex-row gap-20 mt-20">
          <div className="flex flex-1 flex-col gap-2">
            <h2 className="bold-22">Summary</h2>

            <div className="flexBetween py-3">
              <h4 className="medium-16">Subtotal:</h4>
              <h4 className="text-gray-30 font-semibold">${getTotalCartAmount()}</h4>
            </div>

            <hr className="h-[2px] bg-slate-900/15" />

            <div className="flexBetween py-3">
              <h4 className="medium-16">Shipping Fee:</h4>
              <h4 className="text-gray-30 font-semibold">${getTotalCartAmount() === 0 ? 0 : 2}</h4>
            </div>

            <hr className="h-[2px] bg-slate-900/15" />

            <div className="flexBetween py-3">
              <h4 className="medium-18">Total:</h4>
              <h4 className="bold-18">${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</h4>
            </div>

            <button onClick={() => navigate("/order")} className="btn-secondary w-52 rounded">
              Proceed to Checkout
            </button>
          </div>

          <div className="flex flex-1 flex-col gap-8">
            <h4 className="bold-20 capitalize">Your coupon code enter here:</h4>
            <div className="flexBetween h-[2.8rem] bg-primary ring-1 ring-slate-900/10 w-full p-2">
              <input
                type="text"
                placeholder="Enter coupon code"
                className="flex-1 bg-transparent outline-none px-2"
              />
              <button className="bg-black text-white px-4 py-1 rounded-md hover:bg-gray-800 transition duration-300">
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cart
