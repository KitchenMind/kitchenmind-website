import React from "react";
import { Metadata } from "next";
import RegisterMain from "@/pages/register/register-main";
import SuspenseWrapper from "@/components/suspense-wrapper";

export const metadata: Metadata = {
  title: "Liko - Register page",
};

const RegisterPage = () => {
  return (
    <SuspenseWrapper>
      <RegisterMain/>
    </SuspenseWrapper>
  );
};

export default RegisterPage;
