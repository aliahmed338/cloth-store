import { GiReturnArrow } from "react-icons/gi";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useParams } from "react-router-dom";
import Button from "../../components/ui/Button";
import { TbTruckDelivery } from "react-icons/tb";
import { CartContext } from "../../context/CartContext";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

interface Iproduct {
  imageCover: string;
  images: string[];
  price: number;
  ratingsAverage: number;
  title: string;
  description: string;
}

const Details = () => {
  const { id } = useParams();
  const [product, SetProduct] = useState<Iproduct>();
  const [imagesToDisplay, setImagesToDisplay] = useState<string[]>([]);

  const getSpecificProduct = async (id: string | undefined) => {
    const { data } = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/products/${id}`
    );
    SetProduct(data.data);
    console.log(imagesToDisplay);
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

  useEffect(() => {
    getSpecificProduct(id);
  }, []);

  useEffect(() => {
    if (product?.images) {
      setImagesToDisplay(product.images.slice(0, 4));
    }
  }, [product]);

  useEffect(() => {
    if (id) {
      getSpecificProduct(id);
    }
  }, [id]);

  const getStarElements = (ratingsAverage: number | undefined) => {
    const stars = [];

    // Check if ratingsAverage is undefined
    if (ratingsAverage === undefined) {
      for (let i = 1; i <= 5; i++) {
        stars.push(<AiOutlineStar key={i} className="text-[#7D8184]" />);
      }
      return stars;
    }

    // Generate stars based on ratingsAverage
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

  return (
    <div className="flex flex-col-reverse flex-wrap lg:flex-row lg:flex-nowrap justify-center space-y-4 items-center gap-x-10 lg:items-start py-12">
       <Helmet>
        <meta charSet="utf-8" />
        <title>Product Details</title>
      </Helmet>
      <div className="text-center">
        {imagesToDisplay?.map((item, index) => (
          <img
            className="w-[120px] h-[108px] md:w-[150px] md:h-[138px] inline-block mx-2 md:mx-4 lg:block lg:mx-0 py-2 rounded border shadow-md mt-4"
            key={index}
            src={item}
            alt="product image"
          />
        ))}
      </div>
      <div>
        <img
          className="md:w-[550px] md:h-[600px] rounded border shadow-md"
          src={product?.imageCover}
          alt={product?.title}
        />
      </div>
      <div>
        <div className="space-y-2 mb-4">
          <h5 className="text-4xl font-semibold">{product?.title}</h5>
          <div className="flex text-[#FFAD33]">
            {getStarElements(product?.ratingsAverage)}
          </div>
          <p className="font-semibold">${product?.price}</p>
          <p className="font-semibold">{product?.description}</p>
        </div>
        {id && (
          <Button
            onClick={() => {
              AddProductToCart(id);
            }}
            width="w-full"
          >
            Add To Cart
          </Button>
        )}
        <hr className="my-4 bg-gray-400 h-[1px]" />
        <div className="border rounded-lg">
          <div className="flex gap-x-3 py-3 px-6">
            <TbTruckDelivery size={50} />
            <div>
              <p className="font-semibold">Free Delivery</p>
              <p className="text-sm">Enter your postal code for Delivery</p>
            </div>
          </div>
          <hr className="bg-gray-400 h-[1px]" />
          <div className="flex gap-x-3 py-3 px-6">
            <GiReturnArrow size={50} />
            <div>
              <p className="font-semibold">Return Delivery</p>
              <p className="text-sm">Free 30 Days Delivery Returns</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
