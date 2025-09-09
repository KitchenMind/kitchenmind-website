import { Metadata } from "next";
import HomeTwoMain from "@/pages/homes/home-2";

export const metadata: Metadata = {
  title: "Liko - Home Page",
};

export default function Home() {
  return (
    <>
      <HomeTwoMain />
    </>
  );
}
