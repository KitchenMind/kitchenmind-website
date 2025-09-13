import SuspenseWrapper from "@/components/suspense-wrapper";
import HomeTwoMain from "@/pages/homes/home-2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liko - Home Page",
};

export default function Home() {
  return (
    <SuspenseWrapper>
      <HomeTwoMain />
    </SuspenseWrapper>
  );
}
