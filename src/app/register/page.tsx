import SuspenseWrapper from "@/components/suspense-wrapper";
import RegisterMain from "@/pages/register/register-main";
import { Metadata } from "next";

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
