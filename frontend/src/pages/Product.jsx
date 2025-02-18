/* eslint-disable no-unused-vars */
import { useContext } from "react"
import { ShopContext } from "../context/ShopContext"
import { useParams } from "react-router-dom"
import ProductHd from "../components/ProductHd"
import ProductMd from "../components/ProductMd"
import ProductDescription from "../components/ProductDescription"
const Product = () => {
  const {all_products} =useContext(ShopContext)
  const {productId} = useParams()
// console.log(productId);
  const product = all_products.find((e) => e._id === productId);
  if(!product) {
    return <h1 className=" h1 pt-28">Product not found</h1>
  }
  return (
    <section className=" max-padd-container py-20">
      <div>
        <ProductHd product={product}/>
        <ProductMd product={product}/>
        <ProductDescription />
      </div>
    </section>
  )
}

export default Product
