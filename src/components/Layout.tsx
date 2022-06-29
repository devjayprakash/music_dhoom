import React, { PropsWithChildren } from "react";


import Sidebar from "./Sidebar";


interface LayoutProps {}

const Layout: React.FC<PropsWithChildren<LayoutProps>> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen ">
      <div className="draggable fixed flex hover:backdrop-blur-lg duration-100 justify-end w-full pr-5 h-7 bg-transparent hover:bg-white hover:bg-opacity-25"></div>
      <div className="flex-grow flex h-full">
        <Sidebar />
        <div className="flex-grow overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
