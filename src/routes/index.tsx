import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import ProtectedRoutes from "../components/auth/ProtectedRoutes";
import Cart from "../pages/carts/Cart"; // Ensure this is correctly imported
import CheckOut from "../pages/checkout/CheckOut";
import Contact from "../pages/contact/Contact";
import About from "../pages/About/About";
import Details from "../pages/details/Details";
import AllOrders from "../pages/orders/AllOrders";
import NotFound from "../pages/notfound/NotFound";
import WishList from "../pages/wishlist/WishList";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <ProtectedRoutes redirectPath="/login">
              <Home />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/contact"
          element={
            <ProtectedRoutes redirectPath="/login">
              <Contact />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/details/:id"
          element={
            <ProtectedRoutes redirectPath="/details">
              <Details />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/carts"
          element={
            <ProtectedRoutes redirectPath="/login">
              <Cart />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/allorders"
          element={
            <ProtectedRoutes redirectPath="/login">
              <AllOrders />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/about"
          element={
            <ProtectedRoutes redirectPath="/login">
              <About />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/checkout"
          element={
            <ProtectedRoutes redirectPath="/login">
              <CheckOut />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/wishlist"
          element={
            <ProtectedRoutes redirectPath="/login">
              <WishList />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/login"
          element={
            <ProtectedRoutes redirectPath="/" inverse>
              <Login />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/signup"
          element={
            <ProtectedRoutes redirectPath="/" inverse>
              <Register />
            </ProtectedRoutes>
          }
        />
        <Route
          path="*"
          element={
            <ProtectedRoutes redirectPath="/login">
              <NotFound />
            </ProtectedRoutes>
          }
        />
      </Route>
    </>
  )
);
