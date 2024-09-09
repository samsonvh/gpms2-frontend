"use client";
import { signOut } from "next-auth/react";
import React from "react";

const LogoutButton = () => {
  return (
    <span
      className="tw-p-2 hover:tw-cursor-pointer hover:tw-underline"
      onClick={() => {
        signOut({ callbackUrl: "/", redirect: true });
      }}
    >
      logout
    </span>
  );
};

export default LogoutButton;
