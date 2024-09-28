"use client";
import { signOut } from "next-auth/react";
import Image from "next/image";
import React from "react";
import signOutIcon from "@Public/icons/signout.svg";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

const LogoutButton = () => {
  return (
    // <button className="tw-p-1 border hover:tw-opacity-80">
    //   <Image className="tw-scale-x-[-1]" src={signOutIcon} alt="SignOutIcon" />
    // </button>
    <Button onClick={() => signOut({callbackUrl: "/", redirect: true})} variant={"link"} size={"icon"}>
      <LogOut />
    </Button>
  );
};

export default LogoutButton;
