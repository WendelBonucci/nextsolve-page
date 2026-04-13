"use client";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { FiCommand, FiActivity, FiZap } from "react-icons/fi";

export default function DescriptionAbout() {
    useEffect(() => {
        Aos.init({ duration: 1000, once: true });
    }, []);

    return (
        <section className="relative w-full py-24 bg-[#050505] overflow-hidden px-6">

            {/* Background Decorativo - Linha vertical de conexão */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-blue-500/20 via-blue-500/5 to-transparent hidden md:block" />

            <div className="max-w-6xl mx-auto relative z-10">

                {/* Cabeçalho da Sessão */}
                <div className="text-center mb-20" data-aos="fade-up">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 mb-6">
                        <FiCommand className="text-blue-500 text-xs" />
                        <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-blue-400">
                            DNA Tecnológico
                        </span>
                    </div>
                    <h1 className="font-syne font-black text-4xl md:text-6xl text-white leading-tight">
                        A mente por trás da <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Software Company</span>
                    </h1>
                </div>

                {/* Bloco de História e Fundadores */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">

                    <div className="relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm" data-aos="fade-right">
                        <div className="absolute -top-3 -left-3 w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-[0_0_15px_#2563eb]">
                            <FiActivity className="text-white text-sm" />
                        </div>
                        <p className="text-gray-400 leading-relaxed font-light text-lg">
                            A NextSolve Studio Vision nasceu em 2024, a partir de uma ideia poderosa: criar um networking sólido e uma comunidade de desenvolvedores apaixonados por transformar o mundo.
                        </p>
                        <div className="mt-8 pt-8 border-t border-white/5">
                            <p className="text-sm text-gray-500">
                                Liderada por <span className="text-blue-400 font-bold tracking-tight">Wendell Bonucci</span> e <span className="text-blue-400 font-bold tracking-tight">Guilherme Barroso</span>, a marca nasceu orientada a resultados e inovação constante.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center" data-aos="fade-left" data-aos-delay="200">
                        <p className="text-gray-400 leading-relaxed font-light text-lg border-l-2 border-blue-500/30 pl-8">
                            Hoje, a NextSolve atende diversos clientes, oferecendo soluções personalizadas que vão desde
                            <span className="text-white font-medium"> IA e Automação</span> até sistemas complexos de
                            <span className="text-white font-medium"> ERP e Marketing Digital.</span>
                        </p>
                    </div>
                </div>

                {/* Grid de Expertise - O que fazemos de forma resumida */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4" data-aos="fade-up" data-aos-delay="400">
                    {[
                        "Landing Pages", "SaaS & Apps",
                        "Automação IA", "Sistemas ERP",
                        "Tráfego Pago", "E-commerces",
                        "Marketing", "Evolução Tech"
                    ].map((item, index) => (
                        <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.01] border border-white/5 hover:border-blue-500/20 transition-all group">
                            <FiZap className="text-blue-500/40 group-hover:text-blue-500 transition-colors" />
                            <span className="text-[11px] font-bold uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors">
                                {item}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Chamada Final (CTA Interno) */}
                <div className="mt-20 text-center" data-aos="zoom-in">
                    <p className="text-gray-500 font-mono text-sm">
            // Pronta para transformar ideias em resultados reais_
                    </p>
                </div>

            </div>
        </section>
    );
}