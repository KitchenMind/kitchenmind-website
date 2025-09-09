import React from "react";
import Image from "next/image";
import google from "@/assets/img/login/google.svg";

interface SocialLoginProps {
  lang?: string;
}

export default function SocialLogin({ lang = 'vi' }: SocialLoginProps) {
  const texts = lang === 'en' 
    ? { signInGoogle: 'Continue with Google' }
    : { signInGoogle: 'Tiếp tục với Google' };

  const handleGoogleLogin = () => {
    // TODO: Implement Google OAuth
    console.log("Google login clicked");
  };

  return (
    <div className="tp-login-social mb-20">
      <div className="tp-login-google-wrapper">
        <button 
          type="button"
          className="tp-login-google-btn w-100 d-flex align-items-center justify-content-center"
          onClick={handleGoogleLogin}
        >
          <div className="tp-login-google-icon me-3">
            <Image src={google} alt="google" width={20} height={20} />
          </div>
          <span className="tp-login-google-text">{texts.signInGoogle}</span>
        </button>
      </div>
    </div>
  );
}
