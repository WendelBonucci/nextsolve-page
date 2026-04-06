"use client";
import { useEffect } from "react";
import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";

export default function CommunityHome() {
  useEffect(() => {
    Aos.init({ duration: 700, easing: "ease-in-out", once: true });
  }, []);

  return (
    <section
      className="w-full min-h-screen flex flex-col items-center bg-black px-16 py-24 max-md:px-6"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      {/* Topo centralizado */}
      <div className="text-center mb-14">
        <span className="block font-syne text-[11px] font-bold tracking-[0.2em] uppercase text-blue opacity-80 mb-4">
          Para Você, Desenvolvedor
        </span>
        <h1 className="font-syne font-extrabold text-[42px] leading-[1.1] text-white m-0">
          Se você é desenvolvedor ou atua
          <br className="max-md:hidden" /> em alguma área de TI
        </h1>
      </div>

      {/* Card com texto */}
      <div className="w-5xl mx-auto border-l-[1.5px] border-blue/20 pl-7">
        <p className="text-base text-gray leading-[1.8] font-light mb-5">
          Isso mesmo! Se você é desenvolvedor, atua na área de tecnologia ou até
          mesmo no universo dos jogos, temos uma comunidade incrível esperando
          por você. Contamos com grupos voltados para front-end, back-end,
          desenvolvimento de jogos, networking e muito mais!
        </p>
        <p className="text-base text-gray leading-[1.8] font-light mb-7">
          Nosso objetivo é reunir profissionais da tecnologia em um ambiente
          colaborativo e enriquecedor, promovendo conexões reais, troca de
          conhecimentos e oportunidades para participação em projetos e
          atividades em conjunto.
        </p>
        <Link
          href="/community"
          className="inline-flex items-center gap-2 text-blue font-syne text-[13px] font-bold tracking-[0.06em] border-b border-blue/30 pb-px"
        >
          Saiba mais sobre a Comunidade →
        </Link>
      </div>
    </section>
  );
}
