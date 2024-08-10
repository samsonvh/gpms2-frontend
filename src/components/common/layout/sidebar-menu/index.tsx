import React from "react";
import MenuSection from "./sections/menu-section";
import SettingSection from "./sections/setting-section";
import sidebarMenu from "@/styles/common/sidebar-menu.module.scss";
import HorizontalLogo from "../../logo/horizontal";

const SidebarMenu = () => {
  return (
    // <div className="tw-sticky tw-bg-slate-400 tw-pt-4 tw-pb-8 tw-flex tw-flex-col tw-gap-8 tw-shadow-inner">
    <div className={`${sidebarMenu.container}`}>
      <HorizontalLogo />
      <MenuSection />
      <SettingSection />
    </div>
  );
};

export default SidebarMenu;
