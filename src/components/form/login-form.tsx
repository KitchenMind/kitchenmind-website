import React from "react";
import { CloseEye, OpenEye } from "../svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ErrorMsg from "../error-msg";

type FormData = {
  email: string;
  password: string;
};

interface LoginFormProps {
  lang?: string;
}

export default function LoginForm({ lang = 'vi' }: LoginFormProps) {
  const texts = lang === 'en' 
    ? {
        email: 'Email Address',
        password: 'Password',
        emailPlaceholder: 'Enter your email',
        passwordPlaceholder: 'Enter your password',
        rememberMe: 'Remember me',
        forgotPassword: 'Forgot Password?',
        loginButton: 'Sign In',
        emailRequired: 'Email is required',
        emailInvalid: 'Please enter a valid email',
        passwordRequired: 'Password is required',
        passwordMin: 'Password must be at least 6 characters'
      }
    : {
        email: 'Địa Chỉ Email',
        password: 'Mật Khẩu',
        emailPlaceholder: 'Nhập email của bạn',
        passwordPlaceholder: 'Nhập mật khẩu',
        rememberMe: 'Ghi nhớ đăng nhập',
        forgotPassword: 'Quên mật khẩu?',
        loginButton: 'Đăng Nhập',
        emailRequired: 'Email là bắt buộc',
        emailInvalid: 'Vui lòng nhập email hợp lệ',
        passwordRequired: 'Mật khẩu là bắt buộc',
        passwordMin: 'Mật khẩu phải có ít nhất 6 ký tự'
      };

  const schema = yup.object().shape({
    email: yup.string().required(texts.emailRequired).email(texts.emailInvalid),
    password: yup.string().required(texts.passwordRequired).min(6, texts.passwordMin),
  });
  const [showPass, setShowPass] = React.useState(false);
  const {register,handleSubmit,reset,formState: { errors }} = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = handleSubmit((data) => {
    // TODO: Implement actual login logic
    console.log("Login data:", data);
    alert(JSON.stringify(data))
    reset()
  });

  return (
    <form onSubmit={onSubmit} className="tp-modern-form">
      <div className="tp-login-input-wrapper">

        <div className="tp-login-input-box mb-20">
          <div className="tp-login-input-title mb-10">
            <label htmlFor="email" className="tp-form-label">{texts.email}</label>
          </div>
          <div className="tp-login-input">
            <input 
              id="email" 
              {...register("email")} 
              type="email" 
              placeholder={texts.emailPlaceholder}
              className="tp-form-input"
            />
          </div>
          <ErrorMsg msg={errors.email?.message!} />
        </div>

        <div className="tp-login-input-box mb-20">
          <div className="tp-login-input-title mb-10">
            <label htmlFor="password" className="tp-form-label">{texts.password}</label>
          </div>
          <div className="tp-login-input p-relative">
            <input
              id="password"
              type={showPass ? "text" : "password"}
              placeholder={texts.passwordPlaceholder}
              {...register("password")}
              className="tp-form-input"
            />
            <div
              className="tp-login-input-eye"
              id="password-show-toggle"
              onClick={() => setShowPass(!showPass)}
            >
              {showPass && (
                <span id="open-eye" className="open-eye">
                  <OpenEye />
                </span>
              )}
              {!showPass && (
                <span id="close-eye" className="open-close">
                  <CloseEye />
                </span>
              )}
            </div>
          </div>
          <ErrorMsg msg={errors.password?.message!} />
        </div>

      </div>
      
      <div className="tp-login-options d-flex align-items-center justify-content-between mb-30">
        <div className="tp-login-remember">
          <input id="remember" type="checkbox" className="tp-form-check" />
          <label htmlFor="remember" className="tp-form-check-label">{texts.rememberMe}</label>
        </div>
        <div className="tp-login-forgot">
          <a href="#" className="tp-forgot-link">{texts.forgotPassword}</a>
        </div>
      </div>
      
      <div className="tp-login-submit">
        <button type="submit" className="tp-login-btn w-100 tp-btn-primary">
          {texts.loginButton}
        </button>
      </div>
    </form>
  );
}
