import { useFormik } from "formik"; // Ensure ErrorMessage is imported correctly
import { onlinePaymentValidation } from "../../components/validation";
import Input from "../../components/ui/Input";
import ErrorMessage from "../../components/ui/ErrorMsg";
import Button from "../../components/ui/Button";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Helmet } from "react-helmet";

interface Iprops {}

const CheckOut = ({}: Iprops) => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("SomeComponent must be used within a UserContextProvider");
  }

  const { getUserCart, oPayment } = context;

  const onlinePayment = async (values: {
    details: string;
    phone: string;
    city: string;
  }) => {
    const cartData = await getUserCart();
    const cartId = cartData.data._id; // Extract _id from cartData
    const x = await oPayment(cartId, values);
    window.location.href = x.session.url;
  };
  const formik = useFormik({
    initialValues: {
      details: "",
      phone: "",
      city: "",
    },
    validationSchema: onlinePaymentValidation,
    onSubmit: onlinePayment,
  });
  return (
    <div className="lg:px-24 px-12">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Check Out</title>
      </Helmet>
      <p className="text-sm font-normal text-black my-14">
        <span className="text-[#7D8184]">Cart /</span> Online Payment
      </p>
      <p className="text-4xl font-medium mb-14">Billing Details</p>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col space-y-5 mb-10">
          <Input
            placeholder="Details"
            name="details"
            type="details" // Optionally specify type for better browser support
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.details}
          />
          {formik.errors.details && formik.touched.details && (
            <ErrorMessage message={formik.errors.details} />
          )}

          <Input
            placeholder="Phone"
            name="phone"
            type="phone"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
          />
          {formik.errors.phone && formik.touched.phone && (
            <ErrorMessage message={formik.errors.phone} />
          )}

          <Input
            placeholder="City"
            name="city"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.city}
          />
          {formik.errors.city && formik.touched.city && (
            <ErrorMessage message={formik.errors.city} />
          )}

          <Button
            disabled={!(formik.isValid && formik.dirty)}
            type="submit"
            className="w-full"
          >
            Pay
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
