import React, { ReactNode } from "react";

const Main: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <main className="w-full min-h-screen flex bg-white">{children}</main>;
};

export default Main;
