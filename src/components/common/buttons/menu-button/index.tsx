import React from "react";
import menuIcon from "@Public/menu.svg";
import Image from "next/image";

const MenuButton = () => {
  return (
    <div>
      <Image src={menuIcon} alt="menuIcon" />
    </div>
  );
};

export default MenuButton;
