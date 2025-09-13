import SuspenseWrapper from "@/components/suspense-wrapper";
import LoginMain from "@/pages/login/login-main";
import { Metadata } from "next";

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
