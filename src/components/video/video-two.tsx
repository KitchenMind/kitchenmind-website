'use client';
import React from "react";
import { Leaf } from "../svg";
import { useSearchParams } from "next/navigation";

const VideoTwo = () => {
  const searchParams = useSearchParams();
  const lang = searchParams?.get('lang') || 'vi';
  const texts = lang === 'en' ? {
    subtitle: 'Work in motion',
    title: 'Play Reel',
    desc: "Our work is best experienced in motion. Don't forget to put on your headphones."
  } : {
    subtitle: 'Công việc đang diễn ra',
    title: 'Phát Reel',
    desc: 'Công việc của chúng tôi được trải nghiệm tốt nhất khi đang chuyển động. Đừng quên đeo tai nghe.'
  };
  
  return (
    <div className="tp-video-area">
      <div className="container container-1870">
        <div className="row">
          <div className="col-xl-12" >
            <div className="tp-video-wrap p-relative">
              <video
                className="play-video"
                loop={true}
                muted={true}
                autoPlay={true}
                playsInline={true}
              >
                <source
                  src="https://html.hixstudio.net/videos/liko/liko-4.mp4"
                  type="video/mp4"
                />
              </video>
              <div className="tp-video-content text-center">
                <span className="tp-video-subtitle">
                  <span>
                    <Leaf />
                  </span>
                  {texts.subtitle}
                </span>
                <h2 className="tp-video-title">{texts.title}</h2>
                <p>
                  {texts.desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTwo;
