import SuspenseWrapper from "@/components/suspense-wrapper";
import BrandMain from "@/pages/brand/brand-main";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liko - Brand page",
};

const BrandPage = () => {
  return (
    <SuspenseWrapper>
      <BrandMain/>
    </SuspenseWrapper>
  );
};

export default BrandPage;
