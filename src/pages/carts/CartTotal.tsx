import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";

interface Iprops {
  total: number;
}
const CartTotal = ({ total }: Iprops) => {
  return (
    <div className="flex justify-between items-start">
      <div className="hidden space-x-4 lg:block">
        <Input
          className="border-2 rounded border-gray-400 focus:outline-none transition py-3 px-2"
          placeholder="Coupon Code"
        />
        <Button>Apply Coupon</Button>
      </div>
      <div className="border-2 border-black w-full  lg:w-[40%]  rounded p-6">
        <p className="text-xl font-bold mb-4">Cart Total</p>
        <div className="font-semibold space-y-2 mb-4">
          <div className="flex justify-between">
            <span>Subtotal:</span>
            <span>${total}</span>
          </div>
          <hr />
          <div className="flex justify-between">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <hr />
          <div className="flex justify-between">
            <span>Total:</span>
            <span>${total}</span>
          </div>
        </div>
        <div className="flex justify-center">
          <Button>
            <Link to={"/checkout"}>Procees to checkout</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
