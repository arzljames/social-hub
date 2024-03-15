import React from "react";
import UserProfile from "./components/UserProfile";
import Navigation from "./components/Navigation";
import Signout from "./components/Signout";

const Siderbar = () => {
  return (
    <nav className="w-full md:max-w-[230px] min-w-[230px] md:min-h-screen md:h-full bg-white border-r-[1px] p-4 py-10 h-12 flex flex-col justify-between">
      <div>
        <UserProfile />
        <Navigation />
      </div>
      <Signout />
    </nav>
  );
};

export default Siderbar;
