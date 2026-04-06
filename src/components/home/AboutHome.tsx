"use client";
import { useEffect } from "react";
import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";

export default function AboutHome() {
  useEffect(() => {
    Aos.init({
      duration: 700,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section className="w-full min-h-100 bg-black px-16 py-24">
      <div data-aos="fade-right" data-aos-duration="800" className="mb-12">
        <span className="block font-syne text-[11px] font-bold tracking-[0.2em] uppercase text-blue opacity-80 mb-4">
          Quem somos
        </span>
        <h1 className="font-syne font-extrabold text-[52px] leading-[1.05] text-white m-0">
          NextSolve Studio Vision
        </h1>
      </div>

      <div
        data-aos="fade-right"
        data-aos-duration="800"
        className="max-w-2xl flex flex-col gap-5 mb-10"
      >
        <p className="text-[15px] text-gray leading-[1.8] font-light m-0">
          Empresa de tecnologia e desenvolvimento criada para oferecer
          atendimento de excelência e soluções digitais estratégicas para o
          crescimento do seu negócio. Atuamos no fortalecimento da sua presença
          online, com a criação de lojas virtuais eficientes e de alta
          performance, e na automação de processos, tornando as operações mais
          ágeis, organizadas e produtivas.
        </p>
        <p className="text-[15px] text-gray leading-[1.8] font-light m-0">
          O diferencial da nossa empresa é que, além do suporte por agentes,
          trazemos contato humano e personalizado para nossos clientes,
          acompanhando cada detalhe do início ao fim do projeto. Com suporte
          gratuito de 45 dias, nossa meta é trazer o melhor produto com o melhor
          preço.
        </p>
      </div>

      <Link
        data-aos="fade-right"
        data-aos-duration="800"
        href=""
        className="inline-flex items-center gap-2 text-blue font-syne text-[13px] font-bold tracking-[0.06em] border-b border-blue/30 pb-0.5"
      >
        Saiba mais sobre nós →
      </Link>
    </section>
  );
}
