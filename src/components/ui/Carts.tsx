import { memo, ReactNode, useContext } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { CartContext } from "../../context/CartContext";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

interface Iprops {
  id: string;
  title: string;
  price: number;
  quantity: number;
  ratingsAverage: number;
  image: string;
  icon?: ReactNode;
}

const Carts = ({
  id,
  title,
  price,
  quantity,
  ratingsAverage,
  image,
  icon,
}: Iprops) => {
  const getStarElements = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (ratingsAverage >= i) {
        stars.push(<AiFillStar key={i} className="text-[#FFAD33]" />);
      } else if (ratingsAverage >= i - 0.5) {
        stars.push(
          <div key={i} className="relative">
            <AiFillStar
              className="text-[#FFAD33]"
              style={{ position: "absolute", clipPath: "inset(0 50% 0 0)" }}
            />
            <AiOutlineStar className="text-[#7D8184]" />
          </div>
        );
      } else {
        stars.push(<AiOutlineStar key={i} className="text-[#7D8184]" />);
      }
    }
    return stars;
  };

  const context = useContext(CartContext);

  if (!context) {
    throw new Error("SomeComponent must be used within a UserContextProvider");
  }

  const { AddToCart } = context;

  const AddProductToCart = async (id: string) => {
    toast.promise(AddToCart(id), {
      loading: "Adding to cart...",
      success: "Product added successfully!",
      error: "Could not add product to cart.",
    });
  };

  return (
    <article className="flex flex-col mb-10 w-[40%] h-[40%] md:h[33.33%] lg:h-[25%] xl:h-[20%] md:w-[33.33%] lg:w-[25%] xl:w-[20%]">
      <figure className="flex flex-col items-center justify-between rounded bg-[#F5F5F5] mb-3 group relative">
        <Link to={`/details/${id}`} className="w-full flex justify-center">
          <img className="w-[50%] mt-7" src={image} alt={title} />
        </Link>
        {icon}
        <figcaption
          onClick={() => {
            AddProductToCart(id);
          }}
          className="w-full py-3 cursor-pointer bg-black hover:bg-opacity-90 text-white text-center font-medium rounded-b opacity-0 group-hover:opacity-100 transition-opacity duration-1000 absolute bottom-0"
        >
          Add To Cart
        </figcaption>
      </figure>
      <h5 className="font-medium mb-1 text-center">{title}</h5>
      <div className="flex justify-center space-x-2 items-center">
        <span className="text-[#DB4444] font-medium">${price}</span>
        <div className="flex text-[#FFAD33]">{getStarElements()}</div>
        <span className="text-[#7D8184] font-semibold text-sm hidden md:block">
          ({quantity})
        </span>
      </div>
    </article>
  );
};

export default memo(Carts);
