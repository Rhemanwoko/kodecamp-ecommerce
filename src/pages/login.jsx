import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Bag } from "phosphor-react";
import "../components/navbar.css";
import { GoogleIcon } from "../assets/icons";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="navbar mb-4 md:mb-5 lg:mb-7">
        <div
          className="header ml-2 md:ml-4 lg:ml-6 cursor-pointer text-2xl"
          onClick={() => navigate("/")}
        >
          <Bag className="text-white md:inline-block hidden" size={32} />
          <p className="text-white inline-block">rhayBrands</p>
        </div>
        <div className="links mr-2 md:mr-4 lg:mr-6 text-[5px]">
          {/* <Link className="hidden md:" to="/">Shop</Link> */}
          <Link to="/signup" className="">
            <p>New? Let's get to know you</p>
          </Link>
        </div>
      </div>
      <div className="w-[96%] md:w-[65%] lg:w-[50%] mx-auto bg-gray-400 p-8 rounded-[20px]">
        <h4 className="text-center font-bold text-[15px] md:text-[18px] lg:text-[28px] mb-5">
          Welcome Back...
        </h4>

        <form>
          <div className="mb-6">
            <input
              type="email"
              id="email"
              className="w-full rounded-[5px] px-2 md:px-2 lg:px-3 py-1 md:py-1 lg:py-1"
              placeholder="Email Address"
              required
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              id="password"
              className="w-full rounded-[5px] px-2 md:px-2 lg:px-3 py-1 md:py-1 lg:py-1"
              placeholder="Password"
              required
            />
          </div>
          <button
            onClick={() => navigate("/")}
            type="submit"
            className="text-white bg-[#6FA4F1] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-[15px] text-center "
          >
            Sign In
          </button>
        </form>
        <section>
          <p className="text-center mt-3">
            <Link>Forgot Password</Link>
          </p>
          <div className="flex justify-between items-center lg:gap-10 gap-5 w-3/4 mx-auto lg:my-7 my-5">
            <div className="lg:w-1/2 w-3/4 border-t-[0.5px] border-[#808080] " />
            <p>or</p>
            <div className="lg:w-1/2 w-3/4 border-t-[0.5px] border-[#808080]" />
          </div>
          <button
            type="submit"
            className="border border-[#555555] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-[15px] text-center flex justify-center items-center"
          >
            <div className="flex gap-3 items-center">
              <GoogleIcon />
              <p>Sign in with Google</p>
            </div>
          </button>
        </section>
      </div>
    </div>
  );
};

export default Login;
