'use client';
import React from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "next/navigation";

export default function ContactCTA() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
  const lang = useSearchParams()?.get('lang') || 'vi';
  const texts = lang === 'en' ? {
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

