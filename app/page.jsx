import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Qta from "@/components/Qta";
import Testimonials from "@/components/Testimonials";

const page = () => {
  return (
    <main className="overflow-hidden">
      <Hero />
      <About />
      <Projects />
      <Testimonials />
      <Qta />
    </main>
  );
}

export default page;
