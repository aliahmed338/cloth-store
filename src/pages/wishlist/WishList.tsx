import axios from "axios";
import Carts from "../../components/ui/Carts";
import { Iproducts } from "../../components/interfaces";
import { MdDeleteForever } from "react-icons/md";
import toast from "react-hot-toast";
import { RotatingTriangles } from "react-loader-spinner";
import Button from "../../components/ui/Button";
import { useEffect, useState } from "react";
import ProductSection from "../home/ProductSection";
import SectionTitle from "../../components/ui/SectionTitle";
import { Helmet } from "react-helmet";

const WishList = () => {
  const [showAll, setShowAll] = useState(false);
  const [productFromWishList, setProductFromWishList] = useState<Iproducts[]>(
    []
  );
  const [productsLoading, setProductsLoading] = useState(false);

  const getLoggedUserWishList = async (): Promise<void> => {
    setProductsLoading(true);
    try {
      const { data } = await axios.get(
        `https://ecommerce.routemisr.com/api/v1/wishlist`,
        {
          headers: {
            token: localStorage.getItem("userToken"),
          },
        }
      );
      setProductFromWishList(data.data);
    } catch (error) {
      console.error("Error fetching wishlist:", error);
    } finally {
      setProductsLoading(false);
    }
  };

  const deleteFromWishList = async (id: string): Promise<void> => {
    try {
      await axios.delete(
        `https://ecommerce.routemisr.com/api/v1/wishlist/${id}`,
        {
          headers: {
            token: localStorage.getItem("userToken"),
          },
        }
      );
    } catch (error) {
      console.error("Error deleting from wishlist:", error);
      throw error;
    }
  };

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const deleteProductFromWishList = async (id: string) => {
    toast
      .promise(deleteFromWishList(id), {
        loading: "Removing from wishlist...",
        success: "Product removed successfully from your wishlist!",
        error: "Could not remove product from wishlist.",
      })
      .then(() => {
        getLoggedUserWishList(); // Refetch the wishlist after deletion
      });
  };

  useEffect(() => {
    getLoggedUserWishList();
  }, []);

  return (
    <div className="py-12">
      <Helmet>
        <meta charSet="utf-8" />
        <title>WishList</title>
      </Helmet>
      <h5 className="text-3xl font-semibold mb-8">
        wishlist (
        <span className="font-bold">{productFromWishList.length}</span>)
      </h5>
      {productsLoading ? (
        <div className="py-6 flex justify-center items-center">
          <RotatingTriangles
            visible={true}
            height="80"
            width="80"
            colors={["#50B498", "#9CDBA6", "#405D72"]}
            ariaLabel="rotating-triangles-loading"
          />
        </div>
      ) : (
        <div className="flex flex-wrap items-center justify-between gap-x-[35px]">
          {productFromWishList
            .slice(0, showAll ? productFromWishList.length : 4)
            .map((item, index) => (
              <Carts
                key={index}
                id={item._id}
                title={item.title}
                price={item.price}
                ratingsAverage={item.ratingsAverage}
                quantity={item.quantity}
                image={item.imageCover}
                icon={
                  <span className="absolute end-3 top-3 cu">
                    <MdDeleteForever
                      onClick={() => {
                        deleteProductFromWishList(item._id);
                      }}
                      className="text-red-900 hover:text-red-500 cursor-pointer"
                      size={23}
                    />
                  </span>
                }
              />
            ))}
        </div>
      )}

      <div className="text-center">
        <Button
          onClick={() => {
            toggleShowAll();
          }}
        >
          {showAll
            ? "View Less Wishlist Products"
            : "View All Wishlist Products"}
        </Button>
      </div>
      <hr className="my-12" />
      <ProductSection
        numberShow={4}
        sectionTitle={<SectionTitle title="Just For You" />}
      />
    </div>
  );
};

export default WishList;
