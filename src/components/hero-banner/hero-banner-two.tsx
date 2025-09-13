'use client';
// Removed unused imports - no text content needed
// Video background instead of static image

const HeroBannerTwo = () => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  // Simplified component - just video background
  return (
    <div className="tp-hero-2-area tp-hero-2-pt">
      <div className="container container-1870">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-hero-2-wrapper-main">
              <div className="tp-hero-2-wrapper d-flex align-items-center p-relative">
                <div className="tp-hero-2-bg tp-gsap-bg tp-hero-bg-single">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      zIndex: -1
                    }}
                  >
                    <source src={`${basePath}/assets/videos/bg-landing-1-en.mp4`} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                {/* Text content removed to showcase video background */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBannerTwo;
