import React from "react";
import { HiOutlineLogout } from "react-icons/hi";

const Signout = () => {
  return (
    <button className="bg-slate-100 py-3 rounded-md font-medium text-sm text-text-primary transition hover:bg-gray-200 flex items-center justify-center">
      <HiOutlineLogout size={16} className="mr-2" /> Sign out
    </button>
  );
};

export default Signout;
