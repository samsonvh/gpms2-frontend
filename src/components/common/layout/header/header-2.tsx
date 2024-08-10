import React from "react";
import header from "@/styles/common/header2.module.scss";
import MenuButton from "../../buttons/menu-button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import DigitalClock from "../../clock/digital";

const Header2 = () => {
  return (
    <header className={`${header.container}`}>
      <MenuButton />
      <div className="tw-flex-grow">
        <DigitalClock />
      </div>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </header>
  );
};

export default Header2;
