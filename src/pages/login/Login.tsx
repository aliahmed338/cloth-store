import AuthImage from "../../assets/AuthForm/Side Image.png";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import { useFormik } from "formik"; // Ensure ErrorMessage is imported correctly
import { loginValidation } from "../../components/validation";
import { Hourglass } from "react-loader-spinner";
import axios from "axios";
import ErrorMessage from "../../components/ui/ErrorMsg";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserToken";
import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";
const Login = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const context = useContext(UserContext);
  const navigate = useNavigate();
  if (!context) {
    throw new Error("SomeComponent must be used within a UserContextProvider");
  }

  const { setUserToken } = context;

  const login = async (values: { email: string; password: string }) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/signin",
        values
      );
      if (response && response.data && response.data.message === "success") {
        setIsLoading(false);
        localStorage.setItem("userToken", response.data.token);
        setUserToken(localStorage.getItem("userToken"));
        toast.success("Successfully Login!");
        navigate("/");
        setError(null);
      } else {
        setIsLoading(false);
        toast.error("Check Your Netwrok.");
        setError(null);
      }
    } catch (err: any) {
      setError(err.response?.data?.message || "An error occurred");
      setIsLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidation,
    onSubmit: login,
  });

  return (
    <div className="lg:flex items-between gap-x-36 xl:gap-x-80 items-center py-12">
       <Helmet>
        <meta charSet="utf-8" />
        <title>Login</title>
      </Helmet>
      <img
        className="sm:max-w-[100%] lg:max-w-[600px] xl:max-w-[700px] lg:-ml-28 rounded-xl lg:rounded-r-lg mb-6 lg:mb-0"
        src={AuthImage}
        alt="mobile"
      />
      <div>
        <h4 className="text-3xl font-semibold lg:mb-3">
          Login to your account
        </h4>
        <p className="font-light mb-4 lg:mb-10">Enter your details below</p>
        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col space-y-5 mb-2">
            <Input
              placeholder="Email"
              name="email"
              type="email" // Optionally specify type for better browser support
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
              type="password" // Specify type for password fields
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.errors.password && formik.touched.password && (
              <ErrorMessage message={formik.errors.password} />
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
                    colors={["#000", "#fff"]}
                  />
                </div>
              )}
            </Button>
          </div>
        </form>
        {error && <ErrorMessage message={error} />}
        <span className="font-semibold ">
          <NavLink to={"/signup"}>go to register now...</NavLink>
        </span>
      </div>
    </div>
  );
};

export default Login;
