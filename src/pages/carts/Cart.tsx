import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import CartProduct from "./CartProduct";
import Button from "../../components/ui/Button";
import CartTotal from "./CartTotal";
import { CartContext } from "../../context/CartContext";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../context/UserToken";
import { Helmet } from "react-helmet";

interface Product {
  _id: string;
  title: string;
  imageCover: string;
}

interface CartItem {
  price: number;
  product: Product;
  count: number;
}

const Cart: React.FC = () => {
  const [productDetails, setProductDetails] = useState<CartItem[]>([]);
  const [totalCartPrice, setTotalCartPrice] = useState<number>(0);
  const [quantatiyIsLoading, setQuantatiyIsLoading] = useState<boolean>(false);

  const context = useContext(CartContext);
  const user = useContext(UserContext);

  if (!context) {
    throw new Error("SomeComponent must be used within a UserContextProvider");
  }
  if (!user) {
    throw new Error("SomeComponent must be used within a UserContextProvider");
  }

  const { getUserCart } = context;
  const { userToken } = user;
  const headers = {
    token: userToken,
  };

  const getLoggedUserCart = async () => {
    try {
      const data = await getUserCart();
      setProductDetails(data.data.products);
      setTotalCartPrice(data.data.totalCartPrice);
    } catch (error) {
      console.error("Error fetching cart data:", error);
    }
  };

  useEffect(() => {
    getLoggedUserCart();
  }, []);

  const updateCountItem = async (productId: string, newCount: number) => {
    try {
      setQuantatiyIsLoading(true);
      await axios.put(
        `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
        {
          count: newCount,
        },
        {
          headers,
        }
      );
      getLoggedUserCart();
      setQuantatiyIsLoading(false);
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  const removespecificCartItem = async (productId: string) => {
    try {
      await axios.delete(
        `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
        { headers }
      );
      getLoggedUserCart();
    } catch (error) {
      console.error("Error deleting Product:", error);
    }
  };

  const removeAllCartItem = async () => {
    try {
      await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart`, {
        headers,
      });
      setProductDetails([]);
      setTotalCartPrice(0);
    } catch (error) {
      console.error("Error deleting All Product:", error);
    }
  };

  return (
    <div className="py-12">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Carts</title>
      </Helmet>
      <p className="text-sm font-normal text-black dark:text-white pb-6">
        <span className="text-[#7D8184]">Home /</span> Cart
      </p>
      <div className="flex justify-between items-center border-b py-2 mb-10">
        <p className="w-1/5 text-left text-sm lg:text-md">Product</p>
        <p className="w-1/5 text-center text-sm lg:text-md">Price</p>
        <p className="w-1/5 text-center text-sm lg:text-md">Quantity</p>
        <p className="w-1/5 text-center text-sm lg:text-md">remove</p>
        <p className="w-1/5 text-right text-sm lg:text-md">Subtotal</p>
      </div>
      <div className="mb-10">
        {productDetails.map((item) => (
          <CartProduct
            key={item.product._id}
            image={item.product.imageCover}
            alt={item.product.title}
            price={item.price}
            quantity={item.count}
            subtotal={item.price * item.count}
            title={item.product.title.split(" ").slice(0, 2).join(" ")}
            onQuantityChange={(newCount) =>
              updateCountItem(item.product._id, newCount)
            }
            removeProduct={() => {
              removespecificCartItem(item.product._id);
            }}
            quantatiyIsLoading={quantatiyIsLoading}
          />
        ))}
      </div>
      <div className="flex flex-wrap gap-y-4 justify-between mb-10">
        <NavLink to={"/"}>
          <Button className="border border-gray-400">Return To Shop</Button>
        </NavLink>
        <Button onClick={removeAllCartItem} className="border border-gray-400 ">
          Delete All From Cart
        </Button>
      </div>
      <CartTotal total={totalCartPrice} />
    </div>
  );
};

export default Cart;
