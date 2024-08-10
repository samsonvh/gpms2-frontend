import React from "react";
import MenuItem from "../menu-item";
import sidebarMenu from "@/styles/common/sidebar-menu.module.scss"

const MenuSection = () => {
  return (
    // <ul className="tw-flex-grow tw-flex tw-flex-col tw-gap-4 ">
    <ul className={`${sidebarMenu.menu}`}>
      <MenuItem>Inspection Requests</MenuItem>
      <MenuItem>Production Plans</MenuItem>
    </ul>
  );
};

export default MenuSection;
