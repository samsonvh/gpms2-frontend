import React from "react";
import MenuSection from "./sections/menu-section";
import SettingSection from "./sections/setting-section";
import sidebarMenu from "@/styles/common/sidebar-menu.module.scss";

const SidebarMenu = () => {
  return (
    // <div className="tw-sticky tw-bg-slate-400 tw-pt-4 tw-pb-8 tw-flex tw-flex-col tw-gap-8 tw-shadow-inner">
    <div className={`${sidebarMenu.container}`}>
      <div className="tw-px-4">
        <div className="tw-w-full tw-h-20 tw-bg-black"></div>
      </div>
      <MenuSection />
      <SettingSection />
    </div>
  );
};

export default SidebarMenu;
