import React from "react";
import header from "@/styles/common/header.module.scss";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import DigitalClock from "../../clock/digital";
import menuIcon from "@Public/menu.svg";
import Image from "next/image";

const Header = () => {
  return (
    <header className={`${header.container}`}>
      <div className={`${header.leftSection}`}>
        {/* <div className="tw-w-10 tw-h-10 tw-bg-black hover:tw-cursor-pointer"></div> */}
        <Image width={40} height={40} src={menuIcon} alt="menuIcon" className="hover:tw-bg-black tw-rounded-md"/>
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
