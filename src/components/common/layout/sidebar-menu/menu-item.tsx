import Image from "next/image";
import React, { ReactNode } from "react";
import sidebarMenu from "@/styles/common/sidebar-menu.module.scss";

const MenuItem = ({ children }: { children: ReactNode }) => {
  return (
    // <li className="tw-flex tw-items-center tw-gap-4 tw-px-4 tw-py-2 hover:tw-cursor-pointer tw-transition tw-ease-in-out hover:tw-bg-white">
    <li className={`${sidebarMenu.menuItem}`}>
      <div className={`${sidebarMenu.menuItemBackground}`}/>
      <div className={`${sidebarMenu.menuItemContent}`}>
        <Image
          width={40}
          height={40}
          src={"https://github.com/shadcn.png"}
          alt="icon"
        />
        <p className="tw-flex-grow">{children}</p>
      </div>
    </li>
  );
};

export default MenuItem;
