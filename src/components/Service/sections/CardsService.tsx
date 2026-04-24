"use client"
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'

export default function CardsService() {
    useEffect(() => {
        Aos.init({ duration: 1000, once: true })
    })


    type services = {
        id: number;
        title: string;
        description: string;
    };

    const service: services[] = [
        { id: 1, title: 'E-commerce', description: '' },
        { id: 2, title: 'Landing Page', description: '' },
        { id: 3, title: 'Automoção com IA', description: '' },
        { id: 4, title: 'Aplicativos - Android/IOs', description: '' },
        { id: 5, title: 'Sistemas Empresariais', description: '' },
    ]

    return (
        <section className="">

        </section>
    )
}
