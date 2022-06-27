import React, { PropsWithChildren } from "react";
import DefaultBackgroundImage from "../../images/default_back.jpg";

import Sidebar from "./Sidebar";

interface LayoutProps {}

const Layout: React.FC<PropsWithChildren<LayoutProps>> = ({ children }) => {
  return (
    <div
      style={{ backgroundImage: `url('${DefaultBackgroundImage}')` }}
      className="w-full h-screen flex bg-cover"
    >
      <Sidebar />
      <div className="flex-grow overflow-auto">{children}</div>
    </div>
  );
};

export default Layout;
