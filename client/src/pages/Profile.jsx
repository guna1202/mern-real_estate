import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-center text-green-500 font-bold text-3xl">Profile</h1>
      <form className="flex flex-col gap-4">
        <img
          className="h-24 w-24 self-center mt-5 cursor-default"
          src={currentUser.avatar}
          alt="profile-picture"
        />
        <input
          type="text"
          placeholder="username"
          id="username"
          className="border p-3 rounded-lg bg-slate-200"
        />
        <input
          type="email"
          placeholder="email"
          id="email"
          className="border p-3 rounded-lg bg-slate-200"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          className="border p-3 rounded-lg bg-slate-200"
        />
        <button className="bg-slate-700 p-3 uppercase text-white font-semibold rounded-lg hover:opacity-80 disabled:60">
          update
        </button>
      </form>
      <div className="flex justify-between mt-6">
        <span className="text-red-700 font-semibold"> Sign out</span>
        <span className="text-red-700 font-semibold">Delete account</span>
      </div>
    </div>
  );
};

export default Profile;
