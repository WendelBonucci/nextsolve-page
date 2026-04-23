"use client";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";

export default function ContentBlog() {
    useEffect(() => {
        Aos.init({ duration: 1000, once: true });
    }, []);

    type BlogItem = {
        id: number;
        title: string;
        data: string;
        description: string;
        link: string;
        image: string;
        tag: string;
    };

    const dtBlog: BlogItem[] = [
        {
            id: 1,
            title: 'MEDALHAS BRASIL',
            data: '02-02-2026',
            tag: 'E-commerce',
            description: 'Website institucional e catálogo nacional de medalhas e troféus para competições de alto nível desenvolvido para a empresa Design Acessórios Ltda.',
            link: 'https://www.medalhasbrasil.com/',
            image: '/medal.png',
        },
        {
            id: 2,
            title: 'KORIVO FINANCE',
            data: '02-02-2026',
            tag: 'SaaS / IA',
            description: 'Sistema financeiro completo com gestão de estoque e agente de IA integrado para automação de processos corporativos.',
            link: 'https://korivo.vercel.app/',
            image: '/korivo.png',
        },
        {
            id: 3,
            title: 'ÓTICAS VISIOCORP',
            data: '02-02-2026',
            tag: 'Landing Page',
            description: 'Presença digital estratégica com foco em conversão e fortalecimento da marca no mercado óptico.',
            link: 'https://visio-corp.vercel.app',
            image: '/visiocorp.png',
        },
        {
            id: 4,
            title: 'TASK MANAGER',
            data: '02-02-2026',
            tag: 'Software ERP',
            description: 'Plataforma de gestão de produtividade interna com acompanhamento de atividades por colaborador e controle de projetos.',
            link: 'https://task-manager-solve.vercel.app/projects',
            image: '/taskmanager.png',
        },
    ];

    return (
        <section className="w-full py-24 bg-[#050505] px-6">
            <div className="max-w-5xl mx-auto">

                <div className="mb-12" data-aos="fade-up">
                    <h1 className="font-syne font-black text-3xl md:text-4xl text-white uppercase tracking-tighter mb-4">
                        Novidades da Tecnologia
                    </h1>
                    <div className="w-16 h-2px bg-blue-600 mb-8" />

                    <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-3xl font-light">
                        Se queres estar a par dos projetos mais recentes desenvolvidos pela NextSolve, vieste ao lugar certo.
                        Abaixo apresentamos nossos últimos lançamentos, sistemas ERP, e-commerces e soluções em IA.
                    </p>
                </div>

                <div className="w-full h-px  mb-16" />

                <div className="space-y-16">
                    {dtBlog.map((item) => (
                        <Link
                            key={item.id}
                            href={item.link}
                            target="_blank"
                            data-aos="fade-up"
                            className="group grid grid-cols-1 md:grid-cols-[350px_1fr] gap-8 items-start">
                            <div className="relative h-56 w-full overflow-hidden rounded-sm bg-white/5 border border-white/5">
                                <div className="absolute inset-0 bg-blue-900/10 z-10 group-hover:bg-transparent transition-colors duration-500" />
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-all duration-700"
                                />
                            </div>

                            <div className="flex flex-col">
                                <h2 className="font-syne font-black text-xl md:text-2xl text-white uppercase tracking-tight group-hover:text-blue-500 transition-colors">{item.title}</h2>
                                <span className="text-gray-500 font-mono text-xs mt-1 mb-4 italic">{item.data} — {item.tag}</span>
                                <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light">{item.description}</p>
                                <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-blue-500">Ver projeto completo</span>
                                    <div className="w-8 h-px bg-blue-500" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}