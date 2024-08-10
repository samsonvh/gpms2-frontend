import React from "react";
import header from "@/styles/common/header.module.scss";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import DigitalClock from "../../clock/digital";

const Header = () => {
  return (
    <header className={`${header.container}`}>
      <div className={`${header.leftSection}`}>
        <DigitalClock />
      </div>
      <div className={`${header.centerSection}`}></div>
      <div className={`${header.rightSection}`}>
        <p>Firstname Lastname</p>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};

export default Header;
