// @ts-ignore
import Hero from "@/components/main/Hero";
import About from "@/components/main/About";
import Skills from "@/components/main/Skills";
import Experience from "@/components/main/Experience";
import Projects from "@/components/main/Project";
import Footer from "@/components/main/Footer";
import Navbar from "@/components/main/Navbar";
export default function Home() {
  return (
    <main className="h-full w-full relative">
      <div className="flex flex-col gap-20 relative z-10">
        <Navbar />
        <Hero />  
        <About />
        <Skills />
        <Experience />
        <Projects />
        <div className="relative z-10">
          <Footer />
        </div>
      </div>
    </main>
  );
}
