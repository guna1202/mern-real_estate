import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-bold my-7 text-green-500">
        Sign Up
      </h1>
      <form className="flex flex-col gap-5">
        <input
          type="username"
          placeholder="username"
          className="border bg-slate-200 p-3 rounded-lg"
          id="username"
        />
        <input
          type="email"
          placeholder="email"
          className="border bg-slate-200 p-3 rounded-lg"
          id="email"
        />
        <input
          type="password"
          placeholder="password"
          className="border bg-slate-200 p-3 rounded-lg"
          id="password"
        />
        <button className="uppercase p-4 bg-slate-700 text-white font-semibold hover:opacity-80 rounded-lg">
          sign up
        </button>
      </form>
      <div className="flex mt-5 gap-2">
        <p>Have an account? </p>
        <Link to={"/sign-in"}>
          <span className="text-blue-700">Sign In</span>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
