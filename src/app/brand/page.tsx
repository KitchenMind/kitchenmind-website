import React from "react";
import { Metadata } from "next";
import BrandMain from "@/pages/brand/brand-main";
import SuspenseWrapper from "@/components/suspense-wrapper";

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
