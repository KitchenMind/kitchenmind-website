'use client';
import useScrollSmooth from '@/hooks/use-scroll-smooth';
import { ScrollSmoother, ScrollTrigger, SplitText } from '@/plugins';
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import AppDownload from "@/components/app-download/app-download";
import HeroBannerTwo from "@/components/hero-banner/hero-banner-two";
import InstagramArea from "@/components/instagram/instagram-area";
import LineText from "@/components/line-text/line-text";
import ProjectTwo from "@/components/project/project-two";
import ServiceTwo from "@/components/service/service-two";
import FooterTwo from "@/layouts/footers/footer-two";
import HeaderTwo from "@/layouts/headers/header-two";
import Wrapper from "@/layouts/wrapper";
// animation
import { bounceAnimation, charAnimation, fadeAnimation, heroBgAnimation, heroTitleAnim, zoomAnimation } from "@/utils/title-animation";
// Removed video animation import
import { hoverBtn } from "@/utils/hover-btn";
import { instagramAnim } from "@/utils/instagram-anim";
import { panelOneAnimation } from "@/utils/panel-animation";

const HomeTwoMain = () => {
  useScrollSmooth();
  useEffect(() => {
    document.body.classList.add("tp-smooth-scroll");
    return () => {
      document.body.classList.remove("tp-smooth-scroll");
    }
  }, []);

  useGSAP(() => {
    const timer = setTimeout(() => {
      // hero animation
      heroTitleAnim();
      heroBgAnimation();
      // bounce animation
      bounceAnimation();
      // app download animations
      charAnimation();
      fadeAnimation();
      zoomAnimation();
      // panel animation
      panelOneAnimation();
      // instagram animation
      instagramAnim();
      hoverBtn();
    }, 100)
    return () => clearTimeout(timer);
  });
  
  
  return (
    <Wrapper>
      {/* header area start */}
      <HeaderTwo />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* hero area start */}
            <HeroBannerTwo />
            {/* hero area end */}


            {/* app download area start */}
            <AppDownload />
            {/* app download area end */}

            {/* service area start */}
            <ServiceTwo />
            {/* service area end */}

            {/* project area */}
            <ProjectTwo/>
            {/* project area */}

        

            {/* line text area */}
            <LineText/>
            {/* line text area */}

            {/* instagram area */}
            <InstagramArea/>
            {/* instagram area */}
          </main>

          {/* footer area */}
          <FooterTwo/>
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default HomeTwoMain;
