import { MdDeleteForever } from "react-icons/md";
import QuantityForm from "./QuantityForm";
import { ReactNode } from "react";

interface Iprops {
  image: string;
  alt: string;
  title: string;
  price: number;
  quantity: number;
  subtotal: ReactNode;
  quantatiyIsLoading: boolean;
  onQuantityChange: (newQuantity: number) => void;
  removeProduct(): void;
}

const CartProduct = ({
  image,
  alt,
  title,
  price,
  quantity,
  subtotal,
  quantatiyIsLoading,
  onQuantityChange,
  removeProduct,
}: Iprops) => {
  return (
    <div className="flex justify-between items-center py-4 border-b mb-4">
      <div className="flex items-center w-1/5">
        <img className="w-[50px] h-[50px] object-cover" src={image} alt={alt} />
        <span className="ml-4 hidden lg:block font-medium ">{title}</span>
      </div>
      <span className="w-1/5 text-center font-medium text-sm lg:text-md">${price}</span>
      <QuantityForm
        initialQuantity={quantity}
        onQuantityChange={onQuantityChange}
      />
      <div className="w-1/5 font-medium flex justify-center items-center text-sm lg:text-md">
        <MdDeleteForever
          onClick={removeProduct}
          className="text-red-900 cursor-pointer text-3xl lg:text-4xl"
        />
      </div>
      <span className="w-1/5 text-right font-medium text-sm lg:text-md">
        {!quantatiyIsLoading ? `$${subtotal}` : "loading..."}
      </span>
    </div>
  );
};

export default CartProduct;
