'use client';
import { useLanguage } from "@/hooks/use-language";
import { useForm } from "react-hook-form";

export default function ContactCTA() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => console.log(data);
  const { currentLang } = useLanguage();
  const texts = currentLang === 'en' ? {
    title: 'Get in Touch',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    btn: 'Send'
  } : {
    title: 'Liên Hệ',
    name: 'Tên',
    email: 'Email',
    message: 'Tin nhắn',
    btn: 'Gửi'
  };

  return (
    <section className="contact-cta">
      <h2>{texts.title}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder={texts.name} {...register("name")} />
        <input type="email" placeholder={texts.email} {...register("email")} />
        <textarea placeholder={texts.message} {...register("message")}></textarea>
        <button type="submit">{texts.btn}</button>
      </form>
    </section>
  );
}

