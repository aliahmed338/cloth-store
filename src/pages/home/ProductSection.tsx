import { RotatingTriangles } from "react-loader-spinner";
import { Iproducts } from "../../components/interfaces";
import Carts from "../../components/ui/Carts";
import Button from "../../components/ui/Button";
import toast from "react-hot-toast";
import axios from "axios";
import { AiFillHeart } from "react-icons/ai";
import { ReactNode, useState } from "react";
import { useQuery } from "react-query";

interface Iprops {
  numberShow: number;
  sectionTitle: ReactNode;
}

const fetchProducts = async (): Promise<Iproducts[]> => {
  const { data } = await axios.get(
    "https://ecommerce.routemisr.com/api/v1/products"
  );
  return data.data;
};

const ProductSection = ({ numberShow, sectionTitle }: Iprops) => {
  const [showAll, setShowAll] = useState(false);

  const headers = {
    token: localStorage.getItem("userToken") || "",
  };

  const { data: products, isLoading: productsLoading } = useQuery<Iproducts[]>(
    "products",
    fetchProducts
  );

  const toggleShowAll = () => {
    setShowAll((prev) => !prev);
  };

  const AddToWishList = async (id: string) => {
    return await axios.post(
      `https://ecommerce.routemisr.com/api/v1/wishlist`,
      {
        productId: id,
      },
      {
        headers: headers,
      }
    );
  };

  const AddProductToWishList = (id: string) => {
    toast.promise(AddToWishList(id), {
      loading: "Adding to wishlist...",
      success: (
        <div className="text-center">
          Product added successfully to wishlist!
        </div>
      ),
      error: "Could not add product to wishlist.",
    });
  };

  return (
    <section className="mb-20">
      {sectionTitle}
      {productsLoading || !products ? (
        <div className="h-screen flex justify-center items-center">
          <RotatingTriangles
            visible={true}
            height="80"
            width="80"
            colors={["#50B498", "#9CDBA6", "#405D72"]}
            ariaLabel="rotating-triangles-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      ) : (
        <div className="flex flex-wrap items-center justify-between gap-x-[35px]">
          {products
            .slice(0, showAll ? products.length : numberShow)
            .map((item) => (
              <Carts
                key={item._id}
                id={item._id}
                title={item.title}
                price={item.price}
                ratingsAverage={item.ratingsAverage}
                quantity={item.quantity}
                image={item.imageCover}
                icon={
                  <span className="absolute end-3 top-3 cursor-pointer">
                    <AiFillHeart
                      onClick={() => AddProductToWishList(item._id)}
                      className="text-red-400 hover:text-red-700 cursor-pointer"
                      size={23}
                    />
                  </span>
                }
              />
            ))}

          <div className="flex justify-center w-full">
            <Button onClick={toggleShowAll}>
              {showAll ? "View Less Products" : "View All Products"}
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductSection;
