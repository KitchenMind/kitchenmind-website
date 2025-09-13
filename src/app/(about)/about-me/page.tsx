import AboutMeMain from "@/pages/about/about-me";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liko - About us page",
};

const AboutMePage = () => {
  return (
    <AboutMeMain/>
  );
};

export default AboutMePage;
