import { useState } from "react";
import AuthImage from "../../assets/AuthForm/Side Image.png";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import axios from "axios";
import { Hourglass } from "react-loader-spinner";
import { registerValidation } from "../../components/validation";
import ErrorMessage from "../../components/ui/ErrorMsg";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

const Register = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const signUp = async (values: {
    name: string;
    email: string;
    password: string;
    rePassword: string;
    phone: string;
  }) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/signup",
        values
      );
      console.log(response);
      if (response && response.data && response.data.message === "success") {
        setIsLoading(false);
        localStorage.setItem("userToken", response.data.token);
        navigate("/");
        toast.success("Successfully Login!");
        setError(null);
      } else {
        setIsLoading(false);
        setError(null);
        toast.success("Successfully Login!");
      }
    } catch (err: any) {
      setError(err.response?.data?.message || "An error occurred");
      setIsLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    validationSchema: registerValidation,
    onSubmit: signUp,
  });

  return (
    <div className="lg:flex items-between gap-x-36 xl:gap-x-80 items-center py-12">
       <Helmet>
        <meta charSet="utf-8" />
        <title>Register</title>
      </Helmet>
      <img
        className="sm:max-w-[100%] lg:max-w-[600px] xl:max-w-[700px] lg:-ml-28 rounded-xl lg:rounded-r-lg mb-6 lg:mb-0"
        src={AuthImage}
        alt="mobile"
      />
      <div className="min-w-40">
        <h4 className="text-3xl font-semibold lg:mb-3">
          Register a new account
        </h4>
        <p className="font-light mb-4 lg:mb-10">Enter your details below</p>
        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col space-y-5 mb-10">
            <Input
              placeholder="Name"
              name="name"
              type="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.errors.name && formik.touched.name && (
              <ErrorMessage message={formik.errors.name} />
            )}

            <Input
              placeholder="Email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.errors.email && formik.touched.email && (
              <ErrorMessage message={formik.errors.email} />
            )}

            <Input
              placeholder="Password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.errors.password && formik.touched.password && (
              <ErrorMessage message={formik.errors.password} />
            )}

            <Input
              placeholder="RePassword"
              name="rePassword"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.rePassword}
            />
            {formik.errors.rePassword && formik.touched.rePassword && (
              <ErrorMessage message={formik.errors.rePassword} />
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

            <Button
              disabled={!(formik.isValid && formik.dirty)}
              type="submit"
              className="lg:w-full"
            >
              {!isLoading ? (
                "Login"
              ) : (
                <div className="flex justify-center items-center">
                  <Hourglass
                    visible={true}
                    height="40"
                    width="40"
                    ariaLabel="hourglass-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    colors={["#fff", "#fff"]}
                  />
                </div>
              )}
            </Button>
          </div>
        </form>
        {error && <ErrorMessage message={error} />}
      </div>
    </div>
  );
};

export default Register;
