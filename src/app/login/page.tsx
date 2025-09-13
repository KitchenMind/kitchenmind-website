import React from "react";
import { Metadata } from "next";
import LoginMain from "@/pages/login/login-main";
import SuspenseWrapper from "@/components/suspense-wrapper";

export const metadata: Metadata = {
  title: "Liko - Login page",
};

const LoginPage = () => {
  return (
    <SuspenseWrapper>
      <LoginMain/>
    </SuspenseWrapper>
  );
};

export default LoginPage;
