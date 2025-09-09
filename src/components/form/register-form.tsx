import React from "react";
import { CloseEye, OpenEye } from "../svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ErrorMsg from "../error-msg";

type FormData = {
  name: string;
  email: string;
  password: string;
};

interface RegisterFormProps {
  lang?: string;
}

export default function RegisterForm({ lang = 'vi' }: RegisterFormProps) {
  const texts = lang === 'en' 
    ? {
        name: 'Full Name',
        email: 'Email Address',
        password: 'Password',
        namePlaceholder: 'Enter your full name',
        emailPlaceholder: 'Enter your email',
        passwordPlaceholder: 'Create a password',
        acceptTerms: 'I accept the Terms of Service & Privacy Policy',
        registerButton: 'Create Account',
        nameRequired: 'Name is required',
        emailRequired: 'Email is required',
        emailInvalid: 'Please enter a valid email',
        passwordRequired: 'Password is required',
        passwordMin: 'Password must be at least 6 characters'
      }
    : {
        name: 'Họ và Tên',
        email: 'Địa Chỉ Email',
        password: 'Mật Khẩu',
        namePlaceholder: 'Nhập họ và tên của bạn',
        emailPlaceholder: 'Nhập email của bạn',
        passwordPlaceholder: 'Tạo mật khẩu',
        acceptTerms: 'Tôi đồng ý với Điều Khoản Dịch Vụ & Chính Sách Bảo Mật',
        registerButton: 'Tạo Tài Khoản',
        nameRequired: 'Họ và tên là bắt buộc',
        emailRequired: 'Email là bắt buộc',
        emailInvalid: 'Vui lòng nhập email hợp lệ',
        passwordRequired: 'Mật khẩu là bắt buộc',
        passwordMin: 'Mật khẩu phải có ít nhất 6 ký tự'
      };

  const schema = yup.object().shape({
    name: yup.string().required(texts.nameRequired),
    email: yup.string().required(texts.emailRequired).email(texts.emailInvalid),
    password: yup.string().required(texts.passwordRequired).min(6, texts.passwordMin),
  });
  const [showPass, setShowPass] = React.useState(false);
  const {register,handleSubmit,reset,formState: { errors }} = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = handleSubmit((data) => {
    // TODO: Implement actual register logic
    console.log("Register data:", data);
    alert(JSON.stringify(data))
    reset()
  });

  return (
    <form onSubmit={onSubmit} className="tp-modern-form">
      <div className="tp-login-input-wrapper">

        <div className="tp-login-input-box mb-20">
          <div className="tp-login-input-title mb-10">
            <label htmlFor="name" className="tp-form-label">{texts.name}</label>
          </div>
          <div className="tp-login-input">
            <input 
              id="name" 
              {...register("name")} 
              type="text" 
              placeholder={texts.namePlaceholder}
              className="tp-form-input"
            />
          </div>
          <ErrorMsg msg={errors.name?.message!} />
        </div>

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
              type={showPass ? "text" : "password"}
              placeholder={texts.passwordPlaceholder}
              id="password"
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
      
      <div className="tp-login-terms mb-30">
        <div className="tp-login-remember">
          <input id="terms" type="checkbox" className="tp-form-check" required />
          <label htmlFor="terms" className="tp-form-check-label">
            {texts.acceptTerms}
          </label>
        </div>
      </div>
      
      <div className="tp-login-submit">
        <button type="submit" className="tp-login-btn w-100 tp-btn-primary">
          {texts.registerButton}
        </button>
      </div>
    </form>
  );
}
