import React from "react";
import styles from "@/styles/pages/login.module.scss";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LoginForm from "@/components/pages/login/LoginForm";

const LoginPage = () => {
  return (
    <main className="tw-flex tw-h-screen tw-justify-center tw-items-center">
      <LoginForm />
    </main>
  );
};

export default LoginPage;
