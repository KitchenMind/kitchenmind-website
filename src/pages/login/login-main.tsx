"use client";
import { gsap } from "gsap";
import React from "react";
import Link from "next/link";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderTwelve from "@/layouts/headers/header-twelve";
import FooterTwo from "@/layouts/footers/footer-two";
import SocialLogin from "@/components/form/social-login";
import LoginForm from "@/components/form/login-form";

// Import necessary
import { useForm } from "react-hook-form";
import { useSearchParams } from "next/navigation";

const LoginMain = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
  const lang = useSearchParams()?.get('lang') || 'vi';
  const texts = lang === 'en' ? { title: 'Sign In KitchenMind', noAccount: "Don’t have an account?", signUp: 'Sign Up', or: 'or Sign in with', email: 'Email' } : { title: 'Đăng Nhập KitchenMind', noAccount: 'Chưa có tài khoản?', signUp: 'Đăng Ký', or: 'hoặc Đăng nhập với', email: 'Email' };

  useScrollSmooth();

  return (
    <Wrapper>
      {/* header area start */}
      <HeaderTwelve />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* register area */}
            <section className="tp-login-area pt-180 pb-140 p-relative z-index-1 fix">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-xl-6 col-lg-8">
                    <div className="tp-login-wrapper">
                      <div className="tp-login-top text-center mb-30">
                        <h3 className="tp-login-title">{texts.title}</h3>
                        <p>{texts.noAccount} <span><Link href="/register">{texts.signUp}</Link></span></p>
                      </div>
                      <div className="tp-login-option">
                        <SocialLogin />
                        <p className="tp-login-mail text-center mb-40">{texts.or} <a href="#">Email</a></p>
                        <form onSubmit={handleSubmit(onSubmit)}>
                          <input type="email" placeholder={texts.email} {...register("email", { required: true })} />
                          <input type="password" placeholder="Password" {...register("password", { required: true })} />
                          <button type="submit">Login</button>
                        </form>
                        {/* Add OAuth */}
                        <button>Sign in with Google</button>
                        <button>Sign in with Apple</button>
                        <label><input type="checkbox" /> Remember me</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* register area */}
          </main>

          {/* footer area */}
          <FooterTwo topCls="" />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default LoginMain;
