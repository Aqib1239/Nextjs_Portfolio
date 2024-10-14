import Hero from "@/components/Hero";
import Image from "next/image";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contacts from "@/components/Contacts";
import Qta from "@/components/Qta";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Qta />
      {/* <Contacts /> */}
    </main>
  );
}
