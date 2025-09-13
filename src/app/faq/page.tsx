import SuspenseWrapper from "@/components/suspense-wrapper";
import FaqMain from "@/pages/faq/faq-main";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liko - Faq page",
};

const FaqPage = () => {
  return (
    <SuspenseWrapper>
      <FaqMain/>
    </SuspenseWrapper>
  );
};

export default FaqPage;
