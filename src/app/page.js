import Hero from "@/components/home/Hero";
import Service from "@/components/home/Services";
import Reveal from "@/components/ui/Reveal";
import Process from "@/components/home/Process";
import About from "@/components/home/About";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CTA from "@/components/home/CTA";

export default function Home(){

    return(
        <main className="flex flex-col gap-32 overflow-x-hidden">
            <Reveal><Hero/></Reveal>
            <Reveal><About/></Reveal>
            <Reveal><Service/></Reveal>
            <Reveal><Process/></Reveal>
            <Reveal><WhyChooseUs/></Reveal>
            <Reveal><CTA/></Reveal>
        </main>
    );
}