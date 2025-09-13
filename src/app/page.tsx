import { Metadata } from "next";
import HomeTwoMain from "@/pages/homes/home-2";
import SuspenseWrapper from "@/components/suspense-wrapper";

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
