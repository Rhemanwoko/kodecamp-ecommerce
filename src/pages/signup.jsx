import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Bag } from "phosphor-react";
import "../components/navbar.css";
import { GoogleIcon } from "../assets/icons";

const Signup = () => {
  const navigate = useNavigate();
  return (
    // <div>
    //   <p>hello</p>
    // </div>
    <div>
      <div className="navbar mb-4 md:mb-5 lg:mb-7">
        <div
          className="header ml-2 md:ml-4 lg:ml-6 cursor-pointer text-2xl"
          onClick={() => navigate("/")}
        >
          <Bag className="text-white md:inline-block hidden" size={32} />
          <p className="text-white inline-block">rhayBrands</p>
        </div>
        <div className="links mr-2 md:mr-4 lg:mr-6">
          {/* <Link className="hidden md:" to="/">Shop</Link> */}
          <Link to="/login">
            <p>Already have an account?</p>
          </Link>
        </div>
      </div>
      <div className="w-[96%] md:w-[65%] lg:w-[50%] mx-auto bg-gray-400 p-8 rounded-[20px]">
        <h4 className="text-center font-bold lg:text-[30px] text-2xl mb-5">
          Let’s get know you Shoper!
        </h4>
        <div className="mb-4">
          <button
            type="submit"
            className="border border-[#555555] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-[15px] text-center flex justify-center items-center"
          >
            <div className="flex gap-3 items-center">
              <GoogleIcon />
              <p>Join with Google</p>
            </div>
          </button>
        </div>
        <form>
          <div className="mb-4">
            <input
              type="text"
              id="fullName"
              className="w-full rounded-[5px] px-2 md:px-2 lg:px-3 py-1 md:py-1 lg:py-1"
              placeholder="Full Name"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              className="w-full rounded-[5px] px-2 md:px-2 lg:px-3 py-1 md:py-1 lg:py-1"
              placeholder="Email Address"
              required
            />
          </div>
          <div className="mb-4">
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
            Join Now
          </button>
          <div className="flex items-start mt-4">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                required
              />
            </div>
            <label
              htmlFor="remember"
              className="ml-2 text-sm font-normal text-gray-900"
            >
              Yes, I would like to receive Get Talent marketing communications.
            </label>
          </div>
          <p className="font-normal text-sm">
            By signing up, you agree to our{" "}
            <Link to="#" className="text-primaryBlue">
              T&Cs
            </Link>{" "}
            and the storing of your data as per our{" "}
            <Link to="#" className="text-[#2776EA]">
              Privacy Statement
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
