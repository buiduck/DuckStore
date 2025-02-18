import { Link } from "react-router-dom";
import { BsFire } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa6";
const Hero = () => {
  return (
    <section
      id="home"
      className=" max-padd-container bg-hero bg-center bg-cover bg-no-repeat h-[777px] w-full"
    >
      <div className=" relative max-w-[666px] top-44 xs:top-72">
        <h4 className=" flex items-baseline gap-x-2 uppercase text-secondary font-semibold medium-22">
          New Modern Collection <BsFire />
        </h4>
        <h2 className=" h1 capitalize">Grap 50% Off On Selected Products</h2>
        <p className=" border-1-4 border-secondary pl-3 my-2 ">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className=" flex items-center gap-x-4 mt-7">
          <Link
            to={""}
            className="btn-secondary rounded-full flexCenter gap-x-5"
          >
            Latest Products
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
