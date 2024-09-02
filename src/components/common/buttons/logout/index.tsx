"use client";
import { signOut } from "next-auth/react";
import React from "react";

const LogoutButton = () => {
  return (
    <span
      onClick={() => {
        signOut({ callbackUrl: "/", redirect: true });
      }}
    >
      logout
    </span>
  );
};

export default LogoutButton;
