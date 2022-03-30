import React from "react";
import TopBar from "./TopBar";

const Layout = ({children}) => {
  return (
    <div className="h-screen w-screen px-8 pt-4">
      <TopBar />
      {children}
    </div>
  );
};

export default Layout;
