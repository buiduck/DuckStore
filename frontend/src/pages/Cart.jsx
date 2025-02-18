/* eslint-disable no-unused-vars */
import { useContext } from "react"
import { ShopContext } from "../context/ShopContext"
import { TbTrash } from "react-icons/tb"
const Cart = () => {
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

      </div>
    </section>
  )
}

export default Cart
