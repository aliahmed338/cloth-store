import axios from "axios";
import React, { createContext, ReactNode } from "react";

interface ICartMessage {
  data: {
    status: string;
    message: string;
  };
}

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

interface ICartData {
  status: string;
  data: {
    _id: string;
    products: CartItem[];
    totalCartPrice: number;
  };
}

interface CartContextType {
  AddToCart: (id: string) => Promise<ICartMessage>;
  getUserCart: () => Promise<ICartData>;
  oPayment: (
    cartId: string,
    shippingAddress: { details: string; phone: string; city: string }
  ) => Promise<any>;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

interface CartContextProviderProps {
  children: ReactNode;
}

const CartContextProvider: React.FC<CartContextProviderProps> = ({
  children,
}) => {
  const headers = {
    token: localStorage.getItem("userToken") || "", // Ensure token is a string
  };

  const AddToCart = async (id: string): Promise<ICartMessage> => {
    try {
      console.log("Adding to cart with ID:", id);
      console.log("Headers:", headers);
      const response = await axios.post<ICartMessage>(
        `https://ecommerce.routemisr.com/api/v1/cart`,
        {
          productId: id,
        },
        {
          headers: headers,
        }
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Error adding to cart:", error);
      throw error;
    }
  };

  const getUserCart = async (): Promise<ICartData> => {
    try {
      const response = await axios.get<ICartData>(
        `https://ecommerce.routemisr.com/api/v1/cart`,
        {
          headers,
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching cart data:", error);
      throw error;
    }
  };

  const oPayment = async (
    _id: string,
    shippingAddress: { details: string; phone: string; city: string }
  ): Promise<any> => {
    try {
      const response = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${_id}`,
        {
          shippingAddress: shippingAddress,
        },
        {
          headers,
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error in Pay Online:", error);
    }
  };

  return (
    <CartContext.Provider value={{ AddToCart, getUserCart, oPayment }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
