import * as React from "react";
import {
  FiHeadphones,
  FiHeart,
  FiHome,
  FiMusic,
  FiSearch,
} from "react-icons/fi";

interface SidebarMenuItemProps {
  active: boolean;
  icon: React.ReactNode;
  onClick: () => void;
}

const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({
  onClick,
  active,
  icon,
}) => {
  let style = active
    ? "cursor-pointer p-3 rounded-md bg-black text-white"
    : "hover:bg-gray-100 cursor-pointer p-3 rounded-md bg-white text-gray-500";

  return (
    <div onClick={onClick} className={style}>
      {icon}
    </div>
  );
};

const Sidebar = () => {
  let [active, setActive] = React.useState("md-1");
  const menuData = [
    {
      icon: <FiHome size={16} />,
      key: "md-1",
    },
    {
      icon: <FiMusic size={16} />,
      key: "md-2",
    },
    {
      icon: <FiSearch size={16} />,
      key: "md-3",
    },
    {
      icon: <FiHeart size={16} />,
      key: "md-4",
    },
  ];

  return (
    <div className="p-4 h-full bg-white flex flex-col">
      <div className="flex flex-col justify-center space-y-3 items-center flex-grow">
        {menuData.map((data) => {
          return (
            <SidebarMenuItem
              onClick={() => setActive(data.key)}
              key={data.key}
              active={active === data.key}
              icon={data.icon}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
