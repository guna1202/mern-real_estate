import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success === "false") {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate("/");
    } catch (error) {
      setLoading(false);
      setError(data.message);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-bold my-7 text-green-500">
        Sign In
      </h1>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          className="border bg-slate-200 p-3 rounded-lg"
          id="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          className="border bg-slate-200 p-3 rounded-lg"
          id="password"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="uppercase p-4 bg-slate-700 text-white font-semibold hover:opacity-80 rounded-lg disabled:opacity-60"
        >
          {loading ? "Loading..." : "sign in"}
        </button>
      </form>
      <div className="flex mt-5 gap-2">
        <p>Don't have an account? </p>
        <Link to={"/sign-up"}>
          <span className="text-cyan-500">Sign Up</span>
        </Link>
      </div>
      {error && <p className="text-red-600 mt-5">{error}</p>}
    </div>
  );
};

export default SignIn;
