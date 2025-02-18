/* eslint-disable react/prop-types */
import { TbArrowRight } from "react-icons/tb";
const ProductHd = ({ product }) => {
  return (
    <div className=" max-padd-container rounded-t-xl rounded-tr-xl flex items-center flex-wrap gap-x-2 medium-16 py-4 capitalize bg-primary">
      Home <TbArrowRight /> {product.name} <TbArrowRight />
    </div>
  );
};

export default ProductHd;
