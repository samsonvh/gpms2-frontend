import React from "react";
import logo from "@Public/logo.svg";
import Image from "next/image";

const HorizontalLogo = () => {
  return (
    <div className="tw-flex tw-items-center tw-gap-2 tw-justify-center">
      <Image className="tw-w-12" width={40} height={40} src={logo} alt="logo" />
      <p className="tw-text-5xl">GPMS</p>
    </div>
  );
};

export default HorizontalLogo;
