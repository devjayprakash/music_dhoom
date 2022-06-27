import * as React from "react";
import { RiHeadphoneFill, RiMusic2Line, RiMusicLine } from "react-icons/ri";

interface MenuDataType {
  icon: React.ReactNode;
  title: string;
  key: string;
}

interface TileProps {
  data: MenuDataType;
  onClick?: () => void;
  active: boolean;
}

const Tile: React.FC<TileProps> = ({ data, onClick, active }) => {
  const styles = {
    tileStyle: `flex ${
      active ? "bg-white text-white" : "bg-black text-gray-300"
    } bg-opacity-10 items-center text-xl space-x-3 hover:bg-white hover:bg-opacity-10`,
    rectangleStyle: `w-1 h-14 ${active ? "bg-white" : "bg-transparent"} `,
  };

  return (
    <div
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
      className={styles.tileStyle}
    >
      <div className={styles.rectangleStyle}></div>
      <div>{data.icon}</div>
      <div>{data.title}</div>
    </div>
  );
};

const Menu: React.FC = () => {
  let [menuData, setMenuData] = React.useState<MenuDataType[]>([
    {
      icon: <RiMusic2Line />,
      title: "Albums",
      key: "menu_data_1",
    },
    {
      icon: <RiMusicLine />,
      title: "Recent",
      key: "menu_data_2",
    },
  ]);

  let [active, setActive] = React.useState("menu_data_1");

  return (
    <div className="w-full">
      {menuData.map((data) => (
        <Tile
          active={active === data.key}
          key={data.key}
          onClick={() => {
            setActive(data.key);
          }}
          data={data}
        />
      ))}
    </div>
  );
};

const Brand: React.FC = () => {
  return (
    <div className="text-white items-center text-3xl w-full text-center p-6 flex">
      <div className="mr-3">
        <RiHeadphoneFill />
      </div>{" "}
      Music Dhoom
    </div>
  );
};

const Sidebar: React.FC = () => {
  return (
    <div className="h-full w-80 bg-clip-padding backdrop-filter bg-black backdrop-blur-xl bg-opacity-40 border-gray-100">
      <Brand />
      <Menu />
    </div>
  );
};

export default Sidebar;
